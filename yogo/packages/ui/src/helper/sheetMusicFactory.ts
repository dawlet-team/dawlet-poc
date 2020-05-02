import { Score } from '@dawlet/utils'
import { Factory } from 'rosie'
import { random } from 'faker'

export const ScoreFactory = Factory.define<Score>('Score')
  .attrs({
    'part-list': {
      'score-part': {
        '@id': 'P1',
        'part-name': 'Music'
      }
    },
    part: () => {
      const notes: any = Array(random.number({ min: 20, max: 60 })).fill(null).map(() => ({
              pitch: {
                alter: random.arrayElement([0, 0.5, 1, 2, -0,5, -1, -2]),
                step: random.arrayElement(['C', 'D', 'E', 'F', 'G', 'B']), // FIXME: missing A
                octave: random.number({ min: 3, max: 6 })
              },
              duration: 1,
              type: random.arrayElement(['quarter', 'whole', 'eighth'])

      }))
      return {
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
          note: notes
        }

      }
    }
  })