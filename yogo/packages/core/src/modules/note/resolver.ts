
import { Service } from 'typedi'
import { Mutation, Arg, Resolver, PubSub, Publisher } from 'type-graphql'
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

  // maybe this shouldn't return the new score
  @Mutation(returns => Score)
  createNote(@Arg('params') params: CreateNoteInput, @PubSub("SCORE_UPDATED") publish: Publisher<IScore.Entity>): IScore.Entity {
    const note = this.noteService.create(params)
    this.scoreService.append(note)
    const score = this.scoreService.get()
    publish(score)
    return score
  }
}