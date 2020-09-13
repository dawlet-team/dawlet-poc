import { initDawletSdk } from '@dawlet/graphql'
import { ListAllGroupsQuery } from '@dawlet/graphql/lib/sdk'

type Sdk = ReturnType<typeof initDawletSdk>
type Pitch = number | {
  from: number
  to: number
}
type Length = number

const GROUP_ID = 'algolet-beta-group'
class Builder {
  sdk: Sdk
  pitches: Pitch[]
  lens: Length[]
  constructor(sdk: Sdk) {
    this.sdk = sdk
    this.pitches = []
    this.lens = []
    this.init()
  }

  init() {
    this.sdk.CreateGroup({ id: GROUP_ID })
  }

  addPitch(pitch: Pitch) {
    if (typeof pitch === 'number') {
      this.pitches.push(pitch)
    } else {
      const { from, to } = pitch
      for (let i = from; i <= to; i++) {
        this.pitches.push(i)
      }
    }
    return this
  }
  addLens(lens: Length) {
    this.lens.push(lens)
    return this
  }
  span(unit: number) {
    this.lens = this.pitches.map(() => unit)
  }

  async clear() {
    await this.sdk.ResetAllGroups();
    await this.init()
  }

  eval() {
    // TODO: convert freq to pitch
    const notes = this.lens.map((duration, i) => ({
      freq: this.pitches[i],
      duration,
      offset: 0
    }))
    return this.sdk.PushNote({
      pushNoteInput: {
        groupId: GROUP_ID,
        notes
      }
    })
  }

  async show() {
    const { listAllGroups } = await this.sdk.ListAllGroups()
    return listAllGroups
  }
}

export function evalAsyncFunc(code: string): () => Promise<ListAllGroupsQuery['listAllGroups']> {
  const sdk = initDawletSdk()
  const builder = new Builder(sdk)
  const action = `
(async function() {
  await builder.init()
  ${code}
  return builder.show()
})
`
  return eval(action)
}