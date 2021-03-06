import { ObjectType, Field, ID } from 'type-graphql'
import { Note } from '../note/graph'

@ObjectType()
export class Group implements Dawlet.IGroup.Entity {
  @Field(of => ID)
  id: string
  
  @Field(of => [Note])
  notes: Dawlet.INote.Entity[]
}
