import { GraphQLClient } from 'graphql-request'
import { getSdk } from './sdk'

export function initDawletSdk() {
  const client = new GraphQLClient('http://localhost:4000')
  const sdk = getSdk(client)
  return sdk
}
