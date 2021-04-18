import path from 'path'
import { buildSchema } from 'type-graphql'
import { Container } from 'typedi'
import { NoteResolver } from './note/resolver'
import { GroupResolver } from './group/resolver'

export function assembleSchema(isProd: boolean) {
  const schemaPath = path.resolve(process.cwd(), "schema.gql")
  return buildSchema(
    {
      resolvers: [NoteResolver, GroupResolver],
      emitSchemaFile: isProd ? false : schemaPath,
      container: Container
    }
  )
}