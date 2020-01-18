import path from 'path'
import { buildSchema } from 'type-graphql'
import { Container } from 'typedi'
import { ScoreResolver } from './score/resolver'

Container.set({id: "SCORE", value: { id : "hogehogeo"}})

export function assembleSchema() {
  return buildSchema(
    {
      resolvers: [ScoreResolver],
      emitSchemaFile: path.resolve(process.cwd(), "schema.gql"),
      container: Container
    }
  )
}