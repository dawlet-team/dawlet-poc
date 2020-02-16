import { Resolver, Query, Subscription} from 'type-graphql'
import { Score } from './entity'
import { Service } from 'typedi'
import { ScoreService } from './service'

@Service()
@Resolver(of => Score)
export class ScoreResolver {
  constructor(private readonly scoreService: ScoreService){}
  @Query(returns => Score)
  async getScore(): Promise<Dawlet.IScore.Entity> {
    return this.scoreService.get()
  }

  @Subscription(returns => Score,
    {
    topics: 'SCORE_UPDATED',
  })
  updateScore() {
    console.log('updating score')
    return this.scoreService.get()
  }
}
