import { ObjectType, Field, ID, Float, InputType } from 'type-graphql'

@ObjectType()
@InputType('NoteInput')
export class Note implements Dawlet.INote.Entity {
  @Field(of => ID)
  id: string
  
  @Field(of => Float)
  freq: number

  @Field(of => Float)
  duration: number

  @Field(of => Float)
  offset: number
}