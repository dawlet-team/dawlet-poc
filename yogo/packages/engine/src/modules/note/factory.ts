import { random } from 'faker'
import { Factory } from 'rosie'

export const NoteFactory = Factory.define<Dawlet.INote.Entity>('note')
  .sequence('id')
  .attr('freq', () => random.number({ min: 0, max: 44100 }))
  .attr('duration', () => random.number())
  .attr('offset', () => random.number())
