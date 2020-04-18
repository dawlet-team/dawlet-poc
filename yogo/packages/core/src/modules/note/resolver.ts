
import { Service } from 'typedi'
import { Mutation, Arg, Resolver } from 'type-graphql'
import { Note } from './graph'
import { CreateNoteInput } from './input'
import { NoteService } from './service'
import { GroupService } from '../group/service'

@Service()
@Resolver(of => Note)
export class NoteResolver {
  constructor(
    private readonly noteService: NoteService,
    private readonly groupService: GroupService
  ){}

  @Mutation(returns => Note)
  createNote(@Arg('params') params: CreateNoteInput): Dawlet.INote.Entity {
    const note = this.noteService.create(params)
    const { groupIds } = params
    if (groupIds) {
      groupIds.forEach(groupId => {
        this.groupService.push({
          groupId,
          notes: [note]
        })
      })
    }
    return note
  }
}