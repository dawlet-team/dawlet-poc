import { InputType, Field } from "type-graphql";
import { NoteInput } from '../note/graph'

@InputType()
export class PushNoteInput implements Dawlet.IGroup.PushNoteInput {
  @Field(of => [NoteInput])
  notes: Dawlet.IGroup.PushNoteInput['notes']
}