import { Container } from 'typedi'

const initialScore: Dawlet.IScore.Entity = {
  notes: []
}

export const mockContainer = () => {
  Container.set({id: "SCORE", value: initialScore})
}