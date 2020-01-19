declare namespace IScore {
  export interface Entity {
    id: string
  }

  export interface Service {
    get(): Entity
  }
} 