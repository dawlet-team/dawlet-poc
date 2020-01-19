import { Resolver, Query} from 'type-graphql'
import { Score } from './entity'
import { Service } from 'typedi'
import { ScoreService } from './service'

@Service()
@Resolver(of => Score)
export class ScoreResolver {
  constructor(private readonly scoreService: ScoreService){}
  @Query(returns => Score)
  async getScore(): Promise<IScore.Entity> {
    return this.scoreService.get()
  }
}
