
import { Service } from 'typedi'
import { CreateNoteInput } from './input'
import { NoteRepository } from './repository'

@Service()
export class NoteService implements Dawlet.INote.Service {

  constructor(private noteRepository: NoteRepository) {}

  create(params: Omit<CreateNoteInput, 'groupIds'>): Dawlet.INote.Entity {
    const id = Math.random().toString() // TODO: use uuid
    const note = {
      id,
      ...params
    }
    this.noteRepository.save(note)
    return note
  }
}