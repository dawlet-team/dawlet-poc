// @flow
import { Entity } from '../core/Entity';

export class Score implements IScore {
  notes: Entity<INote>;
  noteOns: Entity<INoteOn>;
  noteOffs: Entity<INoteOff>;
  modulations: Entity<IModulation>;

  constructor() {
    this.notes = new Entity();
    this.noteOns = new Entity();
    this.noteOffs = new Entity();
    this.modulations = new Entity();
  }
}
