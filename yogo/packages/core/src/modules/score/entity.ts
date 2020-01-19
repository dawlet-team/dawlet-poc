import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Score implements IScore.Entity {
  @Field()
  id: string
}