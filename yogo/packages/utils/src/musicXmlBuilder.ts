import xmlBuilder from 'xmlbuilder'

type ConstructorOptions = {
  timeWise?: boolean
}
const defaultOptions: ConstructorOptions = {
  timeWise: false
}
type ScoreType = 'score-partwise' | 'score-timewise'

export type Score = {
  'part-list': PartList
  part: Part
}
type PartList = {
  'score-part': {
    '@id': string
    'part-name': string
  }
}
type Part = {
  '@id': string
  measure: Measure
}
type Measure = {
  attributes?: {
    divisions: number
    key: {
      fifths: number
    }
    time: {
      beats: number
      'beat-type': number
    }
    clef: {
      sign: 'F' | 'G'
      line: number
    }
  }
  note: Note[]
}
type Note = {
  pitch: {
    step: 'C' | 'D' | 'E' | 'F' | 'G' | 'B'
    octave: number
  }
  duration: number
  type?: 'whole' | 'quarter'
}

export class MusicXMLBuilder {
  private DOCTYPE = `<!DOCTYPE score-partwise PUBLIC
"-//Recordare//DTD MusicXML 3.1 Partwise//EN"
"http://www.musicxml.org/dtds/partwise.dtd" >`
  private scoreType: ScoreType

  constructor() {
    this.scoreType = 'score-partwise'
  }

  render(score: Score) {
    const xmlObject = {
      [this.scoreType]: score
    }
    return xmlBuilder.create(
      xmlObject
      , {
      sysID: this.DOCTYPE
    }).end({
      pretty: true
    })
  }
}
