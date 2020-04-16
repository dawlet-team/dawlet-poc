import { Service } from 'typedi'

export type NoteStore = {
  [key: string]: Dawlet.INote.Entity
}

@Service()
export class NoteRepository {
  private data: NoteStore = {}
  save(note: Dawlet.INote.Entity) {
    this.data[note.id] = note
    return note
  }
  remove(id: string) {
    delete this.data[id]
    return this.data
  }
  get() {
    return this.data
  }
}