import { Container } from 'typedi'
import { NoteRepository } from './repository'
import { NoteFactory } from '@dawlet/factory'

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
  it('findAll', () => {
    const note = NoteFactory.build()
    repo.save(note)
    const state = repo.findAll()
    expect(state[note.id]).toEqual(note)
  })
  it('findOne', () => {
    const note = NoteFactory.build()
    const secondNote = NoteFactory.build()
    repo.save(note)
    repo.save(secondNote)
    const foundNote = repo.findOne(note.id)
    expect(foundNote).toEqual(note)
  })
  it('removes', () => {
    const note = NoteFactory.build()
    repo.save(note)
    repo.remove(note.id)
    const state = repo.findAll()
    expect(state).toEqual({})
  })
})
