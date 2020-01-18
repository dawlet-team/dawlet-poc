import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export class Score {
  @Field(type => ID)
  id: string
}