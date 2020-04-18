import path from 'path'
import { buildSchema } from 'type-graphql'
import { Container } from 'typedi'
import { NoteResolver } from './note/resolver'
import { GroupResolver } from './group/resolver'

export function assembleSchema() {
  return buildSchema(
    {
      resolvers: [NoteResolver, GroupResolver],
      emitSchemaFile: path.resolve(process.cwd(), "schema.gql"),
      container: Container
    }
  )
}