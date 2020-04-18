import { Service } from 'typedi'

@Service()
export class NoteRepository {
  private store: Dawlet.INote.Store = {}
  findAll(): Dawlet.INote.Store {
    return this.store
  }
  findOne(id: string): Dawlet.INote.Entity {
    return this.store[id]
  }
  save(note: Dawlet.INote.Entity) {
    this.store[note.id] = note
    return note
  }
  remove(id: string) {
    delete this.store[id]
    return this.store
  }
}