// @flow
declare type int = number;
declare type uint = number;
declare type float = number;
declare type ufloat = number;
/** 0 to 127 */
declare type uint7 = number;
/** 0 to 255 */
declare type uint8 = number;
/** 0 to 16383 */
declare type uint14 = number;
/** 0 to 1 */
declare type NormalizedFloat = number;
declare type Id = uint;
declare type Tick = uint;
declare type Sec = ufloat;
/** 128 to 255 */
declare type MidiStatusByte = uint8;
declare type MidiDataByte = uint7;
declare type MidiNoteNumber = uint7;
declare type Freq = ufloat;
/** In midi note number. Negative/float value is acceptable. */
declare type PitchBend = float;
declare type AttributeValue = number | string | boolean;
declare type ClassInstance = Object;
declare type ClassConstructor = Class<Object>;
declare type ClassName = string;
