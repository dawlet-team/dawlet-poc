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
  '@number': number
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

  convertDawletGroupToXmlScore(group: Dawlet.IGroup.Entity): Score {
    const { notes } = group
    const getBaseLog = (x, y) => {
      return Math.log(y) / Math.log(x);
    };
    const xmlNotes: Note[] = notes.map(note => {
      const midiNoteNumber = Math.round(12 * getBaseLog(2, note.freq / 440) + 69);
      // TODO: convert
      return {
        pitch: {
          step: 'C',
          octave: 4
        },
        duration: 4,
        type: 'quarter'
      } as Note
    })
    const score: Score = {
      'part-list': {
        'score-part': {
          '@id': 'P1',
          'part-name': 'Music'
        }
      },
      part: {
        '@id': 'P1',
        measure: {
          '@number': 1,
          attributes: {
            divisions: 1,
            key: {
              fifths: 0
            },
            time: {
              beats: 4,
              'beat-type': 4
            },
            clef: {
              sign: 'G',
              line: 2
            }
          },
          note: xmlNotes
        }
      }
    }
    return score
  }

  render(score: Score) {
    const xmlObject = {
      [this.scoreType]: {
        '@version': '3.1',
        ...score
      }
    }
    return xmlBuilder.create(xmlObject)
      .dec('1.0', 'UTF-8', false)
      .dtd(this.pubId, this.sysId)
      .end({
        pretty: true
      })
  }
}
