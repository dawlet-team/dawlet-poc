import "reflect-metadata";
import { ApolloServer } from 'apollo-server'
import { assembleSchema } from './modules/schema'
import { DawletEngineOptions, extractOptions } from './utils/options'

export async function bootstrap(userGivenOptions?: DawletEngineOptions) {
  const { isProd, port } = extractOptions(userGivenOptions)
  const schema = await assembleSchema(isProd)
  const server = new ApolloServer({
    schema,
    playground: true
  });

  // Start the server
  const { url } = await server.listen(port);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
  return {
    server,
    url
  }
}