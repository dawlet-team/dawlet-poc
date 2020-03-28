import "reflect-metadata";
import { ApolloServer } from 'apollo-server'
import { assembleSchema } from './modules/schema'
import { prepareContainer } from './container'

export async function bootstrap() {
  prepareContainer()
  const schema = await assembleSchema() 
  const server = new ApolloServer({
    schema,
    playground: true
  });

  // Start the server
  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
  return {
    server,
    url
  }
}