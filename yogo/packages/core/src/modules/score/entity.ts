import { ObjectType, Field } from 'type-graphql'
import { Note } from '../note/entity'

@ObjectType()
export class Score implements Dawlet.IScore.Entity {
  @Field()
  id: string
  @Field(type => Note)
  notes: Dawlet.INote.Entity[]
}