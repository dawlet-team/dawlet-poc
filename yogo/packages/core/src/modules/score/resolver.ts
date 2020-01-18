import { Resolver, Query} from 'type-graphql'
import { Score } from './entity'
import { Service } from 'typedi'
import { IScore } from './interface'
import { ScoreService } from './service'

@Service()
@Resolver(of => Score)
export class ScoreResolver {
  constructor(private readonly scoreService: ScoreService){}
  @Query(returns => Score)
  async getScore(): Promise<IScore> {
    return this.scoreService.get()
  }
}
