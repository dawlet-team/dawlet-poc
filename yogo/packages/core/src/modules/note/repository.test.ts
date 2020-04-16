import { Container } from 'typedi'
import { NoteRepository } from './repository'
import { NoteFactory } from './factory'

describe('NoteRepository', () => {
  let repo: NoteRepository
  beforeEach(() => {
    repo = Container.get(NoteRepository)
  })
  afterEach(() => {
    Container.reset()
  })
  it('is defined', () => {
    expect(repo).toBeInstanceOf(NoteRepository)
  })
  it('saves', () => {
    const note = NoteFactory.build()
    repo.save(note)
  })
  it('gets', () => {
    const note = NoteFactory.build()
    repo.save(note)
    const state = repo.get()
    expect(state[note.id]).toEqual(note)
  })
  it('removes', () => {
    const note = NoteFactory.build()
    repo.save(note)
    repo.remove(note.id)
    const state = repo.get()
    expect(state).toEqual({})
  })
})
