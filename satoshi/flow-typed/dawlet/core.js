// @flow
import * as InterpolationTypes from '../../constants/interpolation-types';
import { Entity } from '../../src/renderer/core/Entity';
import { Container } from '../../src/renderer/core/Container';

declare interface Attribute<T: AttributeValue> {
  +value: T;
}

declare interface IScore {
  notes: Entity<INote>;
  noteOns: Entity<INoteOn>;
  noteOffs: Entity<INoteOff>;
  modulations: Entity<IModulation>;
}

declare type AnchorPoint = INoteOn | INoteOff | IModulation;

declare type NoteOptions = {
  noteOn?: INoteOn,
  noteOff?: INoteOff,
  modulations?: Array<IModulation>,
  noteNumber?: Attribute<MidiNoteNumber>,
  offsetTime?: Attribute<Tick>,
  selected?: Attribute<boolean>,
  interpolation?: Attribute<$Values<typeof InterpolationTypes>>
};

declare type GetFromContainer = <T>(SomeClass: Class<T>) => T;

declare interface IContainerManager {
  initContainer(): void;
  setContainer(container: Container): void;
  getContainer(): Container;
  composeGetFromContainer(): GetFromContainer;
}
