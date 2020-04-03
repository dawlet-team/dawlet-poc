import { Service, Inject } from 'typedi'

@Service()
export class GroupService implements Dawlet.IGroup.Service {
  @Inject('GROUP')
  private readonly groupMap: Dawlet.IGroup.Map

  create(id: string) {
    if(this.groupMap[id]) throw new Error(`Group id: ${id} already exists`)
    const group = {
      id,
      notes: []
    } as Dawlet.IGroup.Entity
    this.groupMap[id] = group

    return group
  }

  findBy(id: string) {
    return this.groupMap[id]
  }

  push(id: string, { notes } : Dawlet.IGroup.PushNoteInput) {
    const map = this.groupMap[id]
    map.notes.push(...notes)
    return this.groupMap[id]
  }

}