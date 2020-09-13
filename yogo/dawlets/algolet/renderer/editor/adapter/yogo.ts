import { initDawletSdk } from '@dawlet/graphql'
import { ListAllGroupsQuery } from '@dawlet/graphql/lib/sdk'
import { remote } from 'electron'

const sdk = initDawletSdk()
type Pitch = number

type PitchInput = number | {
  from: number
  to: number
}
type Length = number
type Offset = number

const GROUP_ID = 'algolet-beta-group'
class Algolet {
  pitches: Pitch[]
  lens: Length[]
  constructor() {
    this.pitches = []
    this.lens = []
  }

  clear() {
    this.pitches = []
    this.lens = []
    return this
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
    this.lens.push(lens)
    return this
  }

  repeat(times: number) {
    const pitches = this.pitches;
    const lens = this.lens;
    for (let i = 0; i < times; i++) {
      this.pitches = [...this.pitches, ...pitches]
      this.lens = [...this.lens, ...lens]
    }
    return this
  }

  reverse() {
    this.pitches.reverse()
    this.lens.reverse()
    return this
  }

  span(unit: number) {
    this.pitches.forEach(() => {
      this.addLens(unit)
    })
    return this
  }

  static create() {
    return new Algolet()
  }

  static clone(obj: InstanceType<typeof Algolet>) {
    const clone = Object.assign( Object.create( Object.getPrototypeOf(obj)), JSON.parse(JSON.stringify(obj)))
    return clone
  }

  static eval(algo: InstanceType<typeof Algolet>) {
    console.log('eval', algo)
    // TODO: convert freq to pitch

    const offsets = []
    let offsetCursor = 0;
    for (let i = 0; i < algo.lens.length; i++){
      if (i !== 0) {
        offsetCursor += algo.lens[i]
      }
      offsets.push(offsetCursor)
    }


    const notes = algo.lens.map((duration, i) => ({
      freq: algo.pitches[i],
      duration,
      offset: offsets[i]
    }))
    return sdk.PushNote({
      pushNoteInput: {
        groupId: GROUP_ID,
        notes: notes
      }
    })
  }

  static async clear() {
    await sdk.ResetAllGroups();
  }

  static async init() {
    await sdk.CreateGroup({ id: GROUP_ID })
  }

  static async show() {
    const { listAllGroups } = await sdk.ListAllGroups()
    return listAllGroups
  }
}

export function evalAsyncFunc(code: string): () => Promise<ListAllGroupsQuery['listAllGroups']> {
  const action = `
(async function() {
  await Algolet.clear()
  await Algolet.init()
  ${code}
  return Algolet.show()
})
`
  return eval(action)
}

const title = remote.getCurrentWindow().getTitle();
export const initialCode = `
/* ${title} */
const al = new Algolet()
al
    .addPitch({ from: 60, to: 70 })
    .span(300)
const al2 = Algolet.clone(al).reverse()
await Algolet.eval(al2)

`