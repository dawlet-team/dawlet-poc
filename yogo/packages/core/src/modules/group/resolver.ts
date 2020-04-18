import { Resolver, Query, Subscription, Arg, Mutation} from 'type-graphql'
import { Group } from './graph'
import { Service } from 'typedi'
import { GroupService } from './service'
import { PushNoteInput } from './input'

@Service()
@Resolver(of => Group)
export class GroupResolver {
  constructor(private readonly groupService: GroupService){}

  @Mutation(returns => Group)
  createGroup(
    @Arg('id') id: string
  ): Dawlet.IGroup.Entity {
    return this.groupService.create(id)
  }

  @Query(returns => Group)
  findGroupBy(
    @Arg('id') id: string
  ) {
    return this.groupService.findBy(id)
  }

  @Mutation(returns => Group)
  pushNote(
    @Arg('pushNoteInput') pushNoteInput : PushNoteInput
  ) {
    return this.groupService.push(pushNoteInput)
  }

}
