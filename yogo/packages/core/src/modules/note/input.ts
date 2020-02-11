import { InputType, Field, Float } from "type-graphql";

@InputType()
export class CreateNoteInput implements INote.createNoteInputs {
  @Field(of => Float)
  freq: number
  @Field(of => Float)
  duration: number
  @Field(of => Float)
  offset: number
}