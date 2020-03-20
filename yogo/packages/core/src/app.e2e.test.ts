import { bootstrap } from './bootstrap'
import { ApolloServer } from 'apollo-server'

describe('e2e', () => {
  let server: ApolloServer
  let url: string
  beforeAll(async () => {
    console.log('bootstrapping a server');
    ({ server, url } = await bootstrap())
  })
  afterAll(async () => {
    console.log('shutting down the server')
    await server.stop()
  })
  it('server is defined', () => {
    expect(server).toBeDefined()
    expect(url).toBe("http://localhost:4000/")
  })
   
})
