import * as Primitive from '../../../xml-primitives';

// Source files:
// https://www.musicxml.org/xsd/xlink.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export type ActuateType = ("onRequest" | "onLoad" | "other" | "none");
interface _ActuateType extends Primitive._string { content: ActuateType; }

export type ShowType = ("new" | "replace" | "embed" | "other" | "none");
interface _ShowType extends Primitive._string { content: ShowType; }

export type TypeType = "simple";
interface _TypeType extends Primitive._string { content: TypeType; }

export interface document extends BaseType {
}
export var document: document;
