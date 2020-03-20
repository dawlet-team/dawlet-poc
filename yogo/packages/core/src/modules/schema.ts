import path from 'path'
import { buildSchema } from 'type-graphql'
import { Container } from 'typedi'
import { ScoreResolver } from './score/resolver'
import { NoteResolver } from './note/resolver'
import { GroupResolver } from './group/resolver'

export function assembleSchema() {
  return buildSchema(
    {
      resolvers: [ScoreResolver, NoteResolver, GroupResolver],
      emitSchemaFile: path.resolve(process.cwd(), "schema.gql"),
      container: Container
    }
  )
}