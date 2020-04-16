
import { Service } from 'typedi'
import { Mutation, Arg, Resolver } from 'type-graphql'
import { Note } from './graph'
import { CreateNoteInput } from './input'
import { NoteService } from './service'

@Service()
@Resolver(of => Note)
export class NoteResolver {
  constructor(
    private readonly noteService: NoteService
  ){}

  @Mutation(returns => Note)
  createNote(@Arg('params') params: CreateNoteInput): Dawlet.INote.Entity {
    const note = this.noteService.create(params)
    return note
  }
}