import "reflect-metadata";
import { ApolloServer } from 'apollo-server'
import { assembleSchema } from './modules/schema'
import { mockContainer } from './helpers/useMocks'

async function bootstrap() {
  if (process.env.NODE_ENV === 'development') {
    mockContainer()
  }
  const schema = await assembleSchema() 
  const server = new ApolloServer({
    schema,
    playground: true
  });

  // Start the server
  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap()