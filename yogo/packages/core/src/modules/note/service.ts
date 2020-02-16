
import { Service } from 'typedi'
import { Args } from 'type-graphql'
import { CreateNoteInput } from './input'

@Service()
export class NoteService implements Dawlet.INote.Service {
  create(@Args() params: CreateNoteInput): Dawlet.INote.Entity {
    /**
     * TODO: use uuid
     */
    const id = Math.random().toString()
    return {
      id,
      ...params
    }
  }
}