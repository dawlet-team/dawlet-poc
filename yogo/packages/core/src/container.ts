import { Container } from 'typedi'

const initialScore: Dawlet.IScore.Entity = {
  notes: []
}

const groupMap:Dawlet.IGroup.Map = {}

export const prepareContainer = () => {
  Container.set({id: "SCORE", value: initialScore})
  Container.set({id: "GROUP", value: groupMap})
}