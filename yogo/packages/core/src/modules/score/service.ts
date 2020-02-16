import { Service, Inject } from 'typedi'

@Service()
export class ScoreService implements Dawlet.IScore.Service {
  @Inject('SCORE')
  private readonly score: Dawlet.IScore.Entity
    
  get() {
    return this.score
  }

  append(note: Dawlet.INote.Entity) {
    this.score.notes.push(note)
    return this.score
  }
}