import { Container } from 'typedi'

const initialScore: IScore.Entity = {
  notes: []
}

export const mockContainer = () => {
  Container.set({id: "SCORE", value: initialScore})
}