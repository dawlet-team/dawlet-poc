
import { Service } from 'typedi'
import { Mutation, Arg, Resolver } from 'type-graphql'
import { Note } from './entity'
import { CreateNoteInput } from './input'
import { ScoreService } from '../score/service'
import { NoteService } from './service'
import { Score } from '../score/entity'

@Service()
@Resolver(of => Note)
export class NoteResolver {
  constructor(
    private readonly scoreService: ScoreService,
    private readonly noteService: NoteService
  ){}
    
  @Mutation(returns => Score)
  createNote(@Arg('params') params: CreateNoteInput): IScore.Entity {
    const note = this.noteService.create(params)
    this.scoreService.append(note)
    return this.scoreService.get()
  }
}