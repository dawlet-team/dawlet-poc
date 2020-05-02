import xmlBuilder from 'xmlbuilder'

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
  private pubId = `-//Recordare//DTD MusicXML 3.1 Partwise//EN`
  private sysId = `http://www.musicxml.org/dtds/partwise.dtd`
  private scoreType: ScoreType

  constructor() {
    this.scoreType = 'score-partwise'
  }

  render(score: Score) {
    const xmlObject = {
      [this.scoreType]: score
    }
    return xmlBuilder.create(xmlObject)
      .dec('1.0', 'UTF-8', false)
      .dtd(this.pubId, this.sysId)
      .end({
      pretty: true
    })
  }
}
