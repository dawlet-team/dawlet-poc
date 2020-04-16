import { InputType, Field } from "type-graphql";
import { NoteInput } from '../note/entity'

@InputType()
export class PushNoteInput implements Dawlet.IGroup.PushNoteInput {
  @Field(of => [NoteInput])
  notes: Dawlet.IGroup.PushNoteInput['notes']
}