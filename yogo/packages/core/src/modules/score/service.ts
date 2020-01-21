import { Service, Inject } from 'typedi'

@Service()
export class ScoreService implements IScore.Service {
  @Inject('SCORE')
  private readonly score: IScore.Entity
    
  get() {
    return this.score
  }
}