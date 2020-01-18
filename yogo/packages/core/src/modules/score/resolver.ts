import { Resolver, Query} from 'type-graphql'
import { Score } from './entity'

@Resolver(Score)
export class ScoreResolver {
  @Query(returns => Score, { nullable: true})
  async getScore() {
    return {
      tmp: ''
    } 
  }
}
