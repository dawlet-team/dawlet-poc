import { ObjectType, Field, ID, Float, InputType } from 'type-graphql'

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
@InputType()
export class NoteInput implements Omit<Dawlet.INote.Entity, 'id'> {
  @Field(of => Float)
  freq: number

  @Field(of => Float)
  duration: number

  @Field(of => Float)
  offset: number
}

