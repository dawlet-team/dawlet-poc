var cxml = require("cxml");
var Primitive = require('../../../xml-primitives');

cxml.register('http://www.w3.org/1999/xlink', exports, [
	[Primitive, ['string'], []]
], [
	'ActuateType',
	'ShowType',
	'TypeType'
], [
	[0, 0, [], [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []]
], [
	['actuate', [2], 0],
	['href', [1], 0],
	['role', [1], 0],
	['show', [3], 0],
	['title', [1], 0],
	['type', [4], 0]
]);