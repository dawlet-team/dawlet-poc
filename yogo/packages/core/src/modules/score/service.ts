import { Service, Inject } from 'typedi'

@Service()
export class ScoreService implements IScore.Service {
  @Inject('SCORE')
  private readonly score: IScore.Entity
    
  get() {
    return this.score
  }

  append(note: INote.Entity) {
    this.score.notes.push(note)
    return this.score
  }
}