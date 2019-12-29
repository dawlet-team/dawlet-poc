// @flow
import { Note } from '../renderer/score/models/Note';
import { random } from 'faker';
import { Constant } from '../renderer/core/Attribute';
import * as INTERPOLATION_TYPES from '../../constants/interpolation-types';
import { oneOf } from '.';

export const noteFactory = (): INote =>
  new Note({
    noteNumber: new Constant(random.number()),
    offsetTime: new Constant(random.number()),
    selected: new Constant(false),
    interpolation: new Constant(
      oneOf<$Values<typeof InterpolationTypes>>(
        Object.values(INTERPOLATION_TYPES)
      )
    )
  });
