import { InputType, Field } from "type-graphql";
import { Note } from '../note/entity'

@InputType()
export class PushNoteInput implements Dawlet.IGroup.PushNoteInput {
  @Field(of => [Note])
  notes: Dawlet.IGroup.PushNoteInput['notes']
}