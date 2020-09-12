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
    octave: number,
    alter?: number
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
      // TODO: test
      const convertMidiToPitch = (midiNoteNumber: number): Note['pitch'] => {
        let step = 'C'
        let alter = 0
        const mod = midiNoteNumber % 12
        switch (mod) {
          // C
          case 0:
            step = 'C'
            break;
          // C#
          case 1:
            step = 'C';
            alter = 1;
            break;
          // D
          case 2:
            step = 'D'
            break;
          // Eb
          case 3:
            step = 'E'
            alter = -1;
            break;
          // E
          case 4:
            step = 'E'
            break;
          // F
          case 5:
            step = 'F'
            break;
          // F#
          case 6:
            step = 'F'
            alter = 1
            break;
          // G
          case 7:
            step = 'G'
            break;
          // Ab
          case 8:
            step = 'A'
            alter = -1
            break;
          // A
          case 9:
            step = 'A'
            break;
          // Bb
          case 10:
            step = 'B'
            alter = -1
            break;
          // B
          case 11:
            step = 'B'
            break;
        }
        const octave = ((midiNoteNumber - mod) / 12) - 1
        return {
          step,
          octave,
          alter
        } as any
      }
      return {
        pitch: convertMidiToPitch(midiNoteNumber),
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
