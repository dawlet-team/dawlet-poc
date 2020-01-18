export interface IScore {
  id: string
}

export interface IScoreService {
  get(): IScore
}