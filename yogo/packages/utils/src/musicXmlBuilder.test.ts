import { MusicXMLBuilder, Score } from './musicXmlBuilder'

describe('musicXmlBuilder', () => {
  it('', () => {
    const score: Score = {
      'part-list': {
        'score-part': {
          '@id': 'P1',
          'part-name': 'my-part'
        }
      },
      part: {
        '@id': 'P1',
        measure: {
          note: [{
            pitch: {
              step: 'C',
              octave: 4
            },
            duration: 1,
            type: 'whole'
          }]
        }
      }
    }
    const musicXmlBuilder = new MusicXMLBuilder()
    expect(musicXmlBuilder.render(score)).toBeDefined()
  })
})
