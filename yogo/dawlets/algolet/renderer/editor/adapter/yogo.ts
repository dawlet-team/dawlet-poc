import { initDawletSdk } from '@dawlet/graphql'
import { ListAllGroupsQuery } from '@dawlet/graphql/lib/sdk'
import { remote } from 'electron'

type Sdk = ReturnType<typeof initDawletSdk>
type Pitch = number

type PitchInput = number | {
  from: number
  to: number
}
type Length = number
type Offset = number

const GROUP_ID = 'algolet-beta-group'
class Algolet {
  sdk: Sdk
  pitches: Pitch[]
  lens: Length[]
  offsets: Offset[]
  constructor(sdk: Sdk) {
    this.sdk = sdk
    this.pitches = []
    this.lens = []
    this.offsets = []
  }

  clone() {
    const clone = Object.assign( Object.create( Object.getPrototypeOf(this)), this)
    return clone
  }

  clear() {
    this.pitches = []
    this.lens = []
    this.offsets = []
  }

  addPitch(pitch: PitchInput) {
    if (typeof pitch === 'number') {
      this.pitches.push(pitch)
    } else {
      const { from, to } = pitch
      if (from < to) {
        for (let i = from; i <= to; i++) {
          this.pitches.push(i)
        }
      } else {
        for (let i = from; i >= to; i--) {
          this.pitches.push(i)
        }
      }
    }
    return this
  }

  addLens(lens: Length) {
    const offset = this.lens.reduce((len, accum) => {
      return accum + len
    }, 0)
    this.lens.push(lens)
    this.offsets.push(offset)
    return this
  }

  span(unit: number) {
    this.pitches.forEach(() => {
      this.addLens(unit)
    })
  }


  static eval(algo: InstanceType<typeof Algolet>) {
    // TODO: convert freq to pitch
    const notes = algo.lens.map((duration, i) => ({
      freq: algo.pitches[i],
      duration,
      offset: algo.offsets[i]
    }))
    console.log('algo',algo)
    return algo.sdk.PushNote({
      pushNoteInput: {
        groupId: GROUP_ID,
        notes
      }
    })
  }

  static async clear(sdk: Sdk) {
    await sdk.ResetAllGroups();
  }

  static async init(sdk: Sdk) {
    await sdk.CreateGroup({ id: GROUP_ID })
  }

  static async show(sdk: Sdk) {
    const { listAllGroups } = await sdk.ListAllGroups()
    return listAllGroups
  }
}

export function evalAsyncFunc(code: string): () => Promise<ListAllGroupsQuery['listAllGroups']> {
  const sdk = initDawletSdk()
  const al = new Algolet(sdk)
  const action = `
(async function() {
  await Algolet.clear(sdk)
  await Algolet.init(sdk)
  ${code}
  return Algolet.show(sdk)
})
`
  return eval(action)
}

const title = remote.getCurrentWindow().getTitle();
export const initialCode = `
/* ${title} */
al
    .addPitch({ from: 60, to: 70 })
    .span(300)
await Algolet.eval(al)
`