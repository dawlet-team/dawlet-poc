import { Service } from 'typedi'
import { NoteRepository } from '../note/repository'

@Service()
export class GroupRepository {
  private store: Dawlet.IGroup.Store = {}
  constructor(private noteRepository: NoteRepository) {}

  findAll() {
    return this.store
  }

  findOne(id: string) {
    return this.store[id]
  }

  getEntity(id: string): Dawlet.IGroup.Entity {
    const notes = this.store[id].noteIds.map(noteId => this.noteRepository.findOne(noteId))
    const groupEntity: Dawlet.IGroup.Entity = {
      id,
      notes
    }
    return groupEntity
  }

  save(id: string, noteIds: string[]): Dawlet.IGroup.Record {
    const record = {
      id,
      noteIds
    }
    this.store[id] = record
    return record
  }

  pushNotes(id: string, noteIds: string[]): Dawlet.IGroup.Record {
    const record = this.store[id]
    record.noteIds.push(...noteIds)
    return record
  }

  removeGroup(id: string) {
    delete this.store[id]
    return this.store
  }
}