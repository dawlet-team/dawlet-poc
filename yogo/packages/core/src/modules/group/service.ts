import { Service } from 'typedi'
import { GroupRepository } from './repository'
import { NoteService } from '../note/service'

@Service()
export class GroupService implements Dawlet.IGroup.Service {

  constructor(
    private groupRepository: GroupRepository,
    private noteService: NoteService
  ) { }

  create(id: string){
    const record = this.groupRepository.save(id, [])
    return this.groupRepository.getEntity(record.id)
  }

  findBy(id: string){
    const record = this.groupRepository.findOne(id)
    return this.groupRepository.getEntity(record.id)
  }

  findAll() {
    const store = this.groupRepository.findAll()
    const entities = Object.values(store).map(record => {
      return this.groupRepository.getEntity(record.id)
    })
    return entities
  }

  push({ groupId, notes } : Dawlet.IGroup.PushNoteInput) {
    const noteIds = notes.map(note => this.noteService.create(note).id)
    const record = this.groupRepository.pushNotes(groupId, noteIds)
    return this.groupRepository.getEntity(record.id)
  }

  resetAllGroups() {
    return this.groupRepository.resetAll()
  }

}