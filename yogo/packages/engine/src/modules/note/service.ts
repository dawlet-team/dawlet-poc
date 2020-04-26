
import { Service } from 'typedi'
import { CreateNoteInput } from './input'
import { NoteRepository } from './repository'
import { v4 as uuid } from 'uuid'

@Service()
export class NoteService implements Dawlet.INote.Service {

  constructor(private noteRepository: NoteRepository) {}

  create(params: Omit<CreateNoteInput, 'groupIds'>): Dawlet.INote.Entity {
    const id = uuid()
    const note = {
      id,
      ...params
    }
    this.noteRepository.save(note)
    return note
  }
}