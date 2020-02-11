
import { Service } from 'typedi'
import { Args } from 'type-graphql'
import { CreateNoteInput } from './input'

@Service()
export class NoteService implements INote.Service {
  create(@Args() params: CreateNoteInput): INote.Entity {
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