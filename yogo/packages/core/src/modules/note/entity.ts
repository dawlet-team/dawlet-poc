import { ObjectType, Field, ID, Float } from 'type-graphql'

@ObjectType()
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