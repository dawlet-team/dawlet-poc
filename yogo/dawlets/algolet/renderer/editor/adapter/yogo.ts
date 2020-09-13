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
  offsets: Offset[]
  constructor() {
    this.pitches = []
    this.lens = []
    this.offsets = []
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

  reverse() {
    this.pitches.reverse()
    this.lens.reverse()
    this.offsets.reverse()
    return this
  }

  span(unit: number) {
    this.pitches.forEach(() => {
      this.addLens(unit)
    })
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
    const notes = algo.lens.map((duration, i) => ({
      freq: algo.pitches[i],
      duration,
      offset: algo.offsets[i]
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