import { Service, Inject } from 'typedi'
import { IScoreService, IScore } from './interface'

@Service()
export class ScoreService implements IScoreService {
  @Inject('SCORE')
  private readonly score: IScore
    
  get() {
    return this.score
  }
}