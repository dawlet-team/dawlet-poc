import { Container } from 'typedi'
import { NoteService } from './service'
import { NoteRepository } from './repository'

describe('NoteService', () => {
  const service = Container.get(NoteService)
  const repo = Container.get(NoteRepository)

  it('is defined', () => {
    expect(service).toBeInstanceOf(NoteService)
  })
  it('creates', () => {
    const noteInput = {
      freq: 440,
      duration: 34,
      offset: 4
    }
    const { id } = service.create(noteInput)
    const state = repo.findAll()
    expect(state[id]).toEqual({
      id,
      ...noteInput
    })
  })
})
