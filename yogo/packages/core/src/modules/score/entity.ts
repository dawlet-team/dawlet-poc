import { ObjectType, Field } from 'type-graphql'
import { IScore } from './interface'

@ObjectType()
export class Score implements IScore {
  @Field()
  id: string
}