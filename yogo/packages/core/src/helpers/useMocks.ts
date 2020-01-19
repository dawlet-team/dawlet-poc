import { Container } from 'typedi'

export const mockContainer = () => {
  Container.set({id: "SCORE", value: { id : "hogehoge"}})
}