import { MusicXMLBuilder, Score } from './musicXmlBuilder'
//@ts-ignore
import expectedFile from './test.xml'

describe('musicXmlBuilder', () => {
  it('', () => {
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
          note: [{
            pitch: {
              step: 'C',
              octave: 4
            },
            duration: 4,
            type: 'whole'
          }]
        }
      }
    }
    const musicXmlBuilder = new MusicXMLBuilder()
    expect(musicXmlBuilder.render(score)).toEqual(expectedFile)
  })
})
