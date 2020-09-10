import * as Primitive from './xml-primitives';
import * as xlink from './http:/www.w3.org/1999/xlink';
import * as xml from './http:/www.w3.org/XML/1998/namespace';

// Source files:
// file://schema/musicxml.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
/** The above-below type is used to indicate whether one element appears above or below another element. */
export type aboveBelow = ("above" | "below");
interface _aboveBelow extends Primitive._string { content: aboveBelow; }

/** The accidental type represents actual notated accidentals. Editorial and cautionary indications are indicated by attributes. Values for these attributes are "no" if not present. Specific graphic display such as parentheses, brackets, and size are controlled by the level-display attribute group. */
interface _accidental extends _accidentalValue {
	bracket: yesNo;
	cautionary: yesNo;
	color: string;
	defaultX: number;
	defaultY: number;
	editorial: yesNo;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	parentheses: yesNo;
	relativeX: number;
	relativeY: number;
	size: symbolSize;
	smufl: string;
}
export interface accidental extends _accidental { constructor: { new(): accidental }; }
export var accidental: { new(): accidental };

/** An accidental-mark can be used as a separate notation or as part of an ornament. When used in an ornament, position and placement are relative to the ornament, not relative to the note. */
interface _accidentalMark extends _accidentalValue {
	bracket: yesNo;
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	id: string;
	parentheses: yesNo;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	size: symbolSize;
	smufl: string;
}
export interface accidentalMark extends _accidentalMark { constructor: { new(): accidentalMark }; }
export var accidentalMark: { new(): accidentalMark };

/** The accidental-text type represents an element with an accidental value and text-formatting attributes. */
interface _accidentalText extends _accidentalValue {
	color: string;
	defaultX: number;
	defaultY: number;
	dir: textDirection;
	enclosure: enclosureShape;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	justify: leftCenterright;
	/** Attempting to install the relevant ISO 2- and 3-letter
	  * codes as the enumerated possible values is probably never
	  * going to be a realistic possibility.  See
	  * RFC 3066 at http://www.ietf.org/rfc/rfc3066.txt and the IANA registry
	  * at http://www.iana.org/assignments/lang-tag-apps.htm for
	  * further information.
	  *
	  * The union allows for the 'un-declaration' of xml:lang with
	  * the empty string. */
	lang: string;
	letterSpacing: numberOrnormal;
	lineHeight: numberOrnormal;
	lineThrough: number;
	overline: number;
	relativeX: number;
	relativeY: number;
	rotation: number;
	smufl: string;
	space: xml.SpaceType;
	underline: number;
	valign: valign;
}
export interface accidentalText extends _accidentalText { constructor: { new(): accidentalText }; }
export var accidentalText: { new(): accidentalText };

/** The accidental-value type represents notated accidentals supported by MusicXML. In the MusicXML 2.0 DTD this was a string with values that could be included. The XSD strengthens the data typing to an enumerated list. The quarter- and three-quarters- accidentals are Tartini-style quarter-tone accidentals. The -down and -up accidentals are quarter-tone accidentals that include arrows pointing down or up. The slash- accidentals are used in Turkish classical music. The numbered sharp and flat accidentals are superscripted versions of the accidental signs, used in Turkish folk music. The sori and koron accidentals are microtonal sharp and flat accidentals used in Iranian and Persian music. The other accidental covers accidentals other than those listed here. It is usually used in combination with the smufl attribute to specify a particular SMuFL accidental. The smufl attribute may be used with any accidental value to help specify the appearance of symbols that share the same MusicXML semantics. */
export type accidentalValue = ("sharp" | "natural" | "flat" | "double-sharp" | "sharp-sharp" | "flat-flat" | "natural-sharp" | "natural-flat" | "quarter-flat" | "quarter-sharp" | "three-quarters-flat" | "three-quarters-sharp" | "sharp-down" | "sharp-up" | "natural-down" | "natural-up" | "flat-down" | "flat-up" | "double-sharp-down" | "double-sharp-up" | "flat-flat-down" | "flat-flat-up" | "arrow-down" | "arrow-up" | "triple-sharp" | "triple-flat" | "slash-quarter-sharp" | "slash-sharp" | "slash-flat" | "double-slash-flat" | "sharp-1" | "sharp-2" | "sharp-3" | "sharp-5" | "flat-1" | "flat-2" | "flat-3" | "flat-4" | "sori" | "koron" | "other");
interface _accidentalValue extends Primitive._string { content: accidentalValue; }

/** The accord type represents the tuning of a single string in the scordatura element. It uses the same group of elements as the staff-tuning element. Strings are numbered from high to low. */
interface _accord extends BaseType {
	string: number;
	/** The tuning-alter element is represented like the alter element, with a different name to reflect is different function. */
	tuningAlter?: number;
	/** The tuning-octave element is represented like the octave element, with a different name to reflect is different function. */
	tuningOctave: number;
	/** The tuning-step element is represented like the step element, with a different name to reflect is different function. */
	tuningStep: step;
}
export interface accord extends _accord { constructor: { new(): accord }; }
export var accord: { new(): accord };

/** The accordion-middle type may have values of 1, 2, or 3, corresponding to having 1 to 3 dots in the middle section of the accordion registration symbol. This type is not used if no dots are present. */
export type accordionMiddle = number;
type _accordionMiddle = Primitive._number;

/** The accordion-registration type is use for accordion registration symbols. These are circular symbols divided horizontally into high, middle, and low sections that correspond to 4', 8', and 16' pipes. Each accordion-high, accordion-middle, and accordion-low element represents the presence of one or more dots in the registration diagram. An accordion-registration element needs to have at least one of the child elements present. */
interface _accordionRegistration extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	id: string;
	relativeX: number;
	relativeY: number;
	valign: valign;
	/** The accordion-high element indicates the presence of a dot in the high (4') section of the registration symbol. This element is omitted if no dot is present. */
	accordionHigh?: empty;
	/** The accordion-low element indicates the presence of a dot in the low (16') section of the registration symbol. This element is omitted if no dot is present. */
	accordionLow?: empty;
	/** The accordion-middle element indicates the presence of 1 to 3 dots in the middle (8') section of the registration symbol. This element is omitted if no dots are present. */
	accordionMiddle?: number;
}
export interface accordionRegistration extends _accordionRegistration { constructor: { new(): accordionRegistration }; }
export var accordionRegistration: { new(): accordionRegistration };

/** The appearance type controls general graphical settings for the music's final form appearance on a printed page of display. This includes support for line widths, definitions for note sizes, and standard distances between notation elements, plus an extension element for other aspects of appearance. */
interface _appearance extends BaseType {
	distance?: distance[];
	glyph?: glyph[];
	lineWidth?: lineWidth[];
	noteSize?: noteSize[];
	otherAppearance?: otherAppearance[];
}
export interface appearance extends _appearance { constructor: { new(): appearance }; }
export var appearance: { new(): appearance };

/** The arpeggiate type indicates that this note is part of an arpeggiated chord. The number attribute can be used to distinguish between two simultaneous chords arpeggiated separately (different numbers) or together (same number). The up-down attribute is used if there is an arrow on the arpeggio sign. By default, arpeggios go from the lowest to highest note. */
interface _arpeggiate extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	direction: upDown;
	id: string;
	number: number;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
}
export interface arpeggiate extends _arpeggiate { constructor: { new(): arpeggiate }; }
export var arpeggiate: { new(): arpeggiate };

/** The arrow element represents an arrow used for a musical technical indication. It can represent both Unicode and SMuFL arrows. The presence of an arrowhead element indicates that only the arrowhead is displayed, not the arrow stem. The smufl attribute distinguishes different SMuFL glyphs that have an arrow appearance such as arrowBlackUp, guitarStrumUp, or handbellsSwingUp. The specified glyph should match the descriptive representation. */
interface _arrow extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	smufl: string;
	arrowDirection: arrowDirection;
	arrowStyle?: arrowStyle;
	arrowhead?: empty;
	circularArrow: circularArrow;
}
export interface arrow extends _arrow { constructor: { new(): arrow }; }
export var arrow: { new(): arrow };

/** The arrow-direction type represents the direction in which an arrow points, using Unicode arrow terminology. */
export type arrowDirection = ("left" | "up" | "right" | "down" | "northwest" | "northeast" | "southeast" | "southwest" | "left right" | "up down" | "northwest southeast" | "northeast southwest" | "other");
interface _arrowDirection extends Primitive._string { content: arrowDirection; }

/** The arrow-style type represents the style of an arrow, using Unicode arrow terminology. Filled and hollow arrows indicate polygonal single arrows. Paired arrows are duplicate single arrows in the same direction. Combined arrows apply to double direction arrows like left right, indicating that an arrow in one direction should be combined with an arrow in the other direction. */
export type arrowStyle = ("single" | "double" | "filled" | "hollow" | "paired" | "combined" | "other");
interface _arrowStyle extends Primitive._string { content: arrowStyle; }

/** Articulations and accents are grouped together here. */
interface _articulations extends BaseType {
	id: string;
	/** The accent element indicates a regular horizontal accent mark. */
	accent?: emptyPlacement[];
	breathMark?: breathMark[];
	caesura?: caesura[];
	/** The detached-legato element indicates the combination of a tenuto line and staccato dot symbol. */
	detachedLegato?: emptyPlacement[];
	/** The doit element is an indeterminate slide attached to a single note. The doit element appears after the main note and goes above the main pitch. */
	doit?: emptyLine[];
	/** The falloff element is an indeterminate slide attached to a single note. The falloff element appears after the main note and goes below the main pitch. */
	falloff?: emptyLine[];
	/** The other-articulation element is used to define any articulations not yet in the MusicXML format. The smufl attribute can be used to specify a particular articulation, allowing application interoperability without requiring every SMuFL articulation to have a MusicXML element equivalent. Using the other-articulation element without the smufl attribute allows for extended representation, though without application interoperability. */
	otherArticulation?: otherPlacementtext[];
	/** The plop element is an indeterminate slide attached to a single note. The plop element appears before the main note and comes from above the main pitch. */
	plop?: emptyLine[];
	/** The scoop element is an indeterminate slide attached to a single note. The scoop element appears before the main note and comes from below the main pitch. */
	scoop?: emptyLine[];
	/** The soft-accent element indicates a soft accent that is not as heavy as a normal accent. It is often notated as <>. It can be combined with other articulations to implement the entire SMuFL Articulation Supplement range. */
	softAccent?: emptyPlacement[];
	/** The spiccato element is used for a stroke articulation, as opposed to a dot or a wedge. */
	spiccato?: emptyPlacement[];
	/** The staccatissimo element is used for a wedge articulation, as opposed to a dot or a stroke. */
	staccatissimo?: emptyPlacement[];
	/** The staccato element is used for a dot articulation, as opposed to a stroke or a wedge. */
	staccato?: emptyPlacement[];
	/** The stress element indicates a stressed note. */
	stress?: emptyPlacement[];
	/** The strong-accent element indicates a vertical accent mark. */
	strongAccent?: strongAccent[];
	/** The tenuto element indicates a tenuto line symbol. */
	tenuto?: emptyPlacement[];
	/** The unstress element indicates an unstressed note. It is often notated using a u-shaped symbol. */
	unstress?: emptyPlacement[];
}
export interface articulations extends _articulations { constructor: { new(): articulations }; }
export var articulations: { new(): articulations };

/** The attributes element contains musical information that typically changes on measure boundaries. This includes key and time signatures, clefs, transpositions, and staving. When attributes are changed mid-measure, it affects the music in score order, not in MusicXML document order. */
interface _attributes extends BaseType {
	/** Clefs are represented by a combination of sign, line, and clef-octave-change elements. */
	clef?: clef[];
	/** Directives are like directions, but can be grouped together with attributes for convenience. This is typically used for tempo markings at the beginning of a piece of music. This element has been deprecated in Version 2.0 in favor of the directive attribute for direction elements. Language names come from ISO 639, with optional country subcodes from ISO 3166. */
	directive?: attributesDirectiveType[];
	/** Musical notation duration is commonly represented as fractions. The divisions element indicates how many divisions per quarter note are used to indicate a note's duration. For example, if duration = 1 and divisions = 2, this is an eighth note duration. Duration and divisions are used directly for generating sound output, so they must be chosen to take tuplets into account. Using a divisions element lets us use just one number to represent a duration for each note in the score, while retaining the full power of a fractional representation. If maximum compatibility with Standard MIDI 1.0 files is important, do not have the divisions value exceed 16383. */
	divisions?: number;
	footnote?: formattedText;
	/** The instruments element is only used if more than one instrument is represented in the part (e.g., oboe I and II where they play together most of the time). If absent, a value of 1 is assumed. */
	instruments?: number;
	/** The key element represents a key signature. Both traditional and non-traditional key signatures are supported. The optional number attribute refers to staff numbers. If absent, the key signature applies to all staves in the part. */
	key?: key[];
	level?: level;
	/** A measure-style indicates a special way to print partial to multiple measures within a part. This includes multiple rests over several measures, repeats of beats, single, or multiple measures, and use of slash notation. */
	measureStyle?: measureStyle[];
	/** The part-symbol element indicates how a symbol for a multi-staff part is indicated in the score. */
	partSymbol?: partSymbol;
	/** The staff-details element is used to indicate different types of staves. */
	staffDetails?: staffDetails[];
	/** The staves element is used if there is more than one staff represented in the given part (e.g., 2 staves for typical piano parts). If absent, a value of 1 is assumed. Staves are ordered from top to bottom in a part in numerical order, with staff 1 above staff 2. */
	staves?: number;
	/** Time signatures are represented by the beats element for the numerator and the beat-type element for the denominator. */
	time?: time[];
	/** If the part is being encoded for a transposing instrument in written vs. concert pitch, the transposition must be encoded in the transpose element using the transpose type. */
	transpose?: transpose[];
}
export interface attributes extends _attributes { constructor: { new(): attributes }; }
export var attributes: { new(): attributes };

interface _attributesDirectiveType extends Primitive._string {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	/** Attempting to install the relevant ISO 2- and 3-letter
	  * codes as the enumerated possible values is probably never
	  * going to be a realistic possibility.  See
	  * RFC 3066 at http://www.ietf.org/rfc/rfc3066.txt and the IANA registry
	  * at http://www.iana.org/assignments/lang-tag-apps.htm for
	  * further information.
	  *
	  * The union allows for the 'un-declaration' of xml:lang with
	  * the empty string. */
	lang: string;
	relativeX: number;
	relativeY: number;
}
interface attributesDirectiveType extends _attributesDirectiveType { constructor: { new(): attributesDirectiveType }; }

/** The backup and forward elements are required to coordinate multiple voices in one part, including music on multiple staves. The backup type is generally used to move between voices and staves. Thus the backup element does not include voice or staff elements. Duration values should always be positive, and should not cross measure boundaries or mid-measure changes in the divisions value. */
interface _backup extends BaseType {
	/** Duration is a positive number specified in division units. This is the intended duration vs. notated duration (for instance, swing eighths vs. even eighths, or differences in dotted notes in Baroque-era music). Differences in duration specific to an interpretation or performance should use the note element's attack and release attributes. */
	duration: number;
	footnote?: formattedText;
	level?: level;
}
export interface backup extends _backup { constructor: { new(): backup }; }
export var backup: { new(): backup };

/** The backward-forward type is used to specify repeat directions. The start of the repeat has a forward direction while the end of the repeat has a backward direction. */
export type backwardForward = ("backward" | "forward");
interface _backwardForward extends Primitive._string { content: backwardForward; }

/** If a barline is other than a normal single barline, it should be represented by a barline type that describes it. This includes information about repeats and multiple endings, as well as line style. Barline data is on the same level as the other musical data in a score - a child of a measure in a partwise score, or a part in a timewise score. This allows for barlines within measures, as in dotted barlines that subdivide measures in complex meters. The two fermata elements allow for fermatas on both sides of the barline (the lower one inverted).
  *
  * Barlines have a location attribute to make it easier to process barlines independently of the other musical data in a score. It is often easier to set up measures separately from entering notes. The location attribute must match where the barline element occurs within the rest of the musical data in the score. If location is left, it should be the first element in the measure, aside from the print, bookmark, and link elements. If location is right, it should be the last element, again with the possible exception of the print, bookmark, and link elements. If no location is specified, the right barline is the default. The segno, coda, and divisions attributes work the same way as in the sound element. They are used for playback when barline elements contain segno or coda child elements. */
interface _barline extends BaseType {
	$coda: string;
	divisions: number;
	id: string;
	location: rightLeftmiddle;
	$segno: string;
	barStyle?: barStylecolor;
	coda?: coda;
	ending?: ending;
	fermata?: fermata[];
	footnote?: formattedText;
	level?: level;
	repeat?: repeat;
	segno?: segno;
	wavyLine?: wavyLine;
}
export interface barline extends _barline { constructor: { new(): barline }; }
export var barline: { new(): barline };

/** The barre element indicates placing a finger over multiple strings on a single fret. The type is "start" for the lowest pitched string (e.g., the string with the highest MusicXML number) and is "stop" for the highest pitched string. */
interface _barre extends BaseType {
	color: string;
	type: startStop;
}
export interface barre extends _barre { constructor: { new(): barre }; }
export var barre: { new(): barre };

/** The bar-style type represents barline style information. Choices are regular, dotted, dashed, heavy, light-light, light-heavy, heavy-light, heavy-heavy, tick (a short stroke through the top line), short (a partial barline between the 2nd and 4th lines), and none. */
export type barStyle = ("regular" | "dotted" | "dashed" | "heavy" | "light-light" | "light-heavy" | "heavy-light" | "heavy-heavy" | "tick" | "short" | "none");
interface _barStyle extends Primitive._string { content: barStyle; }

/** The bar-style-color type contains barline style and color information. */
interface _barStylecolor extends _barStyle {
	color: string;
}
export interface barStylecolor extends _barStylecolor { constructor: { new(): barStylecolor }; }
export var barStylecolor: { new(): barStylecolor };

/** The bass type is used to indicate a bass note in popular music chord symbols, e.g. G/C. It is generally not used in functional harmony, as inversion is generally not used in pop chord symbols. As with root, it is divided into step and alter elements, similar to pitches. */
interface _bass extends BaseType {
	bassAlter?: bassAlter;
	bassStep: bassStep;
}
export interface bass extends _bass { constructor: { new(): bass }; }
export var bass: { new(): bass };

/** The bass-alter type represents the chromatic alteration of the bass of the current chord within the harmony element. In some chord styles, the text for the bass-step element may include bass-alter information. In that case, the print-object attribute of the bass-alter element can be set to no. The location attribute indicates whether the alteration should appear to the left or the right of the bass-step; it is right by default. */
interface _bassAlter extends _semitones {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	location: leftRight;
	printObject: yesNo;
	relativeX: number;
	relativeY: number;
}
export interface bassAlter extends _bassAlter { constructor: { new(): bassAlter }; }
export var bassAlter: { new(): bassAlter };

/** The bass-step type represents the pitch step of the bass of the current chord within the harmony element. The text attribute indicates how the bass should appear in a score if not using the element contents. */
interface _bassStep extends _step {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	relativeX: number;
	relativeY: number;
	text: string;
}
export interface bassStep extends _bassStep { constructor: { new(): bassStep }; }
export var bassStep: { new(): bassStep };

/** Beam values include begin, continue, end, forward hook, and backward hook. Up to eight concurrent beams are available to cover up to 1024th notes. Each beam in a note is represented with a separate beam element, starting with the eighth note beam using a number attribute of 1.
  *
  * Note that the beam number does not distinguish sets of beams that overlap, as it does for slur and other elements. Beaming groups are distinguished by being in different voices and/or the presence or absence of grace and cue elements.
  *
  * Beams that have a begin value can also have a fan attribute to indicate accelerandos and ritardandos using fanned beams. The fan attribute may also be used with a continue value if the fanning direction changes on that note. The value is "none" if not specified.
  *
  * The repeater attribute has been deprecated in MusicXML 3.0. Formerly used for tremolos, it needs to be specified with a "yes" value for each beam using it. */
interface _beam extends _beamValue {
	color: string;
	fan: fan;
	id: string;
	number: number;
	repeater: yesNo;
}
export interface beam extends _beam { constructor: { new(): beam }; }
export var beam: { new(): beam };

/** The MusicXML format supports six levels of beaming, up to 1024th notes. Unlike the number-level type, the beam-level type identifies concurrent beams in a beam group. It does not distinguish overlapping beams such as grace notes within regular notes, or beams used in different voices. */
export type beamLevel = number;
type _beamLevel = Primitive._number;

/** The beam-value type represents the type of beam associated with each of 8 beam levels (up to 1024th notes) available for each note. */
export type beamValue = ("begin" | "continue" | "end" | "forward hook" | "backward hook");
interface _beamValue extends Primitive._string { content: beamValue; }

/** The beater type represents pictograms for beaters, mallets, and sticks that do not have different materials represented in the pictogram. */
interface _beater extends _beaterValue {
	tip: tipDirection;
}
export interface beater extends _beater { constructor: { new(): beater }; }
export var beater: { new(): beater };

/** The beater-value type represents pictograms for beaters, mallets, and sticks that do not have different materials represented in the pictogram. The finger and hammer values are in addition to Stone's list. */
export type beaterValue = ("bow" | "chime hammer" | "coin" | "drum stick" | "finger" | "fingernail" | "fist" | "guiro scraper" | "hammer" | "hand" | "jazz stick" | "knitting needle" | "metal hammer" | "slide brush on gong" | "snare stick" | "spoon mallet" | "superball" | "triangle beater" | "triangle beater plain" | "wire brush");
interface _beaterValue extends Primitive._string { content: beaterValue; }

/** The beat-repeat type is used to indicate that a single beat (but possibly many notes) is repeated. Both the start and stop of the beat being repeated should be specified. The slashes attribute specifies the number of slashes to use in the symbol. The use-dots attribute indicates whether or not to use dots as well (for instance, with mixed rhythm patterns). By default, the value for slashes is 1 and the value for use-dots is no.
  *
  * The beat-repeat element specifies a notation style for repetitions. The actual music being repeated needs to be repeated within the MusicXML file. This element specifies the notation that indicates the repeat. */
interface _beatRepeat extends BaseType {
	slashes: number;
	type: startStop;
	useDots: yesNo;
	/** The except-voice element is used to specify a combination of slash notation and regular notation. Any note elements that are in voices specified by the except-voice elements are displayed in normal notation, in addition to the slash notation that is always displayed. */
	exceptVoice?: string[];
	/** The slash-dot element is used to specify any augmentation dots in the note type used to display repetition marks. */
	slashDot?: empty[];
	/** The slash-type element indicates the graphical note type to use for the display of repetition marks. */
	slashType?: noteTypevalue;
}
export interface beatRepeat extends _beatRepeat { constructor: { new(): beatRepeat }; }
export var beatRepeat: { new(): beatRepeat };

/** The beat-unit-tied type indicates a beat-unit within a metronome mark that is tied to the preceding beat-unit. This allows or two or more tied notes to be associated with a per-minute value in a metronome mark, whereas the metronome-tied element is restricted to metric relationship marks. */
interface _beatUnittied extends BaseType {
	/** The beat-unit element indicates the graphical note type to use in a metronome mark. */
	beatUnit: noteTypevalue;
	/** The beat-unit-dot element is used to specify any augmentation dots for a metronome mark note. */
	beatUnitdot?: empty[];
}
export interface beatUnittied extends _beatUnittied { constructor: { new(): beatUnittied }; }
export var beatUnittied: { new(): beatUnittied };

/** The bend type is used in guitar and tablature. The bend-alter element indicates the number of steps in the bend, similar to the alter element. As with the alter element, numbers like 0.5 can be used to indicate microtones. Negative numbers indicate pre-bends or releases; the pre-bend and release elements are used to distinguish what is intended. A with-bar element indicates that the bend is to be done at the bridge with a whammy or vibrato bar. The content of the element indicates how this should be notated. */
interface _bend extends BaseType {
	accelerate: yesNo;
	beats: number;
	color: string;
	defaultX: number;
	defaultY: number;
	firstBeat: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	lastBeat: number;
	relativeX: number;
	relativeY: number;
	/** The bend-alter element indicates the number of steps in the bend, similar to the alter element. As with the alter element, numbers like 0.5 can be used to indicate microtones. Negative numbers indicate pre-bends or releases; the pre-bend and release elements are used to distinguish what is intended. */
	bendAlter: number;
	/** The pre-bend element indicates that this is a pre-bend rather than a normal bend or a release. */
	preBend?: empty;
	/** The release element indicates that this is a release rather than a normal bend or pre-bend. */
	release?: empty;
	/** The with-bar element indicates that the bend is to be done at the bridge with a whammy or vibrato bar. The content of the element indicates how this should be notated. Content values of "scoop" and "dip" refer to the SMuFL guitarVibratoBarScoop and guitarVibratoBarDip glyphs. */
	withBar?: placementText;
}
export interface bend extends _bend { constructor: { new(): bend }; }
export var bend: { new(): bend };

/** The bookmark type serves as a well-defined target for an incoming simple XLink. */
interface _bookmark extends BaseType {
	element: string;
	id: string;
	name: string;
	position: number;
}
export interface bookmark extends _bookmark { constructor: { new(): bookmark }; }
export var bookmark: { new(): bookmark };

/** Brackets are combined with words in a variety of modern directions. The line-end attribute specifies if there is a jog up or down (or both), an arrow, or nothing at the start or end of the bracket. If the line-end is up or down, the length of the jog can be specified using the end-length attribute. The line-type is solid by default. */
interface _bracket extends BaseType {
	color: string;
	dashLength: number;
	defaultX: number;
	defaultY: number;
	endLength: number;
	id: string;
	lineEnd: lineEnd;
	lineType: lineType;
	number: number;
	relativeX: number;
	relativeY: number;
	spaceLength: number;
	type: startStopcontinue;
}
export interface bracket extends _bracket { constructor: { new(): bracket }; }
export var bracket: { new(): bracket };

/** The breath-mark element indicates a place to take a breath. */
interface _breathMark extends _breathMarkvalue {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
}
export interface breathMark extends _breathMark { constructor: { new(): breathMark }; }
export var breathMark: { new(): breathMark };

/** The breath-mark-value type represents the symbol used for a breath mark. */
export type breathMarkvalue = ("" | "comma" | "tick" | "upbow" | "salzedo");
interface _breathMarkvalue extends Primitive._string { content: breathMarkvalue; }

/** The caesura element indicates a slight pause. It is notated using a "railroad tracks" symbol or other variations specified in the element content. */
interface _caesura extends _caesuraValue {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
}
export interface caesura extends _caesura { constructor: { new(): caesura }; }
export var caesura: { new(): caesura };

/** The caesura-value type represents the shape of the caesura sign. */
export type caesuraValue = ("normal" | "thick" | "short" | "curved" | "single" | "");
interface _caesuraValue extends Primitive._string { content: caesuraValue; }

/** A cancel element indicates that the old key signature should be cancelled before the new one appears. This will always happen when changing to C major or A minor and need not be specified then. The cancel value matches the fifths value of the cancelled key signature (e.g., a cancel of -2 will provide an explicit cancellation for changing from B flat major to F major). The optional location attribute indicates where the cancellation appears relative to the new key signature. */
interface _cancel extends _fifths {
	location: cancelLocation;
}
export interface cancel extends _cancel { constructor: { new(): cancel }; }
export var cancel: { new(): cancel };

/** The cancel-location type is used to indicate where a key signature cancellation appears relative to a new key signature: to the left, to the right, or before the barline and to the left. It is left by default. For mid-measure key elements, a cancel-location of before-barline should be treated like a cancel-location of left. */
export type cancelLocation = ("left" | "right" | "before-barline");
interface _cancelLocation extends Primitive._string { content: cancelLocation; }

/** The circular-arrow type represents the direction in which a circular arrow points, using Unicode arrow terminology. */
export type circularArrow = ("clockwise" | "anticlockwise");
interface _circularArrow extends Primitive._string { content: circularArrow; }

/** Clefs are represented by a combination of sign, line, and clef-octave-change elements. The optional number attribute refers to staff numbers within the part. A value of 1 is assumed if not present.
  *
  * Sometimes clefs are added to the staff in non-standard line positions, either to indicate cue passages, or when there are multiple clefs present simultaneously on one staff. In this situation, the additional attribute is set to "yes" and the line value is ignored. The size attribute is used for clefs where the additional attribute is "yes". It is typically used to indicate cue clefs.
  *
  * Sometimes clefs at the start of a measure need to appear after the barline rather than before, as for cues or for use after a repeated section. The after-barline attribute is set to "yes" in this situation. The attribute is ignored for mid-measure clefs.
  *
  * Clefs appear at the start of each system unless the print-object attribute has been set to "no" or the additional attribute has been set to "yes". */
interface _clef extends BaseType {
	additional: yesNo;
	afterBarline: yesNo;
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	id: string;
	number: number;
	printObject: yesNo;
	relativeX: number;
	relativeY: number;
	size: symbolSize;
	/** The clef-octave-change element is used for transposing clefs. A treble clef for tenors would have a value of -1. */
	clefOctavechange?: number;
	/** Line numbers are counted from the bottom of the staff. Standard values are 2 for the G sign (treble clef), 4 for the F sign (bass clef), 3 for the C sign (alto clef) and 5 for TAB (on a 6-line staff). */
	line?: number;
	/** The sign element represents the clef symbol. */
	sign: clefSign;
}
export interface clef extends _clef { constructor: { new(): clef }; }
export var clef: { new(): clef };

/** The clef-sign element represents the different clef symbols. The jianpu sign indicates that the music that follows should be in jianpu numbered notation, just as the TAB sign indicates that the music that follows should be in tablature notation. Unlike TAB, a jianpu sign does not correspond to a visual clef notation. */
export type clefSign = ("G" | "F" | "C" | "percussion" | "TAB" | "jianpu" | "none");
interface _clefSign extends Primitive._string { content: clefSign; }

/** The coda type is the visual indicator of a coda sign. The exact glyph can be specified with the smufl attribute. A sound element is also needed to guide playback applications reliably. */
interface _coda extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	id: string;
	relativeX: number;
	relativeY: number;
	smufl: string;
	valign: valign;
}
export interface coda extends _coda { constructor: { new(): coda }; }
export var coda: { new(): coda };

/** The color type indicates the color of an element. Color may be represented as hexadecimal RGB triples, as in HTML, or as hexadecimal ARGB tuples, with the A indicating alpha of transparency. An alpha value of 00 is totally transparent; FF is totally opaque. If RGB is used, the A value is assumed to be FF.
  *
  * For instance, the RGB value "#800080" represents purple. An ARGB value of "#40800080" would be a transparent purple.
  *
  * As in SVG 1.1, colors are defined in terms of the sRGB color space (IEC 61966). */
export type color = string;
type _color = Primitive._string;

/** The comma-separated-text type is used to specify a comma-separated list of text elements, as is used by the font-family attribute. */
export type commaSeparatedtext = string;
type _commaSeparatedtext = Primitive._string;

/** The credit type represents the appearance of the title, composer, arranger, lyricist, copyright, dedication, and other text, symbols, and graphics that commonly appear on the first page of a score. The credit-words, credit-symbol, and credit-image elements are similar to the words, symbol, and image elements for directions. However, since the credit is not part of a measure, the default-x and default-y attributes adjust the origin relative to the bottom left-hand corner of the page. The enclosure for credit-words and credit-symbol is none by default.
  *
  * By default, a series of credit-words and credit-symbol elements within a single credit element follow one another in sequence visually. Non-positional formatting attributes are carried over from the previous element by default.
  *
  * The page attribute for the credit element specifies the page number where the credit should appear. This is an integer value that starts with 1 for the first page. Its value is 1 by default. Since credits occur before the music, these page numbers do not refer to the page numbering specified by the print element's page-number attribute.
  *
  * The credit-type element indicates the purpose behind a credit. Multiple types of data may be combined in a single credit, so multiple elements may be used. Standard values include page number, title, subtitle, composer, arranger, lyricist, and rights. */
interface _credit extends BaseType {
	id: string;
	page: number;
	bookmark?: bookmark[];
	creditImage: image;
	creditSymbol: formattedSymbolid[];
	creditType?: string[];
	creditWords: formattedTextid[];
	link?: link[];
}
export interface credit extends _credit { constructor: { new(): credit }; }
export var credit: { new(): credit };

/** The css-font-size type includes the CSS font sizes used as an alternative to a numeric point size. */
export type cssFontsize = ("xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large");
interface _cssFontsize extends Primitive._string { content: cssFontsize; }

/** The dashes type represents dashes, used for instance with cresc. and dim. marks. */
interface _dashes extends BaseType {
	color: string;
	dashLength: number;
	defaultX: number;
	defaultY: number;
	id: string;
	number: number;
	relativeX: number;
	relativeY: number;
	spaceLength: number;
	type: startStopcontinue;
}
export interface dashes extends _dashes { constructor: { new(): dashes }; }
export var dashes: { new(): dashes };

/** The defaults type specifies score-wide defaults for scaling, layout, and appearance. */
interface _defaults extends BaseType {
	appearance?: appearance;
	lyricFont?: lyricFont[];
	lyricLanguage?: lyricLanguage[];
	musicFont?: emptyFont;
	pageLayout?: pageLayout;
	scaling?: scaling;
	staffLayout?: staffLayout[];
	systemLayout?: systemLayout;
	wordFont?: emptyFont;
}
export interface defaults extends _defaults { constructor: { new(): defaults }; }
export var defaults: { new(): defaults };

/** The degree type is used to add, alter, or subtract individual notes in the chord. The print-object attribute can be used to keep the degree from printing separately when it has already taken into account in the text attribute of the kind element. The degree-value and degree-type text attributes specify how the value and type of the degree should be displayed.
  *
  * A harmony of kind "other" can be spelled explicitly by using a series of degree elements together with a root. */
interface _degree extends BaseType {
	printObject: yesNo;
	degreeAlter: degreeAlter;
	degreeType: degreeType;
	degreeValue: degreeValue;
}
export interface degree extends _degree { constructor: { new(): degree }; }
export var degree: { new(): degree };

/** The degree-alter type represents the chromatic alteration for the current degree. If the degree-type value is alter or subtract, the degree-alter value is relative to the degree already in the chord based on its kind element. If the degree-type value is add, the degree-alter is relative to a dominant chord (major and perfect intervals except for a minor seventh). The plus-minus attribute is used to indicate if plus and minus symbols should be used instead of sharp and flat symbols to display the degree alteration; it is no by default. */
interface _degreeAlter extends _semitones {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	plusMinus: yesNo;
	relativeX: number;
	relativeY: number;
}
export interface degreeAlter extends _degreeAlter { constructor: { new(): degreeAlter }; }
export var degreeAlter: { new(): degreeAlter };

/** The degree-symbol-value type indicates indicates that a symbol should be used in specifying the degree. */
export type degreeSymbolvalue = ("major" | "minor" | "augmented" | "diminished" | "half-diminished");
interface _degreeSymbolvalue extends Primitive._string { content: degreeSymbolvalue; }

/** The degree-type type indicates if this degree is an addition, alteration, or subtraction relative to the kind of the current chord. The value of the degree-type element affects the interpretation of the value of the degree-alter element. The text attribute specifies how the type of the degree should be displayed in a score. */
interface _degreeType extends _degreeTypevalue {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	relativeX: number;
	relativeY: number;
	text: string;
}
export interface degreeType extends _degreeType { constructor: { new(): degreeType }; }
export var degreeType: { new(): degreeType };

/** The degree-type-value type indicates whether the current degree element is an addition, alteration, or subtraction to the kind of the current chord in the harmony element. */
export type degreeTypevalue = ("add" | "alter" | "subtract");
interface _degreeTypevalue extends Primitive._string { content: degreeTypevalue; }

/** The content of the degree-value type is a number indicating the degree of the chord (1 for the root, 3 for third, etc). The text attribute specifies how the type of the degree should be displayed in a score. The degree-value symbol attribute indicates that a symbol should be used in specifying the degree. If the symbol attribute is present, the value of the text attribute follows the symbol. */
interface _degreeValue extends Primitive._number {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	relativeX: number;
	relativeY: number;
	symbol: degreeSymbolvalue;
	text: string;
}
export interface degreeValue extends _degreeValue { constructor: { new(): degreeValue }; }
export var degreeValue: { new(): degreeValue };

/** A direction is a musical indication that is not necessarily attached to a specific note. Two or more may be combined to indicate starts and stops of wedges, dashes, etc. For applications where a specific direction is indeed attached to a specific note, the direction element can be associated with the note element that follows it in score order that is not in a different voice.
  *
  * By default, a series of direction-type elements and a series of child elements of a direction-type within a single direction element follow one another in sequence visually. For a series of direction-type children, non-positional formatting attributes are carried over from the previous element by default. */
interface _direction extends BaseType {
	directive: yesNo;
	id: string;
	placement: aboveBelow;
	directionType: directionType[];
	footnote?: formattedText;
	level?: level;
	offset?: offset;
	sound?: sound;
	/** Staff assignment is only needed for music notated on multiple staves. Used by both notes and directions. Staff values are numbers, with 1 referring to the top-most staff in a part. */
	staff?: number;
	voice?: string;
}
export interface direction extends _direction { constructor: { new(): direction }; }
export var direction: { new(): direction };

/** Textual direction types may have more than 1 component due to multiple fonts. The dynamics element may also be used in the notations element. Attribute groups related to print suggestions apply to the individual direction-type, not to the overall direction. */
interface _directionType extends BaseType {
	id: string;
	accordionRegistration: accordionRegistration;
	bracket: bracket;
	coda: coda[];
	/** The damp element specifies a harp damping mark. */
	damp: emptyPrintstylealignid;
	/** The damp-all element specifies a harp damping mark for all strings. */
	dampAll: emptyPrintstylealignid;
	dashes: dashes;
	dynamics: dynamics[];
	/** The eyeglasses element specifies the eyeglasses symbol, common in commercial music. */
	eyeglasses: emptyPrintstylealignid;
	harpPedals: harpPedals;
	image: image;
	metronome: metronome;
	octaveShift: octaveShift;
	otherDirection: otherDirection;
	pedal: pedal;
	percussion: percussion[];
	principalVoice: principalVoice;
	/** The rehearsal type specifies a rehearsal mark. Language is Italian ("it") by default. Enclosure is square by default. Left justification is assumed if not specified. */
	rehearsal: formattedTextid[];
	scordatura: scordatura;
	segno: segno[];
	staffDivide: staffDivide;
	stringMute: stringMute;
	/** The symbol element specifies a musical symbol using a canonical SMuFL glyph name. It is used when an occasional musical symbol is interspersed into text. It should not be used in place of semantic markup, such as metronome marks that mix text and symbols. Left justification is assumed if not specified. Enclosure is none by default. */
	symbol: formattedSymbolid[];
	wedge: wedge;
	/** The words element specifies a standard text direction. Left justification is assumed if not specified. Language is Italian ("it") by default. Enclosure is none by default. */
	words: formattedTextid[];
}
export interface directionType extends _directionType { constructor: { new(): directionType }; }
export var directionType: { new(): directionType };

/** The distance element represents standard distances between notation elements in tenths. The type attribute defines what type of distance is being defined. Valid values include hyphen (for hyphens in lyrics) and beam. */
interface _distance extends _tenths {
	type: string;
}
export interface distance extends _distance { constructor: { new(): distance }; }
export var distance: { new(): distance };

/** The distance-type defines what type of distance is being defined in a distance element. Values include beam and hyphen. This is left as a string so that other application-specific types can be defined, but it is made a separate type so that it can be redefined more strictly. */
export type distanceType = string;
type _distanceType = Primitive._string;

/** The divisions type is used to express values in terms of the musical divisions defined by the divisions element. It is preferred that these be integer values both for MIDI interoperability and to avoid roundoff errors. */
export type divisions = number;
type _divisions = Primitive._number;

/** Dynamics can be associated either with a note or a general musical direction. To avoid inconsistencies between and amongst the letter abbreviations for dynamics (what is sf vs. sfz, standing alone or with a trailing dynamic that is not always piano), we use the actual letters as the names of these dynamic elements. The other-dynamics element allows other dynamic marks that are not covered here, but many of those should perhaps be included in a more general musical direction element. Dynamics elements may also be combined to create marks not covered by a single element, such as sfmp.
  *
  * These letter dynamic symbols are separated from crescendo, decrescendo, and wedge indications. Dynamic representation is inconsistent in scores. Many things are assumed by the composer and left out, such as returns to original dynamics. Systematic representations are quite complex: for example, Humdrum has at least 3 representation formats related to dynamics. The MusicXML format captures what is in the score, but does not try to be optimal for analysis or synthesis of dynamics. */
interface _dynamics extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	enclosure: enclosureShape;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	id: string;
	lineThrough: number;
	overline: number;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	underline: number;
	valign: valign;
	f?: empty[];
	ff?: empty[];
	fff?: empty[];
	ffff?: empty[];
	fffff?: empty[];
	ffffff?: empty[];
	fp?: empty[];
	fz?: empty[];
	mf?: empty[];
	mp?: empty[];
	n?: empty[];
	otherDynamics?: otherText[];
	p?: empty[];
	pf?: empty[];
	pp?: empty[];
	ppp?: empty[];
	pppp?: empty[];
	ppppp?: empty[];
	pppppp?: empty[];
	rf?: empty[];
	rfz?: empty[];
	sf?: empty[];
	sffz?: empty[];
	sfp?: empty[];
	sfpp?: empty[];
	sfz?: empty[];
	sfzp?: empty[];
}
export interface dynamics extends _dynamics { constructor: { new(): dynamics }; }
export var dynamics: { new(): dynamics };

/** The effect type represents pictograms for sound effect percussion instruments. The cannon, lotus flute, and megaphone values are in addition to Stone's list. */
export type effect = ("anvil" | "auto horn" | "bird whistle" | "cannon" | "duck call" | "gun shot" | "klaxon horn" | "lions roar" | "lotus flute" | "megaphone" | "police whistle" | "siren" | "slide whistle" | "thunder sheet" | "wind machine" | "wind whistle");
interface _effect extends Primitive._string { content: effect; }

/** The elision type represents an elision between lyric syllables. The text content specifies the symbol used to display the elision. Common values are a no-break space (Unicode 00A0), an underscore (Unicode 005F), or an undertie (Unicode 203F). If the text content is empty, the smufl attribute is used to specify the symbol to use. Its value is a SMuFL canonical glyph name that starts with lyrics. The SMuFL attribute is ignored if the elision glyph is already specified by the text content. If neither text content nor a smufl attribute are present, the elision glyph is application-specific. */
interface _elision extends Primitive._string {
	color: string;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	smufl: string;
}
export interface elision extends _elision { constructor: { new(): elision }; }
export var elision: { new(): elision };

/** The empty type represents an empty element with no attributes. */
interface _empty extends BaseType {}
export interface empty extends _empty { constructor: { new(): empty }; }
export var empty: { new(): empty };

/** The empty-font type represents an empty element with font attributes. */
interface _emptyFont extends BaseType {
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
}
export interface emptyFont extends _emptyFont { constructor: { new(): emptyFont }; }
export var emptyFont: { new(): emptyFont };

/** The empty-line type represents an empty element with line-shape, line-type, line-length, dashed-formatting, print-style and placement attributes. */
interface _emptyLine extends BaseType {
	color: string;
	dashLength: number;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	lineLength: lineLength;
	lineShape: lineShape;
	lineType: lineType;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	spaceLength: number;
}
export interface emptyLine extends _emptyLine { constructor: { new(): emptyLine }; }
export var emptyLine: { new(): emptyLine };

/** The empty-placement type represents an empty element with print-style and placement attributes. */
interface _emptyPlacement extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
}
export interface emptyPlacement extends _emptyPlacement { constructor: { new(): emptyPlacement }; }
export var emptyPlacement: { new(): emptyPlacement };

/** The empty-placement-smufl type represents an empty element with print-style, placement, and smufl attributes. */
interface _emptyPlacementsmufl extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	smufl: string;
}
export interface emptyPlacementsmufl extends _emptyPlacementsmufl { constructor: { new(): emptyPlacementsmufl }; }
export var emptyPlacementsmufl: { new(): emptyPlacementsmufl };

/** The empty-print-style-align-object type represents an empty element with print-object and print-style-align attribute groups. */
interface _emptyPrintobjectstylealign extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	printObject: yesNo;
	relativeX: number;
	relativeY: number;
	valign: valign;
}
export interface emptyPrintobjectstylealign extends _emptyPrintobjectstylealign { constructor: { new(): emptyPrintobjectstylealign }; }
export var emptyPrintobjectstylealign: { new(): emptyPrintobjectstylealign };

/** The empty-print-style type represents an empty element with print-style attribute group. */
interface _emptyPrintstyle extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	relativeX: number;
	relativeY: number;
}
export interface emptyPrintstyle extends _emptyPrintstyle { constructor: { new(): emptyPrintstyle }; }
export var emptyPrintstyle: { new(): emptyPrintstyle };

/** The empty-print-style-align type represents an empty element with print-style-align attribute group. */
interface _emptyPrintstylealign extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	relativeX: number;
	relativeY: number;
	valign: valign;
}
export interface emptyPrintstylealign extends _emptyPrintstylealign { constructor: { new(): emptyPrintstylealign }; }
export var emptyPrintstylealign: { new(): emptyPrintstylealign };

/** The empty-print-style-align-id type represents an empty element with print-style-align and optional-unique-id attribute groups. */
interface _emptyPrintstylealignid extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	id: string;
	relativeX: number;
	relativeY: number;
	valign: valign;
}
export interface emptyPrintstylealignid extends _emptyPrintstylealignid { constructor: { new(): emptyPrintstylealignid }; }
export var emptyPrintstylealignid: { new(): emptyPrintstylealignid };

/** The empty-trill-sound type represents an empty element with print-style, placement, and trill-sound attributes. */
interface _emptyTrillsound extends BaseType {
	accelerate: yesNo;
	beats: number;
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	lastBeat: number;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	secondBeat: number;
	startNote: startNote;
	trillStep: trillStep;
	twoNoteturn: twoNoteturn;
}
export interface emptyTrillsound extends _emptyTrillsound { constructor: { new(): emptyTrillsound }; }
export var emptyTrillsound: { new(): emptyTrillsound };

/** The enclosure-shape type describes the shape and presence / absence of an enclosure around text or symbols. A bracket enclosure is similar to a rectangle with the bottom line missing, as is common in jazz notation. */
export type enclosureShape = ("rectangle" | "square" | "oval" | "circle" | "bracket" | "triangle" | "diamond" | "pentagon" | "hexagon" | "heptagon" | "octagon" | "nonagon" | "decagon" | "none");
interface _enclosureShape extends Primitive._string { content: enclosureShape; }

/** The encoding element contains information about who did the digital encoding, when, with what software, and in what aspects. Standard type values for the encoder element are music, words, and arrangement, but other types may be used. The type attribute is only needed when there are multiple encoder elements. */
interface _encoding extends BaseType {
	encoder?: typedText[];
	encodingDate?: Date[];
	encodingDescription?: string[];
	software?: string[];
	supports?: supports[];
}
export interface encoding extends _encoding { constructor: { new(): encoding }; }
export var encoding: { new(): encoding };

/** The ending type represents multiple (e.g. first and second) endings. Typically, the start type is associated with the left barline of the first measure in an ending. The stop and discontinue types are associated with the right barline of the last measure in an ending. Stop is used when the ending mark concludes with a downward jog, as is typical for first endings. Discontinue is used when there is no downward jog, as is typical for second endings that do not conclude a piece. The length of the jog can be specified using the end-length attribute. The text-x and text-y attributes are offsets that specify where the baseline of the start of the ending text appears, relative to the start of the ending line.
  *
  * The number attribute reflects the numeric values of what is under the ending line. Single endings such as "1" or comma-separated multiple endings such as "1,2" may be used. The ending element text is used when the text displayed in the ending is different than what appears in the number attribute. The print-object element is used to indicate when an ending is present but not printed, as is often the case for many parts in a full score. */
interface _ending extends Primitive._string {
	color: string;
	defaultX: number;
	defaultY: number;
	endLength: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	number: string;
	printObject: yesNo;
	relativeX: number;
	relativeY: number;
	textX: number;
	textY: number;
	type: startStopdiscontinue;
}
export interface ending extends _ending { constructor: { new(): ending }; }
export var ending: { new(): ending };

/** The ending-number type is used to specify either a comma-separated list of positive integers without leading zeros, or a string of zero or more spaces. It is used for the number attribute of the ending element. The zero or more spaces version is used when software knows that an ending is present, but cannot determine the type of the ending. */
export type endingNumber = string;
type _endingNumber = Primitive._string;

/** The extend type represents lyric word extension / melisma lines as well as figured bass extensions. The optional type and position attributes are added in Version 3.0 to provide better formatting control. */
interface _extend extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	relativeX: number;
	relativeY: number;
	type: startStopcontinue;
}
export interface extend extends _extend { constructor: { new(): extend }; }
export var extend: { new(): extend };

/** The fan type represents the type of beam fanning present on a note, used to represent accelerandos and ritardandos. */
export type fan = ("accel" | "rit" | "none");
interface _fan extends Primitive._string { content: fan; }

/** The feature type is a part of the grouping element used for musical analysis. The type attribute represents the type of the feature and the element content represents its value. This type is flexible to allow for different analyses. */
interface _feature extends Primitive._string {
	type: string;
}
export interface feature extends _feature { constructor: { new(): feature }; }
export var feature: { new(): feature };

/** The fermata text content represents the shape of the fermata sign. An empty fermata element represents a normal fermata. The fermata type is upright if not specified. */
interface _fermata extends _fermataShape {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	id: string;
	relativeX: number;
	relativeY: number;
	type: uprightInverted;
}
export interface fermata extends _fermata { constructor: { new(): fermata }; }
export var fermata: { new(): fermata };

/** The fermata-shape type represents the shape of the fermata sign. The empty value is equivalent to the normal value. */
export type fermataShape = ("normal" | "angled" | "square" | "double-angled" | "double-square" | "double-dot" | "half-curve" | "curlew" | "");
interface _fermataShape extends Primitive._string { content: fermataShape; }

/** The fifths type represents the number of flats or sharps in a traditional key signature. Negative numbers are used for flats and positive numbers for sharps, reflecting the key's placement within the circle of fifths (hence the type name). */
export type fifths = number;
type _fifths = Primitive._number;

/** The figure type represents a single figure within a figured-bass element. */
interface _figure extends BaseType {
	extend?: extend;
	/** A figure-number is a number. Overstrikes of the figure number are represented in the suffix element. */
	figureNumber?: styleText;
	footnote?: formattedText;
	level?: level;
	/** Values for the prefix element include plus and the accidental values sharp, flat, natural, double-sharp, flat-flat, and sharp-sharp. The prefix element may contain additional values for symbols specific to particular figured bass styles. */
	prefix?: styleText;
	/** Values for the suffix element include plus and the accidental values sharp, flat, natural, double-sharp, flat-flat, and sharp-sharp. Suffixes include both symbols that come after the figure number and those that overstrike the figure number. The suffix values slash, back-slash, and vertical are used for slashed numbers indicating chromatic alteration. The orientation and display of the slash usually depends on the figure number. The suffix element may contain additional values for symbols specific to particular figured bass styles. */
	suffix?: styleText;
}
export interface figure extends _figure { constructor: { new(): figure }; }
export var figure: { new(): figure };

/** The figured-bass element represents figured bass notation. Figured bass elements take their position from the first regular note (not a grace note or chord note) that follows in score order. The optional duration element is used to indicate changes of figures under a note.
  *
  * Figures are ordered from top to bottom. The value of parentheses is "no" if not present. */
interface _figuredBass extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	id: string;
	parentheses: yesNo;
	printDot: yesNo;
	printLyric: yesNo;
	printObject: yesNo;
	printSpacing: yesNo;
	relativeX: number;
	relativeY: number;
	/** Duration is a positive number specified in division units. This is the intended duration vs. notated duration (for instance, swing eighths vs. even eighths, or differences in dotted notes in Baroque-era music). Differences in duration specific to an interpretation or performance should use the note element's attack and release attributes. */
	duration?: number;
	figure: figure[];
	footnote?: formattedText;
	level?: level;
}
export interface figuredBass extends _figuredBass { constructor: { new(): figuredBass }; }
export var figuredBass: { new(): figuredBass };

/** Fingering is typically indicated 1,2,3,4,5. Multiple fingerings may be given, typically to substitute fingerings in the middle of a note. The substitution and alternate values are "no" if the attribute is not present. For guitar and other fretted instruments, the fingering element represents the fretting finger; the pluck element represents the plucking finger. */
interface _fingering extends Primitive._string {
	alternate: yesNo;
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	substitution: yesNo;
}
export interface fingering extends _fingering { constructor: { new(): fingering }; }
export var fingering: { new(): fingering };

/** The first-fret type indicates which fret is shown in the top space of the frame; it is fret 1 if the element is not present. The optional text attribute indicates how this is represented in the fret diagram, while the location attribute indicates whether the text appears to the left or right of the frame. */
interface _firstFret extends Primitive._number {
	location: leftRight;
	text: string;
}
export interface firstFret extends _firstFret { constructor: { new(): firstFret }; }
export var firstFret: { new(): firstFret };

/** The font-size can be one of the CSS font sizes or a numeric point size. */
interface _fontSize extends _string {}
export interface fontSize extends _fontSize { constructor: { new(): fontSize }; }
export var fontSize: { new(): fontSize };

/** The font-style type represents a simplified version of the CSS font-style property. */
export type fontStyle = ("normal" | "italic");
interface _fontStyle extends Primitive._string { content: fontStyle; }

/** The font-weight type represents a simplified version of the CSS font-weight property. */
export type fontWeight = ("normal" | "bold");
interface _fontWeight extends Primitive._string { content: fontWeight; }

/** The formatted-symbol type represents a SMuFL musical symbol element with formatting attributes. */
interface _formattedSymbol extends _smuflGlyphname {
	color: string;
	defaultX: number;
	defaultY: number;
	dir: textDirection;
	enclosure: enclosureShape;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	justify: leftCenterright;
	letterSpacing: numberOrnormal;
	lineHeight: numberOrnormal;
	lineThrough: number;
	overline: number;
	relativeX: number;
	relativeY: number;
	rotation: number;
	underline: number;
	valign: valign;
}
export interface formattedSymbol extends _formattedSymbol { constructor: { new(): formattedSymbol }; }
export var formattedSymbol: { new(): formattedSymbol };

/** The formatted-symbol-id type represents a SMuFL musical symbol element with formatting and id attributes. */
interface _formattedSymbolid extends _smuflGlyphname {
	color: string;
	defaultX: number;
	defaultY: number;
	dir: textDirection;
	enclosure: enclosureShape;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	id: string;
	justify: leftCenterright;
	letterSpacing: numberOrnormal;
	lineHeight: numberOrnormal;
	lineThrough: number;
	overline: number;
	relativeX: number;
	relativeY: number;
	rotation: number;
	underline: number;
	valign: valign;
}
export interface formattedSymbolid extends _formattedSymbolid { constructor: { new(): formattedSymbolid }; }
export var formattedSymbolid: { new(): formattedSymbolid };

/** The formatted-text type represents a text element with text-formatting attributes. */
interface _formattedText extends Primitive._string {
	color: string;
	defaultX: number;
	defaultY: number;
	dir: textDirection;
	enclosure: enclosureShape;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	justify: leftCenterright;
	/** Attempting to install the relevant ISO 2- and 3-letter
	  * codes as the enumerated possible values is probably never
	  * going to be a realistic possibility.  See
	  * RFC 3066 at http://www.ietf.org/rfc/rfc3066.txt and the IANA registry
	  * at http://www.iana.org/assignments/lang-tag-apps.htm for
	  * further information.
	  *
	  * The union allows for the 'un-declaration' of xml:lang with
	  * the empty string. */
	lang: string;
	letterSpacing: numberOrnormal;
	lineHeight: numberOrnormal;
	lineThrough: number;
	overline: number;
	relativeX: number;
	relativeY: number;
	rotation: number;
	space: xml.SpaceType;
	underline: number;
	valign: valign;
}
export interface formattedText extends _formattedText { constructor: { new(): formattedText }; }
export var formattedText: { new(): formattedText };

/** The formatted-text-id type represents a text element with text-formatting and id attributes. */
interface _formattedTextid extends Primitive._string {
	color: string;
	defaultX: number;
	defaultY: number;
	dir: textDirection;
	enclosure: enclosureShape;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	id: string;
	justify: leftCenterright;
	/** Attempting to install the relevant ISO 2- and 3-letter
	  * codes as the enumerated possible values is probably never
	  * going to be a realistic possibility.  See
	  * RFC 3066 at http://www.ietf.org/rfc/rfc3066.txt and the IANA registry
	  * at http://www.iana.org/assignments/lang-tag-apps.htm for
	  * further information.
	  *
	  * The union allows for the 'un-declaration' of xml:lang with
	  * the empty string. */
	lang: string;
	letterSpacing: numberOrnormal;
	lineHeight: numberOrnormal;
	lineThrough: number;
	overline: number;
	relativeX: number;
	relativeY: number;
	rotation: number;
	space: xml.SpaceType;
	underline: number;
	valign: valign;
}
export interface formattedTextid extends _formattedTextid { constructor: { new(): formattedTextid }; }
export var formattedTextid: { new(): formattedTextid };

/** The backup and forward elements are required to coordinate multiple voices in one part, including music on multiple staves. The forward element is generally used within voices and staves. Duration values should always be positive, and should not cross measure boundaries or mid-measure changes in the divisions value. */
interface _forward extends BaseType {
	/** Duration is a positive number specified in division units. This is the intended duration vs. notated duration (for instance, swing eighths vs. even eighths, or differences in dotted notes in Baroque-era music). Differences in duration specific to an interpretation or performance should use the note element's attack and release attributes. */
	duration: number;
	footnote?: formattedText;
	level?: level;
	/** Staff assignment is only needed for music notated on multiple staves. Used by both notes and directions. Staff values are numbers, with 1 referring to the top-most staff in a part. */
	staff?: number;
	voice?: string;
}
export interface forward extends _forward { constructor: { new(): forward }; }
export var forward: { new(): forward };

/** The frame type represents a frame or fretboard diagram used together with a chord symbol. The representation is based on the NIFF guitar grid with additional information. The frame type's unplayed attribute indicates what to display above a string that has no associated frame-note element. Typical values are x and the empty string. If the attribute is not present, the display of the unplayed string is application-defined. */
interface _frame extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	halign: leftCenterright;
	height: number;
	id: string;
	relativeX: number;
	relativeY: number;
	unplayed: string;
	valign: valignImage;
	width: number;
	firstFret?: firstFret;
	/** The frame-frets element gives the overall size of the frame in horizontal spaces (frets). */
	frameFrets: number;
	frameNote: frameNote[];
	/** The frame-strings element gives the overall size of the frame in vertical lines (strings). */
	frameStrings: number;
}
export interface frame extends _frame { constructor: { new(): frame }; }
export var frame: { new(): frame };

/** The frame-note type represents each note included in the frame. An open string will have a fret value of 0, while a muted string will not be associated with a frame-note element. */
interface _frameNote extends BaseType {
	barre?: barre;
	fingering?: fingering;
	fret: fret;
	string: string;
}
export interface frameNote extends _frameNote { constructor: { new(): frameNote }; }
export var frameNote: { new(): frameNote };

/** The fret element is used with tablature notation and chord diagrams. Fret numbers start with 0 for an open string and 1 for the first fret. */
interface _fret extends Primitive._number {
	color: string;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
}
export interface fret extends _fret { constructor: { new(): fret }; }
export var fret: { new(): fret };

/** The glass type represents pictograms for glass percussion instruments. The smufl attribute is used to distinguish different SMuFL glyphs for wind chimes in the chimes pictograms range, including those made of materials other than glass. */
interface _glass extends _glassValue {
	smufl: string;
}
export interface glass extends _glass { constructor: { new(): glass }; }
export var glass: { new(): glass };

/** The glass-value type represents pictograms for glass percussion instruments. */
export type glassValue = ("glass harmonica" | "glass harp" | "wind chimes");
interface _glassValue extends Primitive._string { content: glassValue; }

/** Glissando and slide types both indicate rapidly moving from one pitch to the other so that individual notes are not discerned. The distinction is similar to that between NIFF's glissando and portamento elements. A glissando sounds the half notes in between the slide and defaults to a wavy line. The optional text is printed alongside the line. */
interface _glissando extends Primitive._string {
	color: string;
	dashLength: number;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	id: string;
	lineType: lineType;
	number: number;
	relativeX: number;
	relativeY: number;
	spaceLength: number;
	type: startStop;
}
export interface glissando extends _glissando { constructor: { new(): glissando }; }
export var glissando: { new(): glissando };

/** The glyph element represents what SMuFL glyph should be used for different variations of symbols that are semantically identical. The type attribute specifies what type of glyph is being defined. The element value specifies what SMuFL glyph to use, including recommended stylistic alternates. The SMuFL glyph name should match the type. For instance, a type of quarter-rest would use values restQuarter, restQuarterOld, or restQuarterZ. A type of g-clef-ottava-bassa would use values gClef8vb, gClef8vbOld, or gClef8vbCClef. A type of octave-shift-up-8 would use values ottava, ottavaBassa, ottavaBassaBa, ottavaBassaVb, or octaveBassa. */
interface _glyph extends _smuflGlyphname {
	type: string;
}
export interface glyph extends _glyph { constructor: { new(): glyph }; }
export var glyph: { new(): glyph };

/** The glyph-type defines what type of glyph is being defined in a glyph element. Values include quarter-rest, g-clef-ottava-bassa, c-clef, f-clef, percussion-clef, octave-shift-up-8, octave-shift-down-8, octave-shift-continue-8, octave-shift-down-15, octave-shift-up-15, octave-shift-continue-15, octave-shift-down-22, octave-shift-up-22, and octave-shift-continue-22. This is left as a string so that other application-specific types can be defined, but it is made a separate type so that it can be redefined more strictly.
  *
  * A quarter-rest type specifies the glyph to use when a note has a rest element and a type value of quarter. The c-clef, f-clef, and percussion-clef types specify the glyph to use when a clef sign element value is C, F, or percussion respectively. The g-clef-ottava-bassa type specifies the glyph to use when a clef sign element value is G and the clef-octave-change element value is -1. The octave-shift types specify the glyph to use when an octave-shift type attribute value is up, down, or continue and the octave-shift size attribute value is 8, 15, or 22. */
export type glyphType = string;
type _glyphType = Primitive._string;

/** The grace type indicates the presence of a grace note. The slash attribute for a grace note is yes for slashed eighth notes. The other grace note attributes come from MuseData sound suggestions. The steal-time-previous attribute indicates the percentage of time to steal from the previous note for the grace note. The steal-time-following attribute indicates the percentage of time to steal from the following note for the grace note, as for appoggiaturas. The make-time attribute indicates to make time, not steal time; the units are in real-time divisions for the grace note. */
interface _grace extends BaseType {
	makeTime: number;
	slash: yesNo;
	stealTimefollowing: number;
	stealTimeprevious: number;
}
export interface grace extends _grace { constructor: { new(): grace }; }
export var grace: { new(): grace };

/** The group-barline type indicates if the group should have common barlines. */
interface _groupBarline extends _groupBarlinevalue {
	color: string;
}
export interface groupBarline extends _groupBarline { constructor: { new(): groupBarline }; }
export var groupBarline: { new(): groupBarline };

/** The group-barline-value type indicates if the group should have common barlines. */
export type groupBarlinevalue = ("yes" | "no" | "Mensurstrich");
interface _groupBarlinevalue extends Primitive._string { content: groupBarlinevalue; }

/** The grouping type is used for musical analysis. When the type attribute is "start" or "single", it usually contains one or more feature elements. The number attribute is used for distinguishing between overlapping and hierarchical groupings. The member-of attribute allows for easy distinguishing of what grouping elements are in what hierarchy. Feature elements contained within a "stop" type of grouping may be ignored.
  *
  * This element is flexible to allow for different types of analyses. Future versions of the MusicXML format may add elements that can represent more standardized categories of analysis data, allowing for easier data sharing. */
interface _grouping extends BaseType {
	id: string;
	memberOf: string;
	number: string;
	type: startStopsingle;
	feature?: feature[];
}
export interface grouping extends _grouping { constructor: { new(): grouping }; }
export var grouping: { new(): grouping };

/** The group-name type describes the name or abbreviation of a part-group element. Formatting attributes in the group-name type are deprecated in Version 2.0 in favor of the new group-name-display and group-abbreviation-display elements. */
interface _groupName extends Primitive._string {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	justify: leftCenterright;
	relativeX: number;
	relativeY: number;
}
export interface groupName extends _groupName { constructor: { new(): groupName }; }
export var groupName: { new(): groupName };

/** The group-symbol type indicates how the symbol for a group is indicated in the score. */
interface _groupSymbol extends _groupSymbolvalue {
	color: string;
	defaultX: number;
	defaultY: number;
	relativeX: number;
	relativeY: number;
}
export interface groupSymbol extends _groupSymbol { constructor: { new(): groupSymbol }; }
export var groupSymbol: { new(): groupSymbol };

/** The group-symbol-value type indicates how the symbol for a group is indicated in the score. The default value is none. */
export type groupSymbolvalue = ("none" | "brace" | "line" | "bracket" | "square");
interface _groupSymbolvalue extends Primitive._string { content: groupSymbolvalue; }

/** The hammer-on and pull-off elements are used in guitar and fretted instrument notation. Since a single slur can be marked over many notes, the hammer-on and pull-off elements are separate so the individual pair of notes can be specified. The element content can be used to specify how the hammer-on or pull-off should be notated. An empty element leaves this choice up to the application. */
interface _hammerOnpulloff extends Primitive._string {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	number: number;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	type: startStop;
}
export interface hammerOnpulloff extends _hammerOnpulloff { constructor: { new(): hammerOnpulloff }; }
export var hammerOnpulloff: { new(): hammerOnpulloff };

/** The handbell element represents notation for various techniques used in handbell and handchime music. */
interface _handbell extends _handbellValue {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
}
export interface handbell extends _handbell { constructor: { new(): handbell }; }
export var handbell: { new(): handbell };

/** The handbell-value type represents the type of handbell technique being notated. */
export type handbellValue = ("belltree" | "damp" | "echo" | "gyro" | "hand martellato" | "mallet lift" | "mallet table" | "martellato" | "martellato lift" | "muted martellato" | "pluck lift" | "swing");
interface _handbellValue extends Primitive._string { content: handbellValue; }

/** The harmon-closed type represents whether the harmon mute is closed, open, or half-open. The optional location attribute indicates which portion of the symbol is filled in when the element value is half. */
interface _harmonClosed extends _harmonClosedvalue {
	location: harmonClosedlocation;
}
export interface harmonClosed extends _harmonClosed { constructor: { new(): harmonClosed }; }
export var harmonClosed: { new(): harmonClosed };

/** The harmon-closed-location type indicates which portion of the symbol is filled in when the corresponding harmon-closed-value is half. */
export type harmonClosedlocation = ("right" | "bottom" | "left" | "top");
interface _harmonClosedlocation extends Primitive._string { content: harmonClosedlocation; }

/** The harmon-closed-value type represents whether the harmon mute is closed, open, or half-open. */
export type harmonClosedvalue = ("yes" | "no" | "half");
interface _harmonClosedvalue extends Primitive._string { content: harmonClosedvalue; }

/** The harmonic type indicates natural and artificial harmonics. Allowing the type of pitch to be specified, combined with controls for appearance/playback differences, allows both the notation and the sound to be represented. Artificial harmonics can add a notated touching-pitch; artificial pinch harmonics will usually not notate a touching pitch. The attributes for the harmonic element refer to the use of the circular harmonic symbol, typically but not always used with natural harmonics. */
interface _harmonic extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	placement: aboveBelow;
	printObject: yesNo;
	relativeX: number;
	relativeY: number;
	/** The artificial element indicates that this is an artificial harmonic. */
	artificial?: empty;
	/** The base pitch is the pitch at which the string is played before touching to create the harmonic. */
	basePitch?: empty;
	/** The natural element indicates that this is a natural harmonic. These are usually notated at base pitch rather than sounding pitch. */
	natural?: empty;
	/** The sounding-pitch is the pitch which is heard when playing the harmonic. */
	soundingPitch?: empty;
	/** The touching-pitch is the pitch at which the string is touched lightly to produce the harmonic. */
	touchingPitch?: empty;
}
export interface harmonic extends _harmonic { constructor: { new(): harmonic }; }
export var harmonic: { new(): harmonic };

/** The harmon-mute type represents the symbols used for harmon mutes in brass notation. */
interface _harmonMute extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	harmonClosed: harmonClosed;
}
export interface harmonMute extends _harmonMute { constructor: { new(): harmonMute }; }
export var harmonMute: { new(): harmonMute };

/** The harmony type is based on Humdrum's **harm encoding, extended to support chord symbols in popular music as well as functional harmony analysis in classical music.
  *
  * If there are alternate harmonies possible, this can be specified using multiple harmony elements differentiated by type. Explicit harmonies have all note present in the music; implied have some notes missing but implied; alternate represents alternate analyses.
  *
  * The harmony object may be used for analysis or for chord symbols. The print-object attribute controls whether or not anything is printed due to the harmony element. The print-frame attribute controls printing of a frame or fretboard diagram. The print-style attribute group sets the default for the harmony, but individual elements can override this with their own print-style values. */
interface _harmony extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	id: string;
	placement: aboveBelow;
	printFrame: yesNo;
	printObject: yesNo;
	relativeX: number;
	relativeY: number;
	type: harmonyType;
	bass?: bass[];
	degree?: degree[];
	footnote?: formattedText;
	frame?: frame;
	/** The function element is used to represent classical functional harmony with an indication like I, II, III rather than C, D, E. It is relative to the key that is specified in the MusicXML encoding. */
	function: styleText[];
	inversion?: inversion[];
	kind: kind[];
	level?: level;
	offset?: offset;
	root: root[];
	/** Staff assignment is only needed for music notated on multiple staves. Used by both notes and directions. Staff values are numbers, with 1 referring to the top-most staff in a part. */
	staff?: number;
}
export interface harmony extends _harmony { constructor: { new(): harmony }; }
export var harmony: { new(): harmony };

/** The harmony-type type differentiates different types of harmonies when alternate harmonies are possible. Explicit harmonies have all note present in the music; implied have some notes missing but implied; alternate represents alternate analyses. */
export type harmonyType = ("explicit" | "implied" | "alternate");
interface _harmonyType extends Primitive._string { content: harmonyType; }

/** The harp-pedals type is used to create harp pedal diagrams. The pedal-step and pedal-alter elements use the same values as the step and alter elements. For easiest reading, the pedal-tuning elements should follow standard harp pedal order, with pedal-step values of D, C, B, E, F, G, and A. */
interface _harpPedals extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	id: string;
	relativeX: number;
	relativeY: number;
	valign: valign;
	pedalTuning: pedalTuning[];
}
export interface harpPedals extends _harpPedals { constructor: { new(): harpPedals }; }
export var harpPedals: { new(): harpPedals };

/** The heel and toe elements are used with organ pedals. The substitution value is "no" if the attribute is not present. */
interface _heelToe extends _emptyPlacement {
	substitution: yesNo;
}
export interface heelToe extends _heelToe { constructor: { new(): heelToe }; }
export var heelToe: { new(): heelToe };

/** The hole type represents the symbols used for woodwind and brass fingerings as well as other notations. */
interface _hole extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	holeClosed: holeClosed;
	/** The optional hole-shape element indicates the shape of the hole symbol; the default is a circle. */
	holeShape?: string;
	/** The content of the optional hole-type element indicates what the hole symbol represents in terms of instrument fingering or other techniques. */
	holeType?: string;
}
export interface hole extends _hole { constructor: { new(): hole }; }
export var hole: { new(): hole };

/** The hole-closed type represents whether the hole is closed, open, or half-open. The optional location attribute indicates which portion of the hole is filled in when the element value is half. */
interface _holeClosed extends _holeClosedvalue {
	location: holeClosedlocation;
}
export interface holeClosed extends _holeClosed { constructor: { new(): holeClosed }; }
export var holeClosed: { new(): holeClosed };

/** The hole-closed-location type indicates which portion of the hole is filled in when the corresponding hole-closed-value is half. */
export type holeClosedlocation = ("right" | "bottom" | "left" | "top");
interface _holeClosedlocation extends Primitive._string { content: holeClosedlocation; }

/** The hole-closed-value type represents whether the hole is closed, open, or half-open. */
export type holeClosedvalue = ("yes" | "no" | "half");
interface _holeClosedvalue extends Primitive._string { content: holeClosedvalue; }

/** The horizontal-turn type represents turn elements that are horizontal rather than vertical. These are empty elements with print-style, placement, trill-sound, and slash attributes. If the slash attribute is yes, then a vertical line is used to slash the turn; it is no by default. */
interface _horizontalTurn extends BaseType {
	accelerate: yesNo;
	beats: number;
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	lastBeat: number;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	secondBeat: number;
	slash: yesNo;
	startNote: startNote;
	trillStep: trillStep;
	twoNoteturn: twoNoteturn;
}
export interface horizontalTurn extends _horizontalTurn { constructor: { new(): horizontalTurn }; }
export var horizontalTurn: { new(): horizontalTurn };

/** Identification contains basic metadata about the score. It includes the information in MuseData headers that may apply at a score-wide, movement-wide, or part-wide level. The creator, rights, source, and relation elements are based on Dublin Core. */
interface _identification extends BaseType {
	/** The creator element is borrowed from Dublin Core. It is used for the creators of the score. The type attribute is used to distinguish different creative contributions. Thus, there can be multiple creators within an identification. Standard type values are composer, lyricist, and arranger. Other type values may be used for different types of creative roles. The type attribute should usually be used even if there is just a single creator element. The MusicXML format does not use the creator / contributor distinction from Dublin Core. */
	creator?: typedText[];
	encoding?: encoding;
	miscellaneous?: miscellaneous;
	/** A related resource for the music that is encoded. This is similar to the Dublin Core relation element. Standard type values are music, words, and arrangement, but other types may be used. */
	relation?: typedText[];
	/** The rights element is borrowed from Dublin Core. It contains copyright and other intellectual property notices. Words, music, and derivatives can have different types, so multiple rights tags with different type attributes are supported. Standard type values are music, words, and arrangement, but other types may be used. The type attribute is only needed when there are multiple rights elements. */
	rights?: typedText[];
	/** The source for the music that is encoded. This is similar to the Dublin Core source element. */
	source?: string;
}
export interface identification extends _identification { constructor: { new(): identification }; }
export var identification: { new(): identification };

/** The image type is used to include graphical images in a score. */
interface _image extends BaseType {
	defaultX: number;
	defaultY: number;
	halign: leftCenterright;
	height: number;
	id: string;
	relativeX: number;
	relativeY: number;
	source: string;
	type: string;
	valign: valignImage;
	width: number;
}
export interface image extends _image { constructor: { new(): image }; }
export var image: { new(): image };

/** The instrument type distinguishes between score-instrument elements in a score-part. The id attribute is an IDREF back to the score-instrument ID. If multiple score-instruments are specified on a score-part, there should be an instrument element for each note in the part. */
interface _instrument extends BaseType {
	id: string;
}
export interface instrument extends _instrument { constructor: { new(): instrument }; }
export var instrument: { new(): instrument };

/** The interchangeable type is used to represent the second in a pair of interchangeable dual time signatures, such as the 6/8 in 3/4 (6/8). A separate symbol attribute value is available compared to the time element's symbol attribute, which applies to the first of the dual time signatures. */
interface _interchangeable extends BaseType {
	separator: timeSeparator;
	symbol: timeSymbol;
	/** The beat-type element indicates the beat unit, as found in the denominator of a time signature. */
	beatType: string[];
	/** The beats element indicates the number of beats, as found in the numerator of a time signature. */
	beats: string[];
	timeRelation?: timeRelation;
}
export interface interchangeable extends _interchangeable { constructor: { new(): interchangeable }; }
export var interchangeable: { new(): interchangeable };

/** The inversion type represents harmony inversions. The value is a number indicating which inversion is used: 0 for root position, 1 for first inversion, etc. */
interface _inversion extends Primitive._number {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	relativeX: number;
	relativeY: number;
}
export interface inversion extends _inversion { constructor: { new(): inversion }; }
export var inversion: { new(): inversion };

/** The key type represents a key signature. Both traditional and non-traditional key signatures are supported. The optional number attribute refers to staff numbers. If absent, the key signature applies to all staves in the part. Key signatures appear at the start of each system unless the print-object attribute has been set to "no". */
interface _key extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	id: string;
	number: number;
	printObject: yesNo;
	relativeX: number;
	relativeY: number;
	cancel?: cancel;
	fifths: number;
	/** Non-traditional key signatures can be represented using the Humdrum/Scot concept of a list of altered tones. The key-accidental element indicates the accidental to be displayed in the key signature, represented in the same manner as the accidental element. It is used for disambiguating microtonal accidentals. */
	keyAccidental?: keyAccidental[];
	/** Non-traditional key signatures can be represented using the Humdrum/Scot concept of a list of altered tones. The key-alter element represents the alteration for a given pitch step, represented with semitones in the same manner as the alter element. */
	keyAlter?: number[];
	/** The optional list of key-octave elements is used to specify in which octave each element of the key signature appears. */
	keyOctave?: keyOctave[];
	/** Non-traditional key signatures can be represented using the Humdrum/Scot concept of a list of altered tones. The key-step element indicates the pitch step to be altered, represented using the same names as in the step element. */
	keyStep?: step[];
	mode?: string;
}
export interface key extends _key { constructor: { new(): key }; }
export var key: { new(): key };

/** The key-accidental type indicates the accidental to be displayed in a non-traditional key signature, represented in the same manner as the accidental type without the formatting attributes. */
interface _keyAccidental extends _accidentalValue {
	smufl: string;
}
export interface keyAccidental extends _keyAccidental { constructor: { new(): keyAccidental }; }
export var keyAccidental: { new(): keyAccidental };

/** The key-octave element specifies in which octave an element of a key signature appears. The content specifies the octave value using the same values as the display-octave element. The number attribute is a positive integer that refers to the key signature element in left-to-right order. If the cancel attribute is set to yes, then this number refers to the canceling key signature specified by the cancel element in the parent key element. The cancel attribute cannot be set to yes if there is no corresponding cancel element within the parent key element. It is no by default. */
interface _keyOctave extends _octave {
	cancel: yesNo;
	number: number;
}
export interface keyOctave extends _keyOctave { constructor: { new(): keyOctave }; }
export var keyOctave: { new(): keyOctave };

/** Kind indicates the type of chord. Degree elements can then add, subtract, or alter from these starting points
  *
  * The attributes are used to indicate the formatting of the symbol. Since the kind element is the constant in all the harmony-chord groups that can make up a polychord, many formatting attributes are here.
  *
  * The use-symbols attribute is yes if the kind should be represented when possible with harmony symbols rather than letters and numbers. These symbols include:
  *
  * major: a triangle, like Unicode 25B3
  * minor: -, like Unicode 002D
  * augmented: +, like Unicode 002B
  * diminished: °, like Unicode 00B0
  * half-diminished: ø, like Unicode 00F8
  *
  * For the major-minor kind, only the minor symbol is used when use-symbols is yes. The major symbol is set using the symbol attribute in the degree-value element. The corresponding degree-alter value will usually be 0 in this case.
  *
  * The text attribute describes how the kind should be spelled in a score. If use-symbols is yes, the value of the text attribute follows the symbol. The stack-degrees attribute is yes if the degree elements should be stacked above each other. The parentheses-degrees attribute is yes if all the degrees should be in parentheses. The bracket-degrees attribute is yes if all the degrees should be in a bracket. If not specified, these values are implementation-specific. The alignment attributes are for the entire harmony-chord group of which this kind element is a part. */
interface _kind extends _kindValue {
	bracketDegrees: yesNo;
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	parenthesesDegrees: yesNo;
	relativeX: number;
	relativeY: number;
	stackDegrees: yesNo;
	text: string;
	useSymbols: yesNo;
	valign: valign;
}
export interface kind extends _kind { constructor: { new(): kind }; }
export var kind: { new(): kind };

/** A kind-value indicates the type of chord. Degree elements can then add, subtract, or alter from these starting points. Values include:
  *
  * Triads:
  * major (major third, perfect fifth)
  * minor (minor third, perfect fifth)
  * augmented (major third, augmented fifth)
  * diminished (minor third, diminished fifth)
  * Sevenths:
  * dominant (major triad, minor seventh)
  * major-seventh (major triad, major seventh)
  * minor-seventh (minor triad, minor seventh)
  * diminished-seventh (diminished triad, diminished seventh)
  * augmented-seventh (augmented triad, minor seventh)
  * half-diminished (diminished triad, minor seventh)
  * major-minor (minor triad, major seventh)
  * Sixths:
  * major-sixth (major triad, added sixth)
  * minor-sixth (minor triad, added sixth)
  * Ninths:
  * dominant-ninth (dominant-seventh, major ninth)
  * major-ninth (major-seventh, major ninth)
  * minor-ninth (minor-seventh, major ninth)
  * 11ths (usually as the basis for alteration):
  * dominant-11th (dominant-ninth, perfect 11th)
  * major-11th (major-ninth, perfect 11th)
  * minor-11th (minor-ninth, perfect 11th)
  * 13ths (usually as the basis for alteration):
  * dominant-13th (dominant-11th, major 13th)
  * major-13th (major-11th, major 13th)
  * minor-13th (minor-11th, major 13th)
  * Suspended:
  * suspended-second (major second, perfect fifth)
  * suspended-fourth (perfect fourth, perfect fifth)
  * Functional sixths:
  * Neapolitan
  * Italian
  * French
  * German
  * Other:
  * pedal (pedal-point bass)
  * power (perfect fifth)
  * Tristan
  *
  * The "other" kind is used when the harmony is entirely composed of add elements. The "none" kind is used to explicitly encode absence of chords or functional harmony. */
export type kindValue = ("major" | "minor" | "augmented" | "diminished" | "dominant" | "major-seventh" | "minor-seventh" | "diminished-seventh" | "augmented-seventh" | "half-diminished" | "major-minor" | "major-sixth" | "minor-sixth" | "dominant-ninth" | "major-ninth" | "minor-ninth" | "dominant-11th" | "major-11th" | "minor-11th" | "dominant-13th" | "major-13th" | "minor-13th" | "suspended-second" | "suspended-fourth" | "Neapolitan" | "Italian" | "French" | "German" | "pedal" | "power" | "Tristan" | "other" | "none");
interface _kindValue extends Primitive._string { content: kindValue; }

/** The left-center-right type is used to define horizontal alignment and text justification. */
export type leftCenterright = ("left" | "center" | "right");
interface _leftCenterright extends Primitive._string { content: leftCenterright; }

/** The left-right type is used to indicate whether one element appears to the left or the right of another element. */
export type leftRight = ("left" | "right");
interface _leftRight extends Primitive._string { content: leftRight; }

/** The level type is used to specify editorial information for different MusicXML elements. If the reference attribute for the level element is yes, this indicates editorial information that is for display only and should not affect playback. For instance, a modern edition of older music may set reference="yes" on the attributes containing the music's original clef, key, and time signature. It is no by default. */
interface _level extends Primitive._string {
	bracket: yesNo;
	parentheses: yesNo;
	reference: yesNo;
	size: symbolSize;
}
export interface level extends _level { constructor: { new(): level }; }
export var level: { new(): level };

/** The line-end type specifies if there is a jog up or down (or both), an arrow, or nothing at the start or end of a bracket. */
export type lineEnd = ("up" | "down" | "both" | "arrow" | "none");
interface _lineEnd extends Primitive._string { content: lineEnd; }

/** The line-length type distinguishes between different line lengths for doit, falloff, plop, and scoop articulations. */
export type lineLength = ("short" | "medium" | "long");
interface _lineLength extends Primitive._string { content: lineLength; }

/** The line-shape type distinguishes between straight and curved lines. */
export type lineShape = ("straight" | "curved");
interface _lineShape extends Primitive._string { content: lineShape; }

/** The line-type type distinguishes between solid, dashed, dotted, and wavy lines. */
export type lineType = ("solid" | "dashed" | "dotted" | "wavy");
interface _lineType extends Primitive._string { content: lineType; }

/** The line-width type indicates the width of a line type in tenths. The type attribute defines what type of line is being defined. Values include beam, bracket, dashes, enclosure, ending, extend, heavy barline, leger, light barline, octave shift, pedal, slur middle, slur tip, staff, stem, tie middle, tie tip, tuplet bracket, and wedge. The text content is expressed in tenths. */
interface _lineWidth extends _tenths {
	type: string;
}
export interface lineWidth extends _lineWidth { constructor: { new(): lineWidth }; }
export var lineWidth: { new(): lineWidth };

/** The line-width-type defines what type of line is being defined in a line-width element. Values include beam, bracket, dashes, enclosure, ending, extend, heavy barline, leger, light barline, octave shift, pedal, slur middle, slur tip, staff, stem, tie middle, tie tip, tuplet bracket, and wedge. This is left as a string so that other application-specific types can be defined, but it is made a separate type so that it can be redefined more strictly. */
export type lineWidthtype = string;
type _lineWidthtype = Primitive._string;

/** The link type serves as an outgoing simple XLink. It is also used to connect a MusicXML score with a MusicXML opus. If a relative link is used within a document that is part of a compressed MusicXML file, the link is relative to the  root folder of the zip file. */
interface _link extends BaseType {
	actuate: xlink.ActuateType;
	defaultX: number;
	defaultY: number;
	element: string;
	href: string;
	name: string;
	position: number;
	relativeX: number;
	relativeY: number;
	role: string;
	show: xlink.ShowType;
	title: string;
	type: xlink.TypeType;
}
export interface link extends _link { constructor: { new(): link }; }
export var link: { new(): link };

/** The lyric type represents text underlays for lyrics, based on Humdrum with support for other formats. Two text elements that are not separated by an elision element are part of the same syllable, but may have different text formatting. The MusicXML XSD is more strict than the DTD in enforcing this by disallowing a second syllabic element unless preceded by an elision element. The lyric number indicates multiple lines, though a name can be used as well (as in Finale's verse / chorus / section specification).
  *
  * Justification is center by default; placement is below by default. The print-object attribute can override a note's print-lyric attribute in cases where only some lyrics on a note are printed, as when lyrics for later verses are printed in a block of text rather than with each note. The time-only attribute precisely specifies which lyrics are to be sung which time through a repeated section. */
interface _lyric extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	id: string;
	justify: leftCenterright;
	name: string;
	number: string;
	placement: aboveBelow;
	printObject: yesNo;
	relativeX: number;
	relativeY: number;
	timeOnly: string;
	elision?: elision[];
	/** The end-line element comes from RP-017 for Standard MIDI File Lyric meta-events. It facilitates lyric display for Karaoke and similar applications. */
	endLine?: empty;
	/** The end-paragraph element comes from RP-017 for Standard MIDI File Lyric meta-events. It facilitates lyric display for Karaoke and similar applications. */
	endParagraph?: empty;
	extend: extend[];
	footnote?: formattedText;
	/** The humming element is taken from Humdrum. */
	humming: empty;
	/** The laughing element is taken from Humdrum. */
	laughing: empty;
	level?: level;
	syllabic?: syllabic[];
	text: textElementdata[];
}
export interface lyric extends _lyric { constructor: { new(): lyric }; }
export var lyric: { new(): lyric };

/** The lyric-font type specifies the default font for a particular name and number of lyric. */
interface _lyricFont extends BaseType {
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	name: string;
	number: string;
}
export interface lyricFont extends _lyricFont { constructor: { new(): lyricFont }; }
export var lyricFont: { new(): lyricFont };

/** The lyric-language type specifies the default language for a particular name and number of lyric. */
interface _lyricLanguage extends BaseType {
	/** Attempting to install the relevant ISO 2- and 3-letter
	  * codes as the enumerated possible values is probably never
	  * going to be a realistic possibility.  See
	  * RFC 3066 at http://www.ietf.org/rfc/rfc3066.txt and the IANA registry
	  * at http://www.iana.org/assignments/lang-tag-apps.htm for
	  * further information.
	  *
	  * The union allows for the 'un-declaration' of xml:lang with
	  * the empty string. */
	lang: string;
	name: string;
	number: string;
}
export interface lyricLanguage extends _lyricLanguage { constructor: { new(): lyricLanguage }; }
export var lyricLanguage: { new(): lyricLanguage };

/** The margin-type type specifies whether margins apply to even page, odd pages, or both. */
export type marginType = ("odd" | "even" | "both");
interface _marginType extends Primitive._string { content: marginType; }

/** The measure-layout type includes the horizontal distance from the previous measure. */
interface _measureLayout extends BaseType {
	/** The measure-distance element specifies the horizontal distance from the previous measure. This value is only used for systems where there is horizontal whitespace in the middle of a system, as in systems with codas. To specify the measure width, use the width attribute of the measure element. */
	measureDistance?: number;
}
export interface measureLayout extends _measureLayout { constructor: { new(): measureLayout }; }
export var measureLayout: { new(): measureLayout };

/** The measure-numbering type describes how frequently measure numbers are displayed on this part. The number attribute from the measure element is used for printing. Measures with an implicit attribute set to "yes" never display a measure number, regardless of the measure-numbering setting. */
interface _measureNumbering extends _measureNumberingvalue {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	relativeX: number;
	relativeY: number;
	valign: valign;
}
export interface measureNumbering extends _measureNumbering { constructor: { new(): measureNumbering }; }
export var measureNumbering: { new(): measureNumbering };

/** The measure-numbering-value type describes how measure numbers are displayed on this part: no numbers, numbers every measure, or numbers every system. */
export type measureNumberingvalue = ("none" | "measure" | "system");
interface _measureNumberingvalue extends Primitive._string { content: measureNumberingvalue; }

/** The measure-repeat type is used for both single and multiple measure repeats. The text of the element indicates the number of measures to be repeated in a single pattern. The slashes attribute specifies the number of slashes to use in the repeat sign. It is 1 if not specified. Both the start and the stop of the measure-repeat must be specified. The text of the element is ignored when the type is stop.
  *
  * The measure-repeat element specifies a notation style for repetitions. The actual music being repeated needs to be repeated within the MusicXML file. This element specifies the notation that indicates the repeat. */
interface _measureRepeat extends _positiveIntegerorempty {
	slashes: number;
	type: startStop;
}
export interface measureRepeat extends _measureRepeat { constructor: { new(): measureRepeat }; }
export var measureRepeat: { new(): measureRepeat };

/** A measure-style indicates a special way to print partial to multiple measures within a part. This includes multiple rests over several measures, repeats of beats, single, or multiple measures, and use of slash notation.
  *
  * The multiple-rest and measure-repeat symbols indicate the number of measures covered in the element content. The beat-repeat and slash elements can cover partial measures. All but the multiple-rest element use a type attribute to indicate starting and stopping the use of the style. The optional number attribute specifies the staff number from top to bottom on the system, as with clef. */
interface _measureStyle extends BaseType {
	color: string;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	id: string;
	number: number;
	beatRepeat: beatRepeat;
	measureRepeat: measureRepeat;
	multipleRest: multipleRest;
	slash: slash;
}
export interface measureStyle extends _measureStyle { constructor: { new(): measureStyle }; }
export var measureStyle: { new(): measureStyle };

/** The measure-text type is used for the text attribute of measure elements. It has at least one character. The implicit attribute of the measure element should be set to "yes" rather than setting the text attribute to an empty string. */
export type measureText = string;
type _measureText = Primitive._string;

/** The membrane type represents pictograms for membrane percussion instruments. */
export type membrane = ("bass drum" | "bass drum on side" | "bongos" | "Chinese tomtom" | "conga drum" | "cuica" | "goblet drum" | "Indo-American tomtom" | "Japanese tomtom" | "military drum" | "snare drum" | "snare drum snares off" | "tabla" | "tambourine" | "tenor drum" | "timbales" | "tomtom");
interface _membrane extends Primitive._string { content: membrane; }

/** The metal type represents pictograms for metal percussion instruments. The hi-hat value refers to a pictogram like Stone's high-hat cymbals but without the long vertical line at the bottom. */
export type metal = ("agogo" | "almglocken" | "bell" | "bell plate" | "bell tree" | "brake drum" | "cencerro" | "chain rattle" | "Chinese cymbal" | "cowbell" | "crash cymbals" | "crotale" | "cymbal tongs" | "domed gong" | "finger cymbals" | "flexatone" | "gong" | "hi-hat" | "high-hat cymbals" | "handbell" | "jaw harp" | "jingle bells" | "musical saw" | "shell bells" | "sistrum" | "sizzle cymbal" | "sleigh bells" | "suspended cymbal" | "tam tam" | "tam tam with beater" | "triangle" | "Vietnamese hat");
interface _metal extends Primitive._string { content: metal; }

/** The metronome type represents metronome marks and other metric relationships. The beat-unit group and per-minute element specify regular metronome marks. The metronome-note and metronome-relation elements allow for the specification of metric modulations and other metric relationships, such as swing tempo marks where two eighths are equated to a quarter note / eighth note triplet. Tied notes can be represented in both types of metronome marks by using the beat-unit-tied and metronome-tied elements. The parentheses attribute indicates whether or not to put the metronome mark in parentheses; its value is no if not specified. */
interface _metronome extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	id: string;
	justify: leftCenterright;
	parentheses: yesNo;
	relativeX: number;
	relativeY: number;
	valign: valign;
	/** The beat-unit element indicates the graphical note type to use in a metronome mark. */
	beatUnit: noteTypevalue[];
	/** The beat-unit-dot element is used to specify any augmentation dots for a metronome mark note. */
	beatUnitdot?: empty[];
	beatUnittied?: beatUnittied[];
	/** If the metronome-arrows element is present, it indicates that metric modulation arrows are displayed on both sides of the metronome mark. */
	metronomeArrows?: empty;
	metronomeNote: metronomeNote[];
	/** The metronome-relation element describes the relationship symbol that goes between the two sets of metronome-note elements. The currently allowed value is equals, but this may expand in future versions. If the element is empty, the equals value is used. */
	metronomeRelation?: string;
	perMinute: perMinute;
}
export interface metronome extends _metronome { constructor: { new(): metronome }; }
export var metronome: { new(): metronome };

/** The metronome-beam type works like the beam type in defining metric relationships, but does not include all the attributes available in the beam type. */
interface _metronomeBeam extends _beamValue {
	number: number;
}
export interface metronomeBeam extends _metronomeBeam { constructor: { new(): metronomeBeam }; }
export var metronomeBeam: { new(): metronomeBeam };

/** The metronome-note type defines the appearance of a note within a metric relationship mark. */
interface _metronomeNote extends BaseType {
	metronomeBeam?: metronomeBeam[];
	/** The metronome-dot element works like the dot element in defining metric relationships. */
	metronomeDot?: empty[];
	metronomeTied?: metronomeTied;
	metronomeTuplet?: metronomeTuplet;
	/** The metronome-type element works like the type element in defining metric relationships. */
	metronomeType: noteTypevalue;
}
export interface metronomeNote extends _metronomeNote { constructor: { new(): metronomeNote }; }
export var metronomeNote: { new(): metronomeNote };

/** The metronome-tied indicates the presence of a tie within a metric relationship mark. As with the tied element, both the start and stop of the tie should be specified, in this case within separate metronome-note elements. */
interface _metronomeTied extends BaseType {
	type: startStop;
}
export interface metronomeTied extends _metronomeTied { constructor: { new(): metronomeTied }; }
export var metronomeTied: { new(): metronomeTied };

/** The metronome-tuplet type uses the same element structure as the time-modification element along with some attributes from the tuplet element. */
interface _metronomeTuplet extends _timeModification {
	bracket: yesNo;
	showNumber: showTuplet;
	type: startStop;
}
export interface metronomeTuplet extends _metronomeTuplet { constructor: { new(): metronomeTuplet }; }
export var metronomeTuplet: { new(): metronomeTuplet };

/** The midi-16 type is used to express MIDI 1.0 values that range from 1 to 128. */
export type midi128 = number;
type _midi128 = Primitive._number;

/** The midi-16 type is used to express MIDI 1.0 values that range from 1 to 16. */
export type midi16 = number;
type _midi16 = Primitive._number;

/** The midi-16 type is used to express MIDI 1.0 values that range from 1 to 16,384. */
export type midi16384 = number;
type _midi16384 = Primitive._number;

/** The midi-device type corresponds to the DeviceName meta event in Standard MIDI Files. The optional port attribute is a number from 1 to 16 that can be used with the unofficial MIDI port (or cable) meta event. Unlike the DeviceName meta event, there can be multiple midi-device elements per MusicXML part starting in MusicXML 3.0. The optional id attribute refers to the score-instrument assigned to this device. If missing, the device assignment affects all score-instrument elements in the score-part. */
interface _midiDevice extends Primitive._string {
	id: string;
	port: number;
}
export interface midiDevice extends _midiDevice { constructor: { new(): midiDevice }; }
export var midiDevice: { new(): midiDevice };

/** The midi-instrument type defines MIDI 1.0 instrument playback. The midi-instrument element can be a part of either the score-instrument element at the start of a part, or the sound element within a part. The id attribute refers to the score-instrument affected by the change. */
interface _midiInstrument extends BaseType {
	id: string;
	/** The elevation and pan elements allow placing of sound in a 3-D space relative to the listener. Both are expressed in degrees ranging from -180 to 180. For elevation, 0 is level with the listener, 90 is directly above, and -90 is directly below. */
	elevation?: number;
	/** The midi-bank element specified a MIDI 1.0 bank number ranging from 1 to 16,384. */
	midiBank?: number;
	/** The midi-channel element specifies a MIDI 1.0 channel numbers ranging from 1 to 16. */
	midiChannel?: number;
	/** The midi-name element corresponds to a ProgramName meta-event within a Standard MIDI File. */
	midiName?: string;
	/** The midi-program element specifies a MIDI 1.0 program number ranging from 1 to 128. */
	midiProgram?: number;
	/** For unpitched instruments, the midi-unpitched element specifies a MIDI 1.0 note number ranging from 1 to 128. It is usually used with MIDI banks for percussion. Note that MIDI 1.0 note numbers are generally specified from 0 to 127 rather than the 1 to 128 numbering used in this element. */
	midiUnpitched?: number;
	/** The pan and elevation elements allow placing of sound in a 3-D space relative to the listener. Both are expressed in degrees ranging from -180 to 180. For pan, 0 is straight ahead, -90 is hard left, 90 is hard right, and -180 and 180 are directly behind the listener. */
	pan?: number;
	/** The volume element value is a percentage of the maximum ranging from 0 to 100, with decimal values allowed. This corresponds to a scaling value for the MIDI 1.0 channel volume controller. */
	volume?: number;
}
export interface midiInstrument extends _midiInstrument { constructor: { new(): midiInstrument }; }
export var midiInstrument: { new(): midiInstrument };

/** The millimeters type is a number representing millimeters. This is used in the scaling element to provide a default scaling from tenths to physical units. */
export type millimeters = number;
type _millimeters = Primitive._number;

/** If a program has other metadata not yet supported in the MusicXML format, it can go in the miscellaneous element. The miscellaneous type puts each separate part of metadata into its own miscellaneous-field type. */
interface _miscellaneous extends BaseType {
	miscellaneousField?: miscellaneousField[];
}
export interface miscellaneous extends _miscellaneous { constructor: { new(): miscellaneous }; }
export var miscellaneous: { new(): miscellaneous };

/** If a program has other metadata not yet supported in the MusicXML format, each type of metadata can go in a miscellaneous-field element. The required name attribute indicates the type of metadata the element content represents. */
interface _miscellaneousField extends Primitive._string {
	name: string;
}
export interface miscellaneousField extends _miscellaneousField { constructor: { new(): miscellaneousField }; }
export var miscellaneousField: { new(): miscellaneousField };

/** The mode type is used to specify major/minor and other mode distinctions. Valid mode values include major, minor, dorian, phrygian, lydian, mixolydian, aeolian, ionian, locrian, and none. */
export type mode = string;
type _mode = Primitive._string;

/** The mordent type is used for both represents the mordent sign with the vertical line and the inverted-mordent sign without the line. The long attribute is "no" by default. The approach and departure attributes are used for compound ornaments, indicating how the beginning and ending of the ornament look relative to the main part of the mordent. */
interface _mordent extends _emptyTrillsound {
	approach: aboveBelow;
	departure: aboveBelow;
	long: yesNo;
}
export interface mordent extends _mordent { constructor: { new(): mordent }; }
export var mordent: { new(): mordent };

/** The text of the multiple-rest type indicates the number of measures in the multiple rest. Multiple rests may use the 1-bar / 2-bar / 4-bar rest symbols, or a single shape. The use-symbols attribute indicates which to use; it is no if not specified. */
interface _multipleRest extends _positiveIntegerorempty {
	useSymbols: yesNo;
}
export interface multipleRest extends _multipleRest { constructor: { new(): multipleRest }; }
export var multipleRest: { new(): multipleRest };

/** The mute type represents muting for different instruments, including brass, winds, and strings. The on and off values are used for undifferentiated mutes. The remaining values represent specific mutes. */
export type mute = ("on" | "off" | "straight" | "cup" | "harmon-no-stem" | "harmon-stem" | "bucket" | "plunger" | "hat" | "solotone" | "practice" | "stop-mute" | "stop-hand" | "echo" | "palm");
interface _mute extends Primitive._string { content: mute; }

/** The name-display type is used for exact formatting of multi-font text in part and group names to the left of the system. The print-object attribute can be used to determine what, if anything, is printed at the start of each system. Enclosure for the display-text element is none by default. Language for the display-text element is Italian ("it") by default. */
interface _nameDisplay extends BaseType {
	printObject: yesNo;
	accidentalText?: accidentalText[];
	displayText?: formattedText[];
}
export interface nameDisplay extends _nameDisplay { constructor: { new(): nameDisplay }; }
export var nameDisplay: { new(): nameDisplay };

/** The non-arpeggiate type indicates that this note is at the top or bottom of a bracket indicating to not arpeggiate these notes. Since this does not involve playback, it is only used on the top or bottom notes, not on each note as for the arpeggiate type. */
interface _nonArpeggiate extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	id: string;
	number: number;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	type: topBottom;
}
export interface nonArpeggiate extends _nonArpeggiate { constructor: { new(): nonArpeggiate }; }
export var nonArpeggiate: { new(): nonArpeggiate };

/** The non-negative-decimal type specifies a non-negative decimal value. */
export type nonNegativedecimal = number;
type _nonNegativedecimal = Primitive._number;

/** Notations refer to musical notations, not XML notations. Multiple notations are allowed in order to represent multiple editorial levels. The print-object attribute, added in Version 3.0, allows notations to represent details of performance technique, such as fingerings, without having them appear in the score. */
interface _notations extends BaseType {
	id: string;
	printObject: yesNo;
	accidentalMark?: accidentalMark[];
	arpeggiate?: arpeggiate[];
	articulations?: articulations[];
	dynamics?: dynamics[];
	fermata?: fermata[];
	footnote?: formattedText;
	glissando?: glissando[];
	level?: level;
	nonArpeggiate?: nonArpeggiate[];
	ornaments?: ornaments[];
	otherNotation?: otherNotation[];
	slide?: slide[];
	slur?: slur[];
	technical?: technical[];
	tied?: tied[];
	tuplet?: tuplet[];
}
export interface notations extends _notations { constructor: { new(): notations }; }
export var notations: { new(): notations };

/** Notes are the most common type of MusicXML data. The MusicXML format keeps the MuseData distinction between elements used for sound information and elements used for notation information (e.g., tie is used for sound, tied for notation). Thus grace notes do not have a duration element. Cue notes have a duration element, as do forward elements, but no tie elements. Having these two types of information available can make interchange considerably easier, as some programs handle one type of information much more readily than the other.
  *
  * The print-leger attribute is used to indicate whether leger lines are printed. Notes without leger lines are used to indicate indeterminate high and low notes. By default, it is set to yes. If print-object is set to no, print-leger is interpreted to also be set to no if not present. This attribute is ignored for rests.
  *
  * The dynamics and end-dynamics attributes correspond to MIDI 1.0's Note On and Note Off velocities, respectively. They are expressed in terms of percentages of the default forte value (90 for MIDI 1.0).
  *
  * The attack and release attributes are used to alter the starting and stopping time of the note from when it would otherwise occur based on the flow of durations - information that is specific to a performance. They are expressed in terms of divisions, either positive or negative. A note that starts a tie should not have a release attribute, and a note that stops a tie should not have an attack attribute. The attack and release attributes are independent of each other. The attack attribute only changes the starting time of a note, and the release attribute only changes the stopping time of a note.
  *
  * If a note is played only particular times through a repeat, the time-only attribute shows which times to play the note.
  *
  * The pizzicato attribute is used when just this note is sounded pizzicato, vs. the pizzicato element which changes overall playback between pizzicato and arco. */
interface _note extends BaseType {
	attack: number;
	color: string;
	defaultX: number;
	defaultY: number;
	dynamics: number;
	endDynamics: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	id: string;
	pizzicato: yesNo;
	printDot: yesNo;
	printLeger: yesNo;
	printLyric: yesNo;
	printObject: yesNo;
	printSpacing: yesNo;
	relativeX: number;
	relativeY: number;
	release: number;
	timeOnly: string;
	accidental?: accidental;
	beam?: beam[];
	/** The chord element indicates that this note is an additional chord tone with the preceding note. The duration of this note can be no longer than the preceding note. In MuseData, a missing duration indicates the same length as the previous note, but the MusicXML format requires a duration for chord notes too. */
	chord?: empty[];
	cue: empty[];
	/** One dot element is used for each dot of prolongation. The placement element is used to specify whether the dot should appear above or below the staff line. It is ignored for notes that appear on a staff space. */
	dot?: emptyPlacement[];
	/** Duration is a positive number specified in division units. This is the intended duration vs. notated duration (for instance, swing eighths vs. even eighths, or differences in dotted notes in Baroque-era music). Differences in duration specific to an interpretation or performance should use the note element's attack and release attributes. */
	duration: number[];
	footnote?: formattedText;
	grace: grace;
	instrument?: instrument;
	level?: level;
	lyric?: lyric[];
	notations?: notations[];
	notehead?: notehead;
	noteheadText?: noteheadText;
	pitch: pitch[];
	play?: play;
	rest: rest[];
	/** Staff assignment is only needed for music notated on multiple staves. Used by both notes and directions. Staff values are numbers, with 1 referring to the top-most staff in a part. */
	staff?: number;
	stem?: stem;
	tie?: tie[];
	timeModification?: timeModification;
	type?: noteType;
	unpitched: unpitched[];
	voice?: string;
}
export interface note extends _note { constructor: { new(): note }; }
export var note: { new(): note };

/** The notehead type indicates shapes other than the open and closed ovals associated with note durations.
  *
  * The smufl attribute can be used to specify a particular notehead, allowing application interoperability without requiring every SMuFL glyph to have a MusicXML element equivalent. This attribute can be used either with the "other" value, or to refine a specific notehead value such as "cluster". Noteheads in the SMuFL "Note name noteheads" range (U+E150–U+E1AF) should not use the smufl attribute or the "other" value, but instead use the notehead-text element.
  *
  * For the enclosed shapes, the default is to be hollow for half notes and longer, and filled otherwise. The filled attribute can be set to change this if needed.
  *
  * If the parentheses attribute is set to yes, the notehead is parenthesized. It is no by default. */
interface _notehead extends _noteheadValue {
	color: string;
	filled: yesNo;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	parentheses: yesNo;
	smufl: string;
}
export interface notehead extends _notehead { constructor: { new(): notehead }; }
export var notehead: { new(): notehead };

/** The notehead-text type represents text that is displayed inside a notehead, as is done in some educational music. It is not needed for the numbers used in tablature or jianpu notation. The presence of a TAB or jianpu clefs is sufficient to indicate that numbers are used. The display-text and accidental-text elements allow display of fully formatted text and accidentals. */
interface _noteheadText extends BaseType {
	accidentalText: accidentalText[];
	displayText: formattedText[];
}
export interface noteheadText extends _noteheadText { constructor: { new(): noteheadText }; }
export var noteheadText: { new(): noteheadText };

/** The notehead-value type indicates shapes other than the open and closed ovals associated with note durations.
  *
  * The values do, re, mi, fa, fa up, so, la, and ti correspond to Aikin's 7-shape system.  The fa up shape is typically used with upstems; the fa shape is typically used with downstems or no stems.
  *
  * The arrow shapes differ from triangle and inverted triangle by being centered on the stem. Slashed and back slashed notes include both the normal notehead and a slash. The triangle shape has the tip of the triangle pointing up; the inverted triangle shape has the tip of the triangle pointing down. The left triangle shape is a right triangle with the hypotenuse facing up and to the left.
  *
  * The other notehead covers noteheads other than those listed here. It is usually used in combination with the smufl attribute to specify a particular SMuFL notehead. The smufl attribute may be used with any notehead value to help specify the appearance of symbols that share the same MusicXML semantics. Noteheads in the SMuFL "Note name noteheads" range (U+E150–U+E1AF) should not use the smufl attribute or the "other" value, but instead use the notehead-text element. */
export type noteheadValue = ("slash" | "triangle" | "diamond" | "square" | "cross" | "x" | "circle-x" | "inverted triangle" | "arrow down" | "arrow up" | "circled" | "slashed" | "back slashed" | "normal" | "cluster" | "circle dot" | "left triangle" | "rectangle" | "none" | "do" | "re" | "mi" | "fa" | "fa up" | "so" | "la" | "ti" | "other");
interface _noteheadValue extends Primitive._string { content: noteheadValue; }

/** The note-size type indicates the percentage of the regular note size to use for notes with a cue and large size as defined in the type element. The grace type is used for notes of cue size that that include a grace element. The cue type is used for all other notes with cue size, whether defined explicitly or implicitly via a cue element. The large type is used for notes of large size. The text content represent the numeric percentage. A value of 100 would be identical to the size of a regular note as defined by the music font. */
interface _noteSize extends _nonNegativedecimal {
	type: noteSizetype;
}
export interface noteSize extends _noteSize { constructor: { new(): noteSize }; }
export var noteSize: { new(): noteSize };

/** The note-size-type type indicates the type of note being defined by a note-size element. The grace-cue type is used for notes of grace-cue size. The grace type is used for notes of cue size that include a grace element. The cue type is used for all other notes with cue size, whether defined explicitly or implicitly via a cue element. The large type is used for notes of large size. */
export type noteSizetype = ("cue" | "grace" | "grace-cue" | "large");
interface _noteSizetype extends Primitive._string { content: noteSizetype; }

/** The note-type type indicates the graphic note type. Values range from 1024th to maxima. The size attribute indicates full, cue, grace-cue, or large size. The default is full for regular notes, grace-cue for notes that contain both grace and cue elements, and cue for notes that contain either a cue or a grace element, but not both. */
interface _noteType extends _noteTypevalue {
	size: symbolSize;
}
export interface noteType extends _noteType { constructor: { new(): noteType }; }
export var noteType: { new(): noteType };

/** The note-type type is used for the MusicXML type element and represents the graphic note type, from 1024th (shortest) to maxima (longest). */
export type noteTypevalue = ("1024th" | "512th" | "256th" | "128th" | "64th" | "32nd" | "16th" | "eighth" | "quarter" | "half" | "whole" | "breve" | "long" | "maxima");
interface _noteTypevalue extends Primitive._string { content: noteTypevalue; }

/** Slurs, tuplets, and many other features can be concurrent and overlapping within a single musical part. The number-level type distinguishes up to six concurrent objects of the same type. A reading program should be prepared to handle cases where the number-levels stop in an arbitrary order. Different numbers are needed when the features overlap in MusicXML document order. When a number-level value is optional, the value is 1 by default. */
export type numberLevel = number;
type _numberLevel = Primitive._number;

/** The number-of-lines type is used to specify the number of lines in text decoration attributes. */
export type numberOflines = number;
type _numberOflines = Primitive._number;

/** The number-or-normal values can be either a decimal number or the string "normal". This is used by the line-height and letter-spacing attributes. */
interface _numberOrnormal extends _string {}
export interface numberOrnormal extends _numberOrnormal { constructor: { new(): numberOrnormal }; }
export var numberOrnormal: { new(): numberOrnormal };

/** Octaves are represented by the numbers 0 to 9, where 4 indicates the octave started by middle C. */
export type octave = number;
type _octave = Primitive._number;

/** The octave shift type indicates where notes are shifted up or down from their true pitched values because of printing difficulty. Thus a treble clef line noted with 8va will be indicated with an octave-shift down from the pitch data indicated in the notes. A size of 8 indicates one octave; a size of 15 indicates two octaves. */
interface _octaveShift extends BaseType {
	color: string;
	dashLength: number;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	id: string;
	number: number;
	relativeX: number;
	relativeY: number;
	size: number;
	spaceLength: number;
	type: upDownstopcontinue;
}
export interface octaveShift extends _octaveShift { constructor: { new(): octaveShift }; }
export var octaveShift: { new(): octaveShift };

/** An offset is represented in terms of divisions, and indicates where the direction will appear relative to the current musical location. This affects the visual appearance of the direction. If the sound attribute is "yes", then the offset affects playback too. If the sound attribute is "no", then any sound associated with the direction takes effect at the current location. The sound attribute is "no" by default for compatibility with earlier versions of the MusicXML format. If an element within a direction includes a default-x attribute, the offset value will be ignored when determining the appearance of that element. */
interface _offset extends _divisions {
	sound: yesNo;
}
export interface offset extends _offset { constructor: { new(): offset }; }
export var offset: { new(): offset };

/** The on-off type is used for notation elements such as string mutes. */
export type onOff = ("on" | "off");
interface _onOff extends Primitive._string { content: onOff; }

/** The opus type represents a link to a MusicXML opus document that composes multiple MusicXML scores into a collection. */
interface _opus extends BaseType {
	actuate: xlink.ActuateType;
	href: string;
	role: string;
	show: xlink.ShowType;
	title: string;
	type: xlink.TypeType;
}
export interface opus extends _opus { constructor: { new(): opus }; }
export var opus: { new(): opus };

/** Ornaments can be any of several types, followed optionally by accidentals. The accidental-mark element's content is represented the same as an accidental element, but with a different name to reflect the different musical meaning. */
interface _ornaments extends BaseType {
	id: string;
	accidentalMark?: accidentalMark[];
	/** The delayed-inverted-turn element indicates an inverted turn that is delayed until the end of the current note. */
	delayedInvertedturn?: horizontalTurn[];
	/** The delayed-turn element indicates a normal turn that is delayed until the end of the current note. */
	delayedTurn?: horizontalTurn[];
	/** The haydn element represents the Haydn ornament. This is defined in SMuFL as ornamentHaydn. */
	haydn?: emptyTrillsound[];
	/** The inverted-mordent element represents the sign without the vertical line. The choice of which mordent is inverted differs between MusicXML and SMuFL. The long attribute is "no" by default. */
	invertedMordent?: mordent[];
	/** The inverted-turn element has the shape which goes down and then up. */
	invertedTurn?: horizontalTurn[];
	/** The inverted-vertical-turn element has the turn symbol shape arranged vertically going from upper right to lower left. */
	invertedVerticalturn?: emptyTrillsound[];
	/** The mordent element represents the sign with the vertical line. The choice of which mordent sign is inverted differs between MusicXML and SMuFL. The long attribute is "no" by default. */
	mordent?: mordent[];
	/** The other-ornament element is used to define any ornaments not yet in the MusicXML format. The smufl attribute can be used to specify a particular ornament, allowing application interoperability without requiring every SMuFL ornament to have a MusicXML element equivalent. Using the other-ornament element without the smufl attribute allows for extended representation, though without application interoperability. */
	otherOrnament?: otherPlacementtext[];
	/** The name for this ornament is based on the German, to avoid confusion with the more common slide element defined earlier. */
	schleifer?: emptyPlacement[];
	/** The shake element has a similar appearance to an inverted-mordent element. */
	shake?: emptyTrillsound[];
	tremolo?: tremolo[];
	/** The trill-mark element represents the trill-mark symbol. */
	trillMark?: emptyTrillsound[];
	/** The turn element is the normal turn shape which goes up then down. */
	turn?: horizontalTurn[];
	/** The vertical-turn element has the turn symbol shape arranged vertically going from upper left to lower right. */
	verticalTurn?: emptyTrillsound[];
	wavyLine?: wavyLine[];
}
export interface ornaments extends _ornaments { constructor: { new(): ornaments }; }
export var ornaments: { new(): ornaments };

/** The other-appearance type is used to define any graphical settings not yet in the current version of the MusicXML format. This allows extended representation, though without application interoperability. */
interface _otherAppearance extends Primitive._string {
	type: string;
}
export interface otherAppearance extends _otherAppearance { constructor: { new(): otherAppearance }; }
export var otherAppearance: { new(): otherAppearance };

/** The other-direction type is used to define any direction symbols not yet in the MusicXML format. The smufl attribute can be used to specify a particular direction symbol, allowing application interoperability without requiring every SMuFL glyph to have a MusicXML element equivalent. Using the other-direction type without the smufl attribute allows for extended representation, though without application interoperability. */
interface _otherDirection extends Primitive._string {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	id: string;
	printObject: yesNo;
	relativeX: number;
	relativeY: number;
	smufl: string;
	valign: valign;
}
export interface otherDirection extends _otherDirection { constructor: { new(): otherDirection }; }
export var otherDirection: { new(): otherDirection };

/** The other-notation type is used to define any notations not yet in the MusicXML format. It handles notations where more specific extension elements such as other-dynamics and other-technical are not appropriate. The smufl attribute can be used to specify a particular notation, allowing application interoperability without requiring every SMuFL glyph to have a MusicXML element equivalent. Using the other-notation type without the smufl attribute allows for extended representation, though without application interoperability. */
interface _otherNotation extends Primitive._string {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	id: string;
	number: number;
	placement: aboveBelow;
	printObject: yesNo;
	relativeX: number;
	relativeY: number;
	smufl: string;
	type: startStopsingle;
}
export interface otherNotation extends _otherNotation { constructor: { new(): otherNotation }; }
export var otherNotation: { new(): otherNotation };

/** The other-placement-text type represents a text element with print-style, placement, and smufl attribute groups. This type is used by MusicXML notation extension elements to allow specification of specific SMuFL glyphs without needed to add every glyph as a MusicXML element. */
interface _otherPlacementtext extends Primitive._string {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	smufl: string;
}
export interface otherPlacementtext extends _otherPlacementtext { constructor: { new(): otherPlacementtext }; }
export var otherPlacementtext: { new(): otherPlacementtext };

/** The other-play element represents other types of playback. The required type attribute indicates the type of playback to which the element content applies. */
interface _otherPlay extends Primitive._string {
	type: string;
}
export interface otherPlay extends _otherPlay { constructor: { new(): otherPlay }; }
export var otherPlay: { new(): otherPlay };

/** The other-text type represents a text element with a smufl attribute group. This type is used by MusicXML direction extension elements to allow specification of specific SMuFL glyphs without needed to add every glyph as a MusicXML element. */
interface _otherText extends Primitive._string {
	smufl: string;
}
export interface otherText extends _otherText { constructor: { new(): otherText }; }
export var otherText: { new(): otherText };

/** The over-under type is used to indicate whether the tips of curved lines such as slurs and ties are overhand (tips down) or underhand (tips up). */
export type overUnder = ("over" | "under");
interface _overUnder extends Primitive._string { content: overUnder; }

/** Page layout can be defined both in score-wide defaults and in the print element. Page margins are specified either for both even and odd pages, or via separate odd and even page number values. The type is not needed when used as part of a print element. If omitted when used in the defaults element, "both" is the default. */
interface _pageLayout extends BaseType {
	pageHeight?: number;
	pageMargins?: pageMargins[];
	pageWidth?: number;
}
export interface pageLayout extends _pageLayout { constructor: { new(): pageLayout }; }
export var pageLayout: { new(): pageLayout };

/** Page margins are specified either for both even and odd pages, or via separate odd and even page number values. The type attribute is not needed when used as part of a print element. If omitted when the page-margins type is used in the defaults element, "both" is the default value. */
interface _pageMargins extends BaseType {
	type: marginType;
	bottomMargin: number;
	leftMargin: number;
	rightMargin: number;
	topMargin: number;
}
export interface pageMargins extends _pageMargins { constructor: { new(): pageMargins }; }
export var pageMargins: { new(): pageMargins };

/** The part-group element indicates groupings of parts in the score, usually indicated by braces and brackets. Braces that are used for multi-staff parts should be defined in the attributes element for that part. The part-group start element appears before the first score-part in the group. The part-group stop element appears after the last score-part in the group.
  *
  * The number attribute is used to distinguish overlapping and nested part-groups, not the sequence of groups. As with parts, groups can have a name and abbreviation. Values for the child elements are ignored at the stop of a group.
  *
  * A part-group element is not needed for a single multi-staff part. By default, multi-staff parts include a brace symbol and (if appropriate given the bar-style) common barlines. The symbol formatting for a multi-staff part can be more fully specified using the part-symbol element. */
interface _partGroup extends BaseType {
	number: string;
	type: startStop;
	footnote?: formattedText;
	groupAbbreviation?: groupName;
	/** Formatting specified in the group-abbreviation-display element overrides formatting specified in the group-abbreviation element. */
	groupAbbreviationdisplay?: nameDisplay;
	groupBarline?: groupBarline;
	groupName?: groupName;
	/** Formatting specified in the group-name-display element overrides formatting specified in the group-name element. */
	groupNamedisplay?: nameDisplay;
	groupSymbol?: groupSymbol;
	/** The group-time element indicates that the displayed time signatures should stretch across all parts and staves in the group. */
	groupTime?: empty;
	level?: level;
}
export interface partGroup extends _partGroup { constructor: { new(): partGroup }; }
export var partGroup: { new(): partGroup };

/** The part-list identifies the different musical parts in this movement. Each part has an ID that is used later within the musical data. Since parts may be encoded separately and combined later, identification elements are present at both the score and score-part levels. There must be at least one score-part, combined as desired with part-group elements that indicate braces and brackets. Parts are ordered from top to bottom in a score based on the order in which they appear in the part-list. */
interface _partList extends BaseType {
	partGroup?: partGroup[];
	/** Each MusicXML part corresponds to a track in a Standard MIDI Format 1 file. The score-instrument elements are used when there are multiple instruments per track. The midi-device element is used to make a MIDI device or port assignment for the given track. Initial midi-instrument assignments may be made here as well. */
	scorePart: scorePart[];
}
export interface partList extends _partList { constructor: { new(): partList }; }
export var partList: { new(): partList };

/** The part-name type describes the name or abbreviation of a score-part element. Formatting attributes for the part-name element are deprecated in Version 2.0 in favor of the new part-name-display and part-abbreviation-display elements. */
interface _partName extends Primitive._string {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	justify: leftCenterright;
	printObject: yesNo;
	relativeX: number;
	relativeY: number;
}
export interface partName extends _partName { constructor: { new(): partName }; }
export var partName: { new(): partName };

/** The part-symbol type indicates how a symbol for a multi-staff part is indicated in the score; brace is the default value. The top-staff and bottom-staff elements are used when the brace does not extend across the entire part. For example, in a 3-staff organ part, the top-staff will typically be 1 for the right hand, while the bottom-staff will typically be 2 for the left hand. Staff 3 for the pedals is usually outside the brace. */
interface _partSymbol extends _groupSymbolvalue {
	bottomStaff: number;
	color: string;
	defaultX: number;
	defaultY: number;
	relativeX: number;
	relativeY: number;
	topStaff: number;
}
export interface partSymbol extends _partSymbol { constructor: { new(): partSymbol }; }
export var partSymbol: { new(): partSymbol };

/** The pedal type represents piano pedal marks. In MusicXML 3.1 this includes sostenuto as well as damper pedal marks. The line attribute is yes if pedal lines are used. The sign attribute is yes if Ped, Sost, and * signs are used. For MusicXML 2.0 compatibility, the sign attribute is yes by default if the line attribute is no, and is no by default if the line attribute is yes. If the sign attribute is set to yes and the type is start or sostenuto, the abbreviated attribute is yes if the short P and S signs are used, and no if the full Ped and Sost signs are used. It is no by default. Otherwise the abbreviated attribute is ignored.
  *
  * The change and continue types are used when the line attribute is yes. The change type indicates a pedal lift and retake indicated with an inverted V marking. The continue type allows more precise formatting across system breaks and for more complex pedaling lines. The alignment attributes are ignored if the line attribute is yes. */
interface _pedal extends BaseType {
	abbreviated: yesNo;
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	id: string;
	line: yesNo;
	number: number;
	relativeX: number;
	relativeY: number;
	sign: yesNo;
	type: pedalType;
	valign: valign;
}
export interface pedal extends _pedal { constructor: { new(): pedal }; }
export var pedal: { new(): pedal };

/** The pedal-tuning type specifies the tuning of a single harp pedal. */
interface _pedalTuning extends BaseType {
	/** The pedal-alter element defines the chromatic alteration for a single harp pedal. */
	pedalAlter: number;
	/** The pedal-step element defines the pitch step for a single harp pedal. */
	pedalStep: step;
}
export interface pedalTuning extends _pedalTuning { constructor: { new(): pedalTuning }; }
export var pedalTuning: { new(): pedalTuning };

/** The pedal-type simple type is used to distinguish types of pedal directions. The start value indicates the start of a damper pedal, while the sostenuto value indicates the start of a sostenuto pedal. The change, continue, and stop values can be used with either the damper or sostenuto pedal. The soft pedal is not included here because there is no special symbol or graphic used for it beyond what can be specified with words and bracket elements. */
export type pedalType = ("start" | "stop" | "sostenuto" | "change" | "continue");
interface _pedalType extends Primitive._string { content: pedalType; }

/** The percent type specifies a percentage from 0 to 100. */
export type percent = number;
type _percent = Primitive._number;

/** The percussion element is used to define percussion pictogram symbols. Definitions for these symbols can be found in Kurt Stone's "Music Notation in the Twentieth Century" on pages 206-212 and 223. Some values are added to these based on how usage has evolved in the 30 years since Stone's book was published. */
interface _percussion extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	enclosure: enclosureShape;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	id: string;
	relativeX: number;
	relativeY: number;
	valign: valign;
	beater: beater;
	effect: effect;
	glass: glass;
	membrane: membrane;
	metal: metal;
	otherPercussion: otherText;
	pitched: pitched;
	stick: stick;
	stickLocation: stickLocation;
	timpani: empty;
	wood: wood;
}
export interface percussion extends _percussion { constructor: { new(): percussion }; }
export var percussion: { new(): percussion };

/** The per-minute type can be a number, or a text description including numbers. If a font is specified, it overrides the font specified for the overall metronome element. This allows separate specification of a music font for the beat-unit and a text font for the numeric value, in cases where a single metronome font is not used. */
interface _perMinute extends Primitive._string {
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
}
export interface perMinute extends _perMinute { constructor: { new(): perMinute }; }
export var perMinute: { new(): perMinute };

/** Pitch is represented as a combination of the step of the diatonic scale, the chromatic alteration, and the octave. */
interface _pitch extends BaseType {
	alter?: number;
	octave: number;
	step: step;
}
export interface pitch extends _pitch { constructor: { new(): pitch }; }
export var pitch: { new(): pitch };

/** The pitched-value type represents pictograms for pitched percussion instruments. The smufl attribute is used to distinguish different SMuFL glyphs for a particular pictogram within the tuned mallet percussion pictograms range. */
interface _pitched extends _pitchedValue {
	smufl: string;
}
export interface pitched extends _pitched { constructor: { new(): pitched }; }
export var pitched: { new(): pitched };

/** The pitched-value type represents pictograms for pitched percussion instruments. The chimes and tubular chimes values distinguish the single-line and double-line versions of the pictogram. */
export type pitchedValue = ("celesta" | "chimes" | "glockenspiel" | "lithophone" | "mallet" | "marimba" | "steel drums" | "tubaphone" | "tubular chimes" | "vibraphone" | "xylophone");
interface _pitchedValue extends Primitive._string { content: pitchedValue; }

/** The placement-text type represents a text element with print-style and placement attribute groups. */
interface _placementText extends Primitive._string {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
}
export interface placementText extends _placementText { constructor: { new(): placementText }; }
export var placementText: { new(): placementText };

/** The play type, new in Version 3.0, specifies playback techniques to be used in conjunction with the instrument-sound element. When used as part of a sound element, it applies to all notes going forward in score order. In multi-instrument parts, the affected instrument should be specified using the id attribute. When used as part of a note element, it applies to the current note only. */
interface _play extends BaseType {
	id: string;
	/** The ipa element represents International Phonetic Alphabet (IPA) sounds for vocal music. String content is limited to IPA 2005 symbols represented in Unicode 6.0. */
	ipa?: string[];
	mute?: mute[];
	otherPlay?: otherPlay[];
	semiPitched?: semiPitched[];
}
export interface play extends _play { constructor: { new(): play }; }
export var play: { new(): play };

/** The positive-decimal type specifies a positive decimal value. */
export type positiveDecimal = number;
type _positiveDecimal = Primitive._number;

/** The positive-divisions type restricts divisions values to positive numbers. */
export type positiveDivisions = number;
type _positiveDivisions = _divisions;

/** The positive-integer-or-empty values can be either a positive integer or an empty string. */
interface _positiveIntegerorempty extends _string {}
export interface positiveIntegerorempty extends _positiveIntegerorempty { constructor: { new(): positiveIntegerorempty }; }
export var positiveIntegerorempty: { new(): positiveIntegerorempty };

/** The principal-voice element represents principal and secondary voices in a score, either for analysis or for square bracket symbols that appear in a score. The symbol attribute indicates the type of symbol used at the start of the principal-voice. The content of the principal-voice element is used for analysis and may be any text value. When used for analysis separate from any printed score markings, the symbol attribute should be set to "none". */
interface _principalVoice extends Primitive._string {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	id: string;
	relativeX: number;
	relativeY: number;
	symbol: principalVoicesymbol;
	type: startStop;
	valign: valign;
}
export interface principalVoice extends _principalVoice { constructor: { new(): principalVoice }; }
export var principalVoice: { new(): principalVoice };

/** The principal-voice-symbol type represents the type of symbol used to indicate the start of a principal or secondary voice. The "plain" value represents a plain square bracket. The value of "none" is used for analysis markup when the principal-voice element does not have a corresponding appearance in the score. */
export type principalVoicesymbol = ("Hauptstimme" | "Nebenstimme" | "plain" | "none");
interface _principalVoicesymbol extends Primitive._string { content: principalVoicesymbol; }

/** The print type contains general printing parameters, including the layout elements defined in the layout.mod file. The part-name-display and part-abbreviation-display elements used in the score.mod file may also be used here to change how a part name or abbreviation is displayed over the course of a piece. They take effect when the current measure or a succeeding measure starts a new system.
  *
  * Layout elements in a print statement only apply to the current page, system, staff, or measure. Music that follows continues to take the default values from the layout included in the defaults element. */
interface _print extends BaseType {
	blankPage: number;
	id: string;
	newPage: yesNo;
	newSystem: yesNo;
	pageNumber: string;
	staffSpacing: number;
	measureLayout?: measureLayout;
	measureNumbering?: measureNumbering;
	pageLayout?: pageLayout;
	partAbbreviationdisplay?: nameDisplay;
	partNamedisplay?: nameDisplay;
	staffLayout?: staffLayout[];
	systemLayout?: systemLayout;
}
export interface print extends _print { constructor: { new(): print }; }
export var print: { new(): print };

/** The repeat type represents repeat marks. The start of the repeat has a forward direction while the end of the repeat has a backward direction. Backward repeats that are not part of an ending can use the times attribute to indicate the number of times the repeated section is played. */
interface _repeat extends BaseType {
	direction: backwardForward;
	times: number;
	winged: winged;
}
export interface repeat extends _repeat { constructor: { new(): repeat }; }
export var repeat: { new(): repeat };

/** The rest element indicates notated rests or silences. Rest elements are usually empty, but placement on the staff can be specified using display-step and display-octave elements. If the measure attribute is set to yes, this indicates this is a complete measure rest. */
interface _rest extends BaseType {
	measure: yesNo;
	displayOctave?: number;
	displayStep?: step;
}
export interface rest extends _rest { constructor: { new(): rest }; }
export var rest: { new(): rest };

/** The right-left-middle type is used to specify barline location. */
export type rightLeftmiddle = ("right" | "left" | "middle");
interface _rightLeftmiddle extends Primitive._string { content: rightLeftmiddle; }

/** The root type indicates a pitch like C, D, E vs. a function indication like I, II, III. It is used with chord symbols in popular music. The root element has a root-step and optional root-alter element similar to the step and alter elements, but renamed to distinguish the different musical meanings. */
interface _root extends BaseType {
	rootAlter?: rootAlter;
	rootStep: rootStep;
}
export interface root extends _root { constructor: { new(): root }; }
export var root: { new(): root };

/** The root-alter type represents the chromatic alteration of the root of the current chord within the harmony element. In some chord styles, the text for the root-step element may include root-alter information. In that case, the print-object attribute of the root-alter element can be set to no. The location attribute indicates whether the alteration should appear to the left or the right of the root-step; it is right by default. */
interface _rootAlter extends _semitones {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	location: leftRight;
	printObject: yesNo;
	relativeX: number;
	relativeY: number;
}
export interface rootAlter extends _rootAlter { constructor: { new(): rootAlter }; }
export var rootAlter: { new(): rootAlter };

/** The root-step type represents the pitch step of the root of the current chord within the harmony element. The text attribute indicates how the root should appear in a score if not using the element contents. */
interface _rootStep extends _step {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	relativeX: number;
	relativeY: number;
	text: string;
}
export interface rootStep extends _rootStep { constructor: { new(): rootStep }; }
export var rootStep: { new(): rootStep };

/** The rotation-degrees type specifies rotation, pan, and elevation values in degrees. Values range from -180 to 180. */
export type rotationDegrees = number;
type _rotationDegrees = Primitive._number;

/** Margins, page sizes, and distances are all measured in tenths to keep MusicXML data in a consistent coordinate system as much as possible. The translation to absolute units is done with the scaling type, which specifies how many millimeters are equal to how many tenths. For a staff height of 7 mm, millimeters would be set to 7 while tenths is set to 40. The ability to set a formula rather than a single scaling factor helps avoid roundoff errors. */
interface _scaling extends BaseType {
	millimeters: number;
	tenths: number;
}
export interface scaling extends _scaling { constructor: { new(): scaling }; }
export var scaling: { new(): scaling };

/** Scordatura string tunings are represented by a series of accord elements, similar to the staff-tuning elements. Strings are numbered from high to low. */
interface _scordatura extends BaseType {
	id: string;
	accord: accord[];
}
export interface scordatura extends _scordatura { constructor: { new(): scordatura }; }
export var scordatura: { new(): scordatura };

/** The score-instrument type represents a single instrument within a score-part. As with the score-part type, each score-instrument has a required ID attribute, a name, and an optional abbreviation.
  *
  * A score-instrument type is also required if the score specifies MIDI 1.0 channels, banks, or programs. An initial midi-instrument assignment can also be made here. MusicXML software should be able to automatically assign reasonable channels and instruments without these elements in simple cases, such as where part names match General MIDI instrument names. */
interface _scoreInstrument extends BaseType {
	id: string;
	/** The ensemble element was added in Version 2.0. It is present if performance is intended by an ensemble such as an orchestral section. The text of the ensemble element contains the size of the section, or is empty if the ensemble size is not specified. */
	ensemble?: positiveIntegerorempty;
	/** The optional instrument-abbreviation element is typically used within a software application, rather than appearing on the printed page of a score. */
	instrumentAbbreviation?: string;
	/** The instrument-name element is typically used within a software application, rather than appearing on the printed page of a score. */
	instrumentName: string;
	/** The instrument-sound element describes the default timbre of the score-instrument. This description is independent of a particular virtual or MIDI instrument specification and allows playback to be shared more easily between applications and libraries. */
	instrumentSound?: string;
	/** The solo element was added in Version 2.0. It is present if performance is intended by a solo instrument. */
	solo?: empty;
	virtualInstrument?: virtualInstrument;
}
export interface scoreInstrument extends _scoreInstrument { constructor: { new(): scoreInstrument }; }
export var scoreInstrument: { new(): scoreInstrument };

/** Each MusicXML part corresponds to a track in a Standard MIDI Format 1 file. The score-instrument elements are used when there are multiple instruments per track. The midi-device element is used to make a MIDI device or port assignment for the given track or specific MIDI instruments. Initial midi-instrument assignments may be made here as well. */
interface _scorePart extends BaseType {
	id: string;
	/** The group element allows the use of different versions of the part for different purposes. Typical values include score, parts, sound, and data. Ordering information that is directly encoded in MuseData can be derived from the ordering within a MusicXML score or opus. */
	group?: string[];
	identification?: identification;
	midiDevice?: midiDevice[];
	midiInstrument?: midiInstrument[];
	partAbbreviation?: partName;
	partAbbreviationdisplay?: nameDisplay;
	partName: partName;
	partNamedisplay?: nameDisplay;
	scoreInstrument?: scoreInstrument[];
}
export interface scorePart extends _scorePart { constructor: { new(): scorePart }; }
export var scorePart: { new(): scorePart };

interface _ScorePartwiseType extends BaseType {
	version: string;
	credit?: credit[];
	defaults?: defaults;
	identification?: identification;
	/** The movement-number element specifies the number of a movement. */
	movementNumber?: string;
	/** The movement-title element specifies the title of a movement, not including its number. */
	movementTitle?: string;
	part: ScorePartwiseTypePartType[];
	partList: partList;
	work?: work;
}
interface ScorePartwiseType extends _ScorePartwiseType { constructor: { new(): ScorePartwiseType }; }

interface _ScorePartwiseTypePartType extends BaseType {
	id: string;
	measure: ScorePartwiseTypePartTypeMeasureType[];
}
interface ScorePartwiseTypePartType extends _ScorePartwiseTypePartType { constructor: { new(): ScorePartwiseTypePartType }; }

interface _ScorePartwiseTypePartTypeMeasureType extends BaseType {
	id: string;
	implicit: yesNo;
	nonControlling: yesNo;
	number: string;
	text: string;
	width: number;
	attributes?: attributes[];
	backup?: backup[];
	barline?: barline[];
	bookmark?: bookmark[];
	direction?: direction[];
	figuredBass?: figuredBass[];
	forward?: forward[];
	grouping?: grouping[];
	harmony?: harmony[];
	link?: link[];
	note?: note[];
	print?: print[];
	sound?: sound[];
}
interface ScorePartwiseTypePartTypeMeasureType extends _ScorePartwiseTypePartTypeMeasureType { constructor: { new(): ScorePartwiseTypePartTypeMeasureType }; }

interface _ScoreTimewiseType extends BaseType {
	version: string;
	credit?: credit[];
	defaults?: defaults;
	identification?: identification;
	measure: ScoreTimewiseTypeMeasureType[];
	/** The movement-number element specifies the number of a movement. */
	movementNumber?: string;
	/** The movement-title element specifies the title of a movement, not including its number. */
	movementTitle?: string;
	partList: partList;
	work?: work;
}
interface ScoreTimewiseType extends _ScoreTimewiseType { constructor: { new(): ScoreTimewiseType }; }

interface _ScoreTimewiseTypeMeasureType extends BaseType {
	id: string;
	implicit: yesNo;
	nonControlling: yesNo;
	number: string;
	text: string;
	width: number;
	part: ScoreTimewiseTypeMeasureTypePartType[];
}
interface ScoreTimewiseTypeMeasureType extends _ScoreTimewiseTypeMeasureType { constructor: { new(): ScoreTimewiseTypeMeasureType }; }

interface _ScoreTimewiseTypeMeasureTypePartType extends BaseType {
	id: string;
	attributes?: attributes[];
	backup?: backup[];
	barline?: barline[];
	bookmark?: bookmark[];
	direction?: direction[];
	figuredBass?: figuredBass[];
	forward?: forward[];
	grouping?: grouping[];
	harmony?: harmony[];
	link?: link[];
	note?: note[];
	print?: print[];
	sound?: sound[];
}
interface ScoreTimewiseTypeMeasureTypePartType extends _ScoreTimewiseTypeMeasureTypePartType { constructor: { new(): ScoreTimewiseTypeMeasureTypePartType }; }

/** The segno type is the visual indicator of a segno sign. The exact glyph can be specified with the smufl attribute. A sound element is also needed to guide playback applications reliably. */
interface _segno extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	id: string;
	relativeX: number;
	relativeY: number;
	smufl: string;
	valign: valign;
}
export interface segno extends _segno { constructor: { new(): segno }; }
export var segno: { new(): segno };

/** The semi-pitched type represents categories of indefinite pitch for percussion instruments. */
export type semiPitched = ("high" | "medium-high" | "medium" | "medium-low" | "low" | "very-low");
interface _semiPitched extends Primitive._string { content: semiPitched; }

/** The semitones type is a number representing semitones, used for chromatic alteration. A value of -1 corresponds to a flat and a value of 1 to a sharp. Decimal values like 0.5 (quarter tone sharp) are used for microtones. */
export type semitones = number;
type _semitones = Primitive._number;

/** The show-frets type indicates whether to show tablature frets as numbers (0, 1, 2) or letters (a, b, c). The default choice is numbers. */
export type showFrets = ("numbers" | "letters");
interface _showFrets extends Primitive._string { content: showFrets; }

/** The show-tuplet type indicates whether to show a part of a tuplet relating to the tuplet-actual element, both the tuplet-actual and tuplet-normal elements, or neither. */
export type showTuplet = ("actual" | "both" | "none");
interface _showTuplet extends Primitive._string { content: showTuplet; }

/** The slash type is used to indicate that slash notation is to be used. If the slash is on every beat, use-stems is no (the default). To indicate rhythms but not pitches, use-stems is set to yes. The type attribute indicates whether this is the start or stop of a slash notation style. The use-dots attribute works as for the beat-repeat element, and only has effect if use-stems is no. */
interface _slash extends BaseType {
	type: startStop;
	useDots: yesNo;
	useStems: yesNo;
	/** The except-voice element is used to specify a combination of slash notation and regular notation. Any note elements that are in voices specified by the except-voice elements are displayed in normal notation, in addition to the slash notation that is always displayed. */
	exceptVoice?: string[];
	/** The slash-dot element is used to specify any augmentation dots in the note type used to display repetition marks. */
	slashDot?: empty[];
	/** The slash-type element indicates the graphical note type to use for the display of repetition marks. */
	slashType?: noteTypevalue;
}
export interface slash extends _slash { constructor: { new(): slash }; }
export var slash: { new(): slash };

/** Glissando and slide types both indicate rapidly moving from one pitch to the other so that individual notes are not discerned. The distinction is similar to that between NIFF's glissando and portamento elements. A slide is continuous between two notes and defaults to a solid line. The optional text for a is printed alongside the line. */
interface _slide extends Primitive._string {
	accelerate: yesNo;
	beats: number;
	color: string;
	dashLength: number;
	defaultX: number;
	defaultY: number;
	firstBeat: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	id: string;
	lastBeat: number;
	lineType: lineType;
	number: number;
	relativeX: number;
	relativeY: number;
	spaceLength: number;
	type: startStop;
}
export interface slide extends _slide { constructor: { new(): slide }; }
export var slide: { new(): slide };

/** Slur types are empty. Most slurs are represented with two elements: one with a start type, and one with a stop type. Slurs can add more elements using a continue type. This is typically used to specify the formatting of cross-system slurs, or to specify the shape of very complex slurs. */
interface _slur extends BaseType {
	bezierOffset: number;
	bezierOffset2: number;
	bezierX: number;
	bezierX2: number;
	bezierY: number;
	bezierY2: number;
	color: string;
	dashLength: number;
	defaultX: number;
	defaultY: number;
	id: string;
	lineType: lineType;
	number: number;
	orientation: overUnder;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	spaceLength: number;
	type: startStopcontinue;
}
export interface slur extends _slur { constructor: { new(): slur }; }
export var slur: { new(): slur };

/** The smufl-accidental-glyph-name type is used to reference a specific Standard Music Font Layout (SMuFL) accidental character. The value is a SMuFL canonical glyph name that starts with acc. */
export type smuflAccidentalglyphname = string;
type _smuflAccidentalglyphname = _smuflGlyphname;

/** The smufl-coda-glyph-name type is used to reference a specific Standard Music Font Layout (SMuFL) coda character. The value is a SMuFL canonical glyph name that starts with coda. */
export type smuflCodaglyphname = string;
type _smuflCodaglyphname = _smuflGlyphname;

/** The smufl-glyph-name type is used for attributes that reference a specific Standard Music Font Layout (SMuFL) character. The value is a SMuFL canonical glyph name, not a code point. For instance, the value for a standard piano pedal mark would be keyboardPedalPed, not U+E650. */
export type smuflGlyphname = string;
type _smuflGlyphname = Primitive._string;

/** The smufl-lyrics-glyph-name type is used to reference a specific Standard Music Font Layout (SMuFL) lyrics elision character. The value is a SMuFL canonical glyph name that starts with lyrics. */
export type smuflLyricsglyphname = string;
type _smuflLyricsglyphname = _smuflGlyphname;

/** The smufl-pictogram-glyph-name type is used to reference a specific Standard Music Font Layout (SMuFL) percussion pictogram character. The value is a SMuFL canonical glyph name that starts with pict. */
export type smuflPictogramglyphname = string;
type _smuflPictogramglyphname = _smuflGlyphname;

/** The smufl-segno-glyph-name type is used to reference a specific Standard Music Font Layout (SMuFL) segno character. The value is a SMuFL canonical glyph name that starts with segno. */
export type smuflSegnoglyphname = string;
type _smuflSegnoglyphname = _smuflGlyphname;

/** The sound element contains general playback parameters. They can stand alone within a part/measure, or be a component element within a direction.
  *
  * Tempo is expressed in quarter notes per minute. If 0, the sound-generating program should prompt the user at the time of compiling a sound (MIDI) file.
  *
  * Dynamics (or MIDI velocity) are expressed as a percentage of the default forte value (90 for MIDI 1.0).
  *
  * Dacapo indicates to go back to the beginning of the movement. When used it always has the value "yes".
  *
  * Segno and dalsegno are used for backwards jumps to a segno sign; coda and tocoda are used for forward jumps to a coda sign. If there are multiple jumps, the value of these parameters can be used to name and distinguish them. If segno or coda is used, the divisions attribute can also be used to indicate the number of divisions per quarter note. Otherwise sound and MIDI generating programs may have to recompute this.
  *
  * By default, a dalsegno or dacapo attribute indicates that the jump should occur the first time through, while a tocoda attribute indicates the jump should occur the second time through. The time that jumps occur can be changed by using the time-only attribute.
  *
  * Forward-repeat is used when a forward repeat sign is implied, and usually follows a bar line. When used it always has the value of "yes".
  *
  * The fine attribute follows the final note or rest in a movement with a da capo or dal segno direction. If numeric, the value represents the actual duration of the final note or rest, which can be ambiguous in written notation and different among parts and voices. The value may also be "yes" to indicate no change to the final duration.
  *
  * If the sound element applies only particular times through a repeat, the time-only attribute indicates which times to apply the sound element.
  *
  * Pizzicato in a sound element effects all following notes. Yes indicates pizzicato, no indicates arco.
  *
  * The pan and elevation attributes are deprecated in Version 2.0. The pan and elevation elements in the midi-instrument element should be used instead. The meaning of the pan and elevation attributes is the same as for the pan and elevation elements. If both are present, the mid-instrument elements take priority.
  *
  * The damper-pedal, soft-pedal, and sostenuto-pedal attributes effect playback of the three common piano pedals and their MIDI controller equivalents. The yes value indicates the pedal is depressed; no indicates the pedal is released. A numeric value from 0 to 100 may also be used for half pedaling. This value is the percentage that the pedal is depressed. A value of 0 is equivalent to no, and a value of 100 is equivalent to yes.
  *
  * MIDI devices, MIDI instruments, and playback techniques are changed using the midi-device, midi-instrument, and play elements. When there are multiple instances of these elements, they should be grouped together by instrument using the id attribute values.
  *
  * The offset element is used to indicate that the sound takes place offset from the current score position. If the sound element is a child of a direction element, the sound offset element overrides the direction offset element if both elements are present. Note that the offset reflects the intended musical position for the change in sound. It should not be used to compensate for latency issues in particular hardware configurations. */
interface _sound extends BaseType {
	coda: string;
	dacapo: yesNo;
	dalsegno: string;
	damperPedal: yesNonumber;
	divisions: number;
	dynamics: number;
	elevation: number;
	fine: string;
	forwardRepeat: yesNo;
	id: string;
	pan: number;
	pizzicato: yesNo;
	segno: string;
	softPedal: yesNonumber;
	sostenutoPedal: yesNonumber;
	tempo: number;
	timeOnly: string;
	tocoda: string;
	midiDevice?: midiDevice[];
	midiInstrument?: midiInstrument[];
	offset?: offset;
	play?: play[];
}
export interface sound extends _sound { constructor: { new(): sound }; }
export var sound: { new(): sound };

/** The staff-details element is used to indicate different types of staves. The optional number attribute specifies the staff number from top to bottom on the system, as with clef. The print-object attribute is used to indicate when a staff is not printed in a part, usually in large scores where empty parts are omitted. It is yes by default. If print-spacing is yes while print-object is no, the score is printed in cutaway format where vertical space is left for the empty part. */
interface _staffDetails extends BaseType {
	number: number;
	printObject: yesNo;
	printSpacing: yesNo;
	showFrets: showFrets;
	/** The capo element indicates at which fret a capo should be placed on a fretted instrument. This changes the open tuning of the strings specified by staff-tuning by the specified number of half-steps. */
	capo?: number;
	/** The staff-lines element specifies the number of lines for a non 5-line staff. */
	staffLines?: number;
	/** The staff-size element indicates how large a staff space is on this staff, expressed as a percentage of the work's default scaling. Values less than 100 make the staff space smaller while values over 100 make the staff space larger. A staff-type of cue, ossia, or editorial implies a staff-size of less than 100, but the exact value is implementation-dependent unless specified here. Staff size affects staff height only, not the relationship of the staff to the left and right margins. */
	staffSize?: number;
	staffTuning?: staffTuning[];
	staffType?: staffType;
}
export interface staffDetails extends _staffDetails { constructor: { new(): staffDetails }; }
export var staffDetails: { new(): staffDetails };

/** The staff-divide element represents the staff division arrow symbols found at SMuFL code points U+E00B, U+E00C, and U+E00D. */
interface _staffDivide extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	id: string;
	relativeX: number;
	relativeY: number;
	type: staffDividesymbol;
	valign: valign;
}
export interface staffDivide extends _staffDivide { constructor: { new(): staffDivide }; }
export var staffDivide: { new(): staffDivide };

/** The staff-divide-symbol type is used for staff division symbols. The down, up, and up-down values correspond to SMuFL code points U+E00B, U+E00C, and U+E00D respectively. */
export type staffDividesymbol = ("down" | "up" | "up-down");
interface _staffDividesymbol extends Primitive._string { content: staffDividesymbol; }

/** Staff layout includes the vertical distance from the bottom line of the previous staff in this system to the top line of the staff specified by the number attribute. The optional number attribute refers to staff numbers within the part, from top to bottom on the system. A value of 1 is assumed if not present. When used in the defaults element, the values apply to all parts. This value is ignored for the first staff in a system. */
interface _staffLayout extends BaseType {
	number: number;
	staffDistance?: number;
}
export interface staffLayout extends _staffLayout { constructor: { new(): staffLayout }; }
export var staffLayout: { new(): staffLayout };

/** The staff-line type indicates the line on a given staff. Staff lines are numbered from bottom to top, with 1 being the bottom line on a staff. Staff line values can be used to specify positions outside the staff, such as a C clef positioned in the middle of a grand staff. */
export type staffLine = number;
type _staffLine = Primitive._number;

/** The staff-number type indicates staff numbers within a multi-staff part. Staves are numbered from top to bottom, with 1 being the top staff on a part. */
export type staffNumber = number;
type _staffNumber = Primitive._number;

/** The staff-tuning type specifies the open, non-capo tuning of the lines on a tablature staff. */
interface _staffTuning extends BaseType {
	line: number;
	/** The tuning-alter element is represented like the alter element, with a different name to reflect is different function. */
	tuningAlter?: number;
	/** The tuning-octave element is represented like the octave element, with a different name to reflect is different function. */
	tuningOctave: number;
	/** The tuning-step element is represented like the step element, with a different name to reflect is different function. */
	tuningStep: step;
}
export interface staffTuning extends _staffTuning { constructor: { new(): staffTuning }; }
export var staffTuning: { new(): staffTuning };

/** The staff-type value can be ossia, cue, editorial, regular, or alternate. An alternate staff indicates one that shares the same musical data as the prior staff, but displayed differently (e.g., treble and bass clef, standard notation and tab). */
export type staffType = ("ossia" | "cue" | "editorial" | "regular" | "alternate");
interface _staffType extends Primitive._string { content: staffType; }

/** The start-note type describes the starting note of trills and mordents for playback, relative to the current note. */
export type startNote = ("upper" | "main" | "below");
interface _startNote extends Primitive._string { content: startNote; }

/** The start-stop type is used for an attribute of musical elements that can either start or stop, such as tuplets.
  *
  * The values of start and stop refer to how an element appears in musical score order, not in MusicXML document order. An element with a stop attribute may precede the corresponding element with a start attribute within a MusicXML document. This is particularly common in multi-staff music. For example, the stopping point for a tuplet may appear in staff 1 before the starting point for the tuplet appears in staff 2 later in the document. */
export type startStop = ("start" | "stop");
interface _startStop extends Primitive._string { content: startStop; }

/** The start-stop-change-continue type is used to distinguish types of pedal directions. */
export type startStopchangecontinue = ("start" | "stop" | "change" | "continue");
interface _startStopchangecontinue extends Primitive._string { content: startStopchangecontinue; }

/** The start-stop-continue type is used for an attribute of musical elements that can either start or stop, but also need to refer to an intermediate point in the symbol, as for complex slurs or for formatting of symbols across system breaks.
  *
  * The values of start, stop, and continue refer to how an element appears in musical score order, not in MusicXML document order. An element with a stop attribute may precede the corresponding element with a start attribute within a MusicXML document. This is particularly common in multi-staff music. For example, the stopping point for a slur may appear in staff 1 before the starting point for the slur appears in staff 2 later in the document. */
export type startStopcontinue = ("start" | "stop" | "continue");
interface _startStopcontinue extends Primitive._string { content: startStopcontinue; }

/** The start-stop-discontinue type is used to specify ending types. Typically, the start type is associated with the left barline of the first measure in an ending. The stop and discontinue types are associated with the right barline of the last measure in an ending. Stop is used when the ending mark concludes with a downward jog, as is typical for first endings. Discontinue is used when there is no downward jog, as is typical for second endings that do not conclude a piece. */
export type startStopdiscontinue = ("start" | "stop" | "discontinue");
interface _startStopdiscontinue extends Primitive._string { content: startStopdiscontinue; }

/** The start-stop-single type is used for an attribute of musical elements that can be used for either multi-note or single-note musical elements, as for groupings. */
export type startStopsingle = ("start" | "stop" | "single");
interface _startStopsingle extends Primitive._string { content: startStopsingle; }

/** Stems can be down, up, none, or double. For down and up stems, the position attributes can be used to specify stem length. The relative values specify the end of the stem relative to the program default. Default values specify an absolute end stem position. Negative values of relative-y that would flip a stem instead of shortening it are ignored. A stem element associated with a rest refers to a stemlet. */
interface _stem extends _stemValue {
	color: string;
	defaultX: number;
	defaultY: number;
	relativeX: number;
	relativeY: number;
}
export interface stem extends _stem { constructor: { new(): stem }; }
export var stem: { new(): stem };

/** The stem type represents the notated stem direction. */
export type stemValue = ("down" | "up" | "double" | "none");
interface _stemValue extends Primitive._string { content: stemValue; }

/** The step type represents a step of the diatonic scale, represented using the English letters A through G. */
export type step = ("A" | "B" | "C" | "D" | "E" | "F" | "G");
interface _step extends Primitive._string { content: step; }

/** The stick type represents pictograms where the material of the stick, mallet, or beater is included.The parentheses and dashed-circle attributes indicate the presence of these marks around the round beater part of a pictogram. Values for these attributes are "no" if not present. */
interface _stick extends BaseType {
	dashedCircle: yesNo;
	parentheses: yesNo;
	tip: tipDirection;
	stickMaterial: stickMaterial;
	stickType: stickType;
}
export interface stick extends _stick { constructor: { new(): stick }; }
export var stick: { new(): stick };

/** The stick-location type represents pictograms for the location of sticks, beaters, or mallets on cymbals, gongs, drums, and other instruments. */
export type stickLocation = ("center" | "rim" | "cymbal bell" | "cymbal edge");
interface _stickLocation extends Primitive._string { content: stickLocation; }

/** The stick-material type represents the material being displayed in a stick pictogram. */
export type stickMaterial = ("soft" | "medium" | "hard" | "shaded" | "x");
interface _stickMaterial extends Primitive._string { content: stickMaterial; }

/** The stick-type type represents the shape of pictograms where the material
  * in the stick, mallet, or beater is represented in the pictogram. */
export type stickType = ("bass drum" | "double bass drum" | "glockenspiel" | "gum" | "hammer" | "superball" | "timpani" | "wound" | "xylophone" | "yarn");
interface _stickType extends Primitive._string { content: stickType; }

/** The string type is used with tablature notation, regular notation (where it is often circled), and chord diagrams. String numbers start with 1 for the highest pitched full-length string. */
interface _string extends _stringNumber {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
}
export interface string extends _string { constructor: { new(): string }; }
export var string: { new(): string };

/** The string-mute type represents string mute on and mute off symbols. */
interface _stringMute extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	id: string;
	relativeX: number;
	relativeY: number;
	type: onOff;
	valign: valign;
}
export interface stringMute extends _stringMute { constructor: { new(): stringMute }; }
export var stringMute: { new(): stringMute };

/** The string-number type indicates a string number. Strings are numbered from high to low, with 1 being the highest pitched full-length string. */
export type stringNumber = number;
type _stringNumber = Primitive._number;

/** The strong-accent type indicates a vertical accent mark. The type attribute indicates if the point of the accent is down or up. */
interface _strongAccent extends _emptyPlacement {
	type: upDown;
}
export interface strongAccent extends _strongAccent { constructor: { new(): strongAccent }; }
export var strongAccent: { new(): strongAccent };

/** The style-text type represents a text element with a print-style attribute group. */
interface _styleText extends Primitive._string {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	relativeX: number;
	relativeY: number;
}
export interface styleText extends _styleText { constructor: { new(): styleText }; }
export var styleText: { new(): styleText };

/** The supports type indicates if a MusicXML encoding supports a particular MusicXML element. This is recommended for elements like beam, stem, and accidental, where the absence of an element is ambiguous if you do not know if the encoding supports that element. For Version 2.0, the supports element is expanded to allow programs to indicate support for particular attributes or particular values. This lets applications communicate, for example, that all system and/or page breaks are contained in the MusicXML file. */
interface _supports extends BaseType {
	attribute: string;
	element: string;
	type: yesNo;
	value: string;
}
export interface supports extends _supports { constructor: { new(): supports }; }
export var supports: { new(): supports };

/** Lyric hyphenation is indicated by the syllabic type. The single, begin, end, and middle values represent single-syllable words, word-beginning syllables, word-ending syllables, and mid-word syllables, respectively. */
export type syllabic = ("single" | "begin" | "end" | "middle");
interface _syllabic extends Primitive._string { content: syllabic; }

/** The symbol-size type is used to distinguish between full, cue sized, grace cue sized, and oversized symbols. */
export type symbolSize = ("full" | "cue" | "grace-cue" | "large");
interface _symbolSize extends Primitive._string { content: symbolSize; }

/** The system-dividers element indicates the presence or absence of system dividers (also known as system separation marks) between systems displayed on the same page. Dividers on the left and right side of the page are controlled by the left-divider and right-divider elements respectively. The default vertical position is half the system-distance value from the top of the system that is below the divider. The default horizontal position is the left and right system margin, respectively.
  *
  * When used in the print element, the system-dividers element affects the dividers that would appear between the current system and the previous system. */
interface _systemDividers extends BaseType {
	leftDivider: emptyPrintobjectstylealign;
	rightDivider: emptyPrintobjectstylealign;
}
export interface systemDividers extends _systemDividers { constructor: { new(): systemDividers }; }
export var systemDividers: { new(): systemDividers };

/** A system is a group of staves that are read and played simultaneously. System layout includes left and right margins and the vertical distance from the previous system. The system distance is measured from the bottom line of the previous system to the top line of the current system. It is ignored for the first system on a page. The top system distance is measured from the page's top margin to the top line of the first system. It is ignored for all but the first system on a page.
  *
  * Sometimes the sum of measure widths in a system may not equal the system width specified by the layout elements due to roundoff or other errors. The behavior when reading MusicXML files in these cases is application-dependent. For instance, applications may find that the system layout data is more reliable than the sum of the measure widths, and adjust the measure widths accordingly. */
interface _systemLayout extends BaseType {
	systemDistance?: number;
	systemDividers?: systemDividers;
	systemMargins?: systemMargins;
	topSystemdistance?: number;
}
export interface systemLayout extends _systemLayout { constructor: { new(): systemLayout }; }
export var systemLayout: { new(): systemLayout };

/** System margins are relative to the page margins. Positive values indent and negative values reduce the margin size. */
interface _systemMargins extends BaseType {
	leftMargin: number;
	rightMargin: number;
}
export interface systemMargins extends _systemMargins { constructor: { new(): systemMargins }; }
export var systemMargins: { new(): systemMargins };

/** The tap type indicates a tap on the fretboard. The text content allows specification of the notation; + and T are common choices. If the element is empty, the hand attribute is used to specify the symbol to use. The hand attribute is ignored if the tap glyph is already specified by the text content. If neither text content nor the hand attribute are present, the display is application-specific. */
interface _tap extends Primitive._string {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	hand: tapHand;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
}
export interface tap extends _tap { constructor: { new(): tap }; }
export var tap: { new(): tap };

/** The tap-hand type represents the symbol to use for a tap element. The left and right values refer to the SMuFL guitarLeftHandTapping and guitarRightHandTapping glyphs respectively. */
export type tapHand = ("left" | "right");
interface _tapHand extends Primitive._string { content: tapHand; }

/** Technical indications give performance information for individual instruments. */
interface _technical extends BaseType {
	id: string;
	arrow?: arrow[];
	bend?: bend[];
	/** The brass-bend element represents the u-shaped bend symbol used in brass notation, distinct from the bend element used in guitar music. */
	brassBend?: emptyPlacement[];
	/** The double-tongue element represents the double tongue symbol (two dots arranged horizontally). */
	doubleTongue?: emptyPlacement[];
	/** The down-bow element represents the symbol that is used both for down-bowing on bowed instruments, and down-stroke on plucked instruments. */
	downBow?: emptyPlacement[];
	fingering?: fingering[];
	/** The fingernails element is used in notation for harp and other plucked string instruments. */
	fingernails?: emptyPlacement[];
	/** The flip element represents the flip symbol used in brass notation. */
	flip?: emptyPlacement[];
	fret?: fret[];
	/** The golpe element represents the golpe symbol that is used for tapping the pick guard in guitar music. */
	golpe?: emptyPlacement[];
	/** The half-muted element represents the half-muted symbol, which looks like a circle with a plus sign inside. The smufl attribute can be used to distinguish different SMuFL glyphs that have a similar appearance such as brassMuteHalfClosed and guitarHalfOpenPedal. If not present, the default glyph is brassMuteHalfClosed. */
	halfMuted?: emptyPlacementsmufl[];
	hammerOn?: hammerOnpulloff[];
	handbell?: handbell[];
	harmonMute?: harmonMute[];
	harmonic?: harmonic[];
	heel?: heelToe[];
	hole?: hole[];
	/** The open element represents the open symbol, which looks like a circle. The smufl attribute can be used to distinguish different SMuFL glyphs that have a similar appearance such as brassMuteOpen and guitarOpenPedal. If not present, the default glyph is brassMuteOpen. */
	open?: emptyPlacementsmufl[];
	/** The open-string element represents the zero-shaped open string symbol. */
	openString?: emptyPlacement[];
	/** The other-technical element is used to define any technical indications not yet in the MusicXML format. The smufl attribute can be used to specify a particular glyph, allowing application interoperability without requiring every SMuFL technical indication to have a MusicXML element equivalent. Using the other-technical element without the smufl attribute allows for extended representation, though without application interoperability. */
	otherTechnical?: otherPlacementtext[];
	/** The pluck element is used to specify the plucking fingering on a fretted instrument, where the fingering element refers to the fretting fingering. Typical values are p, i, m, a for pulgar/thumb, indicio/index, medio/middle, and anular/ring fingers. */
	pluck?: placementText[];
	pullOff?: hammerOnpulloff[];
	/** The smear element represents the tilde-shaped smear symbol used in brass notation. */
	smear?: emptyPlacement[];
	/** The snap-pizzicato element represents the snap pizzicato symbol. This is a circle with a line, where the line comes inside the circle. It is distinct from the thumb-position symbol, where the line does not come inside the circle. */
	snapPizzicato?: emptyPlacement[];
	/** The stopped element represents the stopped symbol, which looks like a plus sign. The smufl attribute distinguishes different SMuFL glyphs that have a similar appearance such as handbellsMalletBellSuspended and guitarClosePedal. If not present, the default glyph is brassMuteClosed. */
	stopped?: emptyPlacementsmufl[];
	string?: string[];
	tap?: tap[];
	/** The thumb-position element represents the thumb position symbol. This is a circle with a line, where the line does not come within the circle. It is distinct from the snap pizzicato symbol, where the line comes inside the circle. */
	thumbPosition?: emptyPlacement[];
	toe?: heelToe[];
	/** The triple-tongue element represents the triple tongue symbol (three dots arranged horizontally). */
	tripleTongue?: emptyPlacement[];
	/** The up-bow element represents the symbol that is used both for up-bowing on bowed instruments, and up-stroke on plucked instruments. */
	upBow?: emptyPlacement[];
}
export interface technical extends _technical { constructor: { new(): technical }; }
export var technical: { new(): technical };

/** The tenths type is a number representing tenths of interline staff space (positive or negative). Both integer and decimal values are allowed, such as 5 for a half space and 2.5 for a quarter space. Interline space is measured from the middle of a staff line.
  *
  * Distances in a MusicXML file are measured in tenths of staff space. Tenths are then scaled to millimeters within the scaling element, used in the defaults element at the start of a score. Individual staves can apply a scaling factor to adjust staff size. When a MusicXML element or attribute refers to tenths, it means the global tenths defined by the scaling element, not the local tenths as adjusted by the staff-size element. */
export type tenths = number;
type _tenths = Primitive._number;

/** The text-direction type is used to adjust and override the Unicode bidirectional text algorithm, similar to the W3C Internationalization Tag Set recommendation. Values are ltr (left-to-right embed), rtl (right-to-left embed), lro (left-to-right bidi-override), and rlo (right-to-left bidi-override). The default value is ltr. This type is typically used by applications that store text in left-to-right visual order rather than logical order. Such applications can use the lro value to better communicate with other applications that more fully support bidirectional text. */
export type textDirection = ("ltr" | "rtl" | "lro" | "rlo");
interface _textDirection extends Primitive._string { content: textDirection; }

/** The text-element-data type represents a syllable or portion of a syllable for lyric text underlay. A hyphen in the string content should only be used for an actual hyphenated word. Language names for text elements come from ISO 639, with optional country subcodes from ISO 3166. */
interface _textElementdata extends Primitive._string {
	color: string;
	dir: textDirection;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	/** Attempting to install the relevant ISO 2- and 3-letter
	  * codes as the enumerated possible values is probably never
	  * going to be a realistic possibility.  See
	  * RFC 3066 at http://www.ietf.org/rfc/rfc3066.txt and the IANA registry
	  * at http://www.iana.org/assignments/lang-tag-apps.htm for
	  * further information.
	  *
	  * The union allows for the 'un-declaration' of xml:lang with
	  * the empty string. */
	lang: string;
	letterSpacing: numberOrnormal;
	lineThrough: number;
	overline: number;
	rotation: number;
	underline: number;
}
export interface textElementdata extends _textElementdata { constructor: { new(): textElementdata }; }
export var textElementdata: { new(): textElementdata };

/** The tie element indicates that a tie begins or ends with this note. If the tie element applies only particular times through a repeat, the time-only attribute indicates which times to apply it. The tie element indicates sound; the tied element indicates notation. */
interface _tie extends BaseType {
	timeOnly: string;
	type: startStop;
}
export interface tie extends _tie { constructor: { new(): tie }; }
export var tie: { new(): tie };

/** The tied element represents the notated tie. The tie element represents the tie sound.
  *
  * The number attribute is rarely needed to disambiguate ties, since note pitches will usually suffice. The attribute is implied rather than defaulting to 1 as with most elements. It is available for use in more complex tied notation situations.
  *
  * Ties that join two notes of the same pitch together should be represented with a tied element on the first note with type="start" and a tied element on the second note with type="stop".  This can also be done if the two notes being tied are enharmonically equivalent, but have different step values. It is not recommended to use tied elements to join two notes with enharmonically inequivalent pitches.
  *
  * Ties that indicate that an instrument should be undamped are specified with a single tied element with type="let-ring".
  *
  * Ties that are visually attached to only one note, other than undamped ties, should be specified with two tied elements on the same note, first type="start" then type="stop". This can be used to represent ties into or out of repeated sections or codas. */
interface _tied extends BaseType {
	bezierOffset: number;
	bezierOffset2: number;
	bezierX: number;
	bezierX2: number;
	bezierY: number;
	bezierY2: number;
	color: string;
	dashLength: number;
	defaultX: number;
	defaultY: number;
	id: string;
	lineType: lineType;
	number: number;
	orientation: overUnder;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	spaceLength: number;
	type: tiedType;
}
export interface tied extends _tied { constructor: { new(): tied }; }
export var tied: { new(): tied };

/** The tied-type type is used as an attribute of the tied element to specify where the visual representation of a tie begins and ends. A tied element which joins two notes of the same pitch can be specified with tied-type start on the first note and tied-type stop on the second note. To indicate a note should be undamped, use a single tied element with tied-type let-ring. For other ties that are visually attached to a single note, such as a tie leading into or out of a repeated section or coda, use two tied elements on the same note, one start and one stop.
  *
  * In start-stop cases, ties can add more elements using a continue type. This is typically used to specify the formatting of cross-system ties. */
export type tiedType = ("start" | "stop" | "continue" | "let-ring");
interface _tiedType extends Primitive._string { content: tiedType; }

/** Time signatures are represented by the beats element for the numerator and the beat-type element for the denominator. The symbol attribute is used indicate common and cut time symbols as well as a single number display. Multiple pairs of beat and beat-type elements are used for composite time signatures with multiple denominators, such as 2/4 + 3/8. A composite such as 3+2/8 requires only one beat/beat-type pair.
  *
  * The print-object attribute allows a time signature to be specified but not printed, as is the case for excerpts from the middle of a score. The value is "yes" if not present. The optional number attribute refers to staff numbers within the part. If absent, the time signature applies to all staves in the part. */
interface _time extends BaseType {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	halign: leftCenterright;
	id: string;
	number: number;
	printObject: yesNo;
	relativeX: number;
	relativeY: number;
	separator: timeSeparator;
	symbol: timeSymbol;
	valign: valign;
	/** The beat-type element indicates the beat unit, as found in the denominator of a time signature. */
	beatType: string[];
	/** The beats element indicates the number of beats, as found in the numerator of a time signature. */
	beats: string[];
	interchangeable?: interchangeable;
	/** A senza-misura element explicitly indicates that no time signature is present. The optional element content indicates the symbol to be used, if any, such as an X. The time element's symbol attribute is not used when a senza-misura element is present. */
	senzaMisura: string;
}
export interface time extends _time { constructor: { new(): time }; }
export var time: { new(): time };

/** Time modification indicates tuplets, double-note tremolos, and other durational changes. A time-modification element shows how the cumulative, sounding effect of tuplets and double-note tremolos compare to the written note type represented by the type and dot elements. Nested tuplets and other notations that use more detailed information need both the time-modification and tuplet elements to be represented accurately. */
interface _timeModification extends BaseType {
	/** The actual-notes element describes how many notes are played in the time usually occupied by the number in the normal-notes element. */
	actualNotes: number;
	/** The normal-dot element is used to specify dotted normal tuplet types. */
	normalDot?: empty[];
	/** The normal-notes element describes how many notes are usually played in the time occupied by the number in the actual-notes element. */
	normalNotes: number;
	/** If the type associated with the number in the normal-notes element is different than the current note type (e.g., a quarter note within an eighth note triplet), then the normal-notes type (e.g. eighth) is specified in the normal-type and normal-dot elements. */
	normalType?: noteTypevalue;
}
export interface timeModification extends _timeModification { constructor: { new(): timeModification }; }
export var timeModification: { new(): timeModification };

/** The time-only type is used to indicate that a particular playback-related element only applies particular times through a repeated section. The value is a comma-separated list of positive integers arranged in ascending order, indicating which times through the repeated section that the element applies. */
export type timeOnly = string;
type _timeOnly = Primitive._string;

/** The time-relation type indicates the symbol used to represent the interchangeable aspect of dual time signatures. */
export type timeRelation = ("parentheses" | "bracket" | "equals" | "slash" | "space" | "hyphen");
interface _timeRelation extends Primitive._string { content: timeRelation; }

/** The time-separator type indicates how to display the arrangement between the beats and beat-type values in a time signature. The default value is none. The horizontal, diagonal, and vertical values represent horizontal, diagonal lower-left to upper-right, and vertical lines respectively. For these values, the beats and beat-type values are arranged on either side of the separator line. The none value represents no separator with the beats and beat-type arranged vertically. The adjacent value represents no separator with the beats and beat-type arranged horizontally. */
export type timeSeparator = ("none" | "horizontal" | "diagonal" | "vertical" | "adjacent");
interface _timeSeparator extends Primitive._string { content: timeSeparator; }

/** The time-symbol type indicates how to display a time signature. The normal value is the usual fractional display, and is the implied symbol type if none is specified. Other options are the common and cut time symbols, as well as a single number with an implied denominator. The note symbol indicates that the beat-type should be represented with the corresponding downstem note rather than a number. The dotted-note symbol indicates that the beat-type should be represented with a dotted downstem note that corresponds to three times the beat-type value, and a numerator that is one third the beats value. */
export type timeSymbol = ("common" | "cut" | "single-number" | "note" | "dotted-note" | "normal");
interface _timeSymbol extends Primitive._string { content: timeSymbol; }

/** The tip-direction type represents the direction in which the tip of a stick or beater points, using Unicode arrow terminology. */
export type tipDirection = ("up" | "down" | "left" | "right" | "northwest" | "northeast" | "southeast" | "southwest");
interface _tipDirection extends Primitive._string { content: tipDirection; }

/** The top-bottom type is used to indicate the top or bottom part of a vertical shape like non-arpeggiate. */
export type topBottom = ("top" | "bottom");
interface _topBottom extends Primitive._string { content: topBottom; }

/** The transpose type represents what must be added to a written pitch to get a correct sounding pitch. The optional number attribute refers to staff numbers, from top to bottom on the system. If absent, the transposition applies to all staves in the part. Per-staff transposition is most often used in parts that represent multiple instruments. */
interface _transpose extends BaseType {
	id: string;
	number: number;
	/** The chromatic element represents the number of semitones needed to get from written to sounding pitch. This value does not include octave-change values; the values for both elements need to be added to the written pitch to get the correct sounding pitch. */
	chromatic: number;
	/** The diatonic element specifies the number of pitch steps needed to go from written to sounding pitch. This allows for correct spelling of enharmonic transpositions. */
	diatonic?: number;
	/** If the double element is present, it indicates that the music is doubled one octave down from what is currently written (as is the case for mixed cello / bass parts in orchestral literature). */
	double?: empty;
	/** The octave-change element indicates how many octaves to add to get from written pitch to sounding pitch. */
	octaveChange?: number;
}
export interface transpose extends _transpose { constructor: { new(): transpose }; }
export var transpose: { new(): transpose };

/** The tremolo ornament can be used to indicate single-note, double-note, or unmeasured tremolos. Single-note tremolos use the single type, double-note tremolos use the start and stop types, and unmeasured tremolos use the unmeasured type. The default is "single" for compatibility with Version 1.1. The text of the element indicates the number of tremolo marks and is an integer from 0 to 8. Note that the number of attached beams is not included in this value, but is represented separately using the beam element. The value should be 0 for unmeasured tremolos.
  *
  * When using double-note tremolos, the duration of each note in the tremolo should correspond to half of the notated type value. A time-modification element should also be added with an actual-notes value of 2 and a normal-notes value of 1. If used within a tuplet, this 2/1 ratio should be multiplied by the existing tuplet ratio.
  *
  * The smufl attribute specifies the glyph to use from the SMuFL tremolos range for an unmeasured tremolo. It is ignored for other tremolo types. The SMuFL buzzRoll glyph is used by default if the attribute is missing.
  *
  * Using repeater beams for indicating tremolos is deprecated as of MusicXML 3.0. */
interface _tremolo extends _tremoloMarks {
	color: string;
	defaultX: number;
	defaultY: number;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	smufl: string;
	type: tremoloType;
}
export interface tremolo extends _tremolo { constructor: { new(): tremolo }; }
export var tremolo: { new(): tremolo };

/** The number of tremolo marks is represented by a number from 0 to 8: the same as beam-level with 0 added. */
export type tremoloMarks = number;
type _tremoloMarks = Primitive._number;

/** The tremolo-type is used to distinguish multi-note, single-note, and unmeasured tremolos. */
export type tremoloType = ("start" | "stop" | "single" | "unmeasured");
interface _tremoloType extends Primitive._string { content: tremoloType; }

/** The trill-beats type specifies the beats used in a trill-sound or bend-sound attribute group. It is a decimal value with a minimum value of 2. */
export type trillBeats = number;
type _trillBeats = Primitive._number;

/** The trill-step type describes the alternating note of trills and mordents for playback, relative to the current note. */
export type trillStep = ("whole" | "half" | "unison");
interface _trillStep extends Primitive._string { content: trillStep; }

/** A tuplet element is present when a tuplet is to be displayed graphically, in addition to the sound data provided by the time-modification elements. The number attribute is used to distinguish nested tuplets. The bracket attribute is used to indicate the presence of a bracket. If unspecified, the results are implementation-dependent. The line-shape attribute is used to specify whether the bracket is straight or in the older curved or slurred style. It is straight by default.
  *
  * Whereas a time-modification element shows how the cumulative, sounding effect of tuplets and double-note tremolos compare to the written note type, the tuplet element describes how this is displayed. The tuplet element also provides more detailed representation information than the time-modification element, and is needed to represent nested tuplets and other complex tuplets accurately.
  *
  * The show-number attribute is used to display either the number of actual notes, the number of both actual and normal notes, or neither. It is actual by default. The show-type attribute is used to display either the actual type, both the actual and normal types, or neither. It is none by default. */
interface _tuplet extends BaseType {
	bracket: yesNo;
	defaultX: number;
	defaultY: number;
	id: string;
	lineShape: lineShape;
	number: number;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	showNumber: showTuplet;
	showType: showTuplet;
	type: startStop;
	/** The tuplet-actual element provide optional full control over how the actual part of the tuplet is displayed, including number and note type (with dots). If any of these elements are absent, their values are based on the time-modification element. */
	tupletActual?: tupletPortion;
	/** The tuplet-normal element provide optional full control over how the normal part of the tuplet is displayed, including number and note type (with dots). If any of these elements are absent, their values are based on the time-modification element. */
	tupletNormal?: tupletPortion;
}
export interface tuplet extends _tuplet { constructor: { new(): tuplet }; }
export var tuplet: { new(): tuplet };

/** The tuplet-dot type is used to specify dotted normal tuplet types. */
interface _tupletDot extends BaseType {
	color: string;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
}
export interface tupletDot extends _tupletDot { constructor: { new(): tupletDot }; }
export var tupletDot: { new(): tupletDot };

/** The tuplet-number type indicates the number of notes for this portion of the tuplet. */
interface _tupletNumber extends Primitive._number {
	color: string;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
}
export interface tupletNumber extends _tupletNumber { constructor: { new(): tupletNumber }; }
export var tupletNumber: { new(): tupletNumber };

/** The tuplet-portion type provides optional full control over tuplet specifications. It allows the number and note type (including dots) to be set for the actual and normal portions of a single tuplet. If any of these elements are absent, their values are based on the time-modification element. */
interface _tupletPortion extends BaseType {
	tupletDot?: tupletDot[];
	tupletNumber?: tupletNumber;
	tupletType?: tupletType;
}
export interface tupletPortion extends _tupletPortion { constructor: { new(): tupletPortion }; }
export var tupletPortion: { new(): tupletPortion };

/** The tuplet-type type indicates the graphical note type of the notes for this portion of the tuplet. */
interface _tupletType extends _noteTypevalue {
	color: string;
	fontFamily: string;
	fontSize: fontSize;
	fontStyle: fontStyle;
	fontWeight: fontWeight;
}
export interface tupletType extends _tupletType { constructor: { new(): tupletType }; }
export var tupletType: { new(): tupletType };

/** The two-note-turn type describes the ending notes of trills and mordents for playback, relative to the current note. */
export type twoNoteturn = ("whole" | "half" | "none");
interface _twoNoteturn extends Primitive._string { content: twoNoteturn; }

/** The typed-text type represents a text element with a type attributes. */
interface _typedText extends Primitive._string {
	type: string;
}
export interface typedText extends _typedText { constructor: { new(): typedText }; }
export var typedText: { new(): typedText };

/** The unpitched type represents musical elements that are notated on the staff but lack definite pitch, such as unpitched percussion and speaking voice. */
interface _unpitched extends BaseType {
	displayOctave?: number;
	displayStep?: step;
}
export interface unpitched extends _unpitched { constructor: { new(): unpitched }; }
export var unpitched: { new(): unpitched };

/** The up-down type is used for the direction of arrows and other pointed symbols like vertical accents, indicating which way the tip is pointing. */
export type upDown = ("up" | "down");
interface _upDown extends Primitive._string { content: upDown; }

/** The up-down-stop-continue type is used for octave-shift elements, indicating the direction of the shift from their true pitched values because of printing difficulty. */
export type upDownstopcontinue = ("up" | "down" | "stop" | "continue");
interface _upDownstopcontinue extends Primitive._string { content: upDownstopcontinue; }

/** The upright-inverted type describes the appearance of a fermata element. The value is upright if not specified. */
export type uprightInverted = ("upright" | "inverted");
interface _uprightInverted extends Primitive._string { content: uprightInverted; }

/** The valign type is used to indicate vertical alignment to the top, middle, bottom, or baseline of the text. Defaults are implementation-dependent. */
export type valign = ("top" | "middle" | "bottom" | "baseline");
interface _valign extends Primitive._string { content: valign; }

/** The valign-image type is used to indicate vertical alignment for images and graphics, so it does not include a baseline value. Defaults are implementation-dependent. */
export type valignImage = ("top" | "middle" | "bottom");
interface _valignImage extends Primitive._string { content: valignImage; }

/** The virtual-instrument element defines a specific virtual instrument used for an instrument sound. */
interface _virtualInstrument extends BaseType {
	/** The virtual-library element indicates the virtual instrument library name. */
	virtualLibrary?: string;
	/** The virtual-name element indicates the library-specific name for the virtual instrument. */
	virtualName?: string;
}
export interface virtualInstrument extends _virtualInstrument { constructor: { new(): virtualInstrument }; }
export var virtualInstrument: { new(): virtualInstrument };

/** Wavy lines are one way to indicate trills. When used with a barline element, they should always have type="continue" set. */
interface _wavyLine extends BaseType {
	accelerate: yesNo;
	beats: number;
	color: string;
	defaultX: number;
	defaultY: number;
	lastBeat: number;
	number: number;
	placement: aboveBelow;
	relativeX: number;
	relativeY: number;
	secondBeat: number;
	startNote: startNote;
	trillStep: trillStep;
	twoNoteturn: twoNoteturn;
	type: startStopcontinue;
}
export interface wavyLine extends _wavyLine { constructor: { new(): wavyLine }; }
export var wavyLine: { new(): wavyLine };

/** The wedge type represents crescendo and diminuendo wedge symbols. The type attribute is crescendo for the start of a wedge that is closed at the left side, and diminuendo for the start of a wedge that is closed on the right side. Spread values are measured in tenths; those at the start of a crescendo wedge or end of a diminuendo wedge are ignored. The niente attribute is yes if a circle appears at the point of the wedge, indicating a crescendo from nothing or diminuendo to nothing. It is no by default, and used only when the type is crescendo, or the type is stop for a wedge that began with a diminuendo type. The line-type is solid by default. */
interface _wedge extends BaseType {
	color: string;
	dashLength: number;
	defaultX: number;
	defaultY: number;
	id: string;
	lineType: lineType;
	niente: yesNo;
	number: number;
	relativeX: number;
	relativeY: number;
	spaceLength: number;
	spread: number;
	type: wedgeType;
}
export interface wedge extends _wedge { constructor: { new(): wedge }; }
export var wedge: { new(): wedge };

/** The wedge type is crescendo for the start of a wedge that is closed at the left side, diminuendo for the start of a wedge that is closed on the right side, and stop for the end of a wedge. The continue type is used for formatting wedges over a system break, or for other situations where a single wedge is divided into multiple segments. */
export type wedgeType = ("crescendo" | "diminuendo" | "stop" | "continue");
interface _wedgeType extends Primitive._string { content: wedgeType; }

/** The winged attribute indicates whether the repeat has winged extensions that appear above and below the barline. The straight and curved values represent single wings, while the double-straight and double-curved values represent double wings. The none value indicates no wings and is the default. */
export type winged = ("none" | "straight" | "curved" | "double-straight" | "double-curved");
interface _winged extends Primitive._string { content: winged; }

/** The wood type represents pictograms for wood percussion instruments. The maraca and maracas values distinguish the one- and two-maraca versions of the pictogram. */
export type wood = ("bamboo scraper" | "board clapper" | "cabasa" | "castanets" | "castanets with handle" | "claves" | "football rattle" | "guiro" | "log drum" | "maraca" | "maracas" | "quijada" | "rainstick" | "ratchet" | "reco-reco" | "sandpaper blocks" | "slit drum" | "temple block" | "vibraslap" | "whip" | "wood block");
interface _wood extends Primitive._string { content: wood; }

/** Works are optionally identified by number and title. The work type also may indicate a link to the opus document that composes multiple scores into a collection. */
interface _work extends BaseType {
	opus?: opus;
	/** The work-number element specifies the number of a work, such as its opus number. */
	workNumber?: string;
	/** The work-title element specifies the title of a work, not including its opus or other work number. */
	workTitle?: string;
}
export interface work extends _work { constructor: { new(): work }; }
export var work: { new(): work };

/** The yes-no type is used for boolean-like attributes. We cannot use W3C XML Schema booleans due to their restrictions on expression of boolean values. */
export type yesNo = ("yes" | "no");
interface _yesNo extends Primitive._string { content: yesNo; }

/** The yes-no-number type is used for attributes that can be either boolean or numeric values. */
interface _yesNonumber extends _string {}
export interface yesNonumber extends _yesNonumber { constructor: { new(): yesNonumber }; }
export var yesNonumber: { new(): yesNonumber };

/** Calendar dates are represented yyyy-mm-dd format, following ISO 8601. This is a W3C XML Schema date type, but without the optional timezone data. */
export type yyyyMmdd = Date;
type _yyyyMmdd = Primitive._Date;

export interface document extends BaseType {
	/** The score-partwise element is the root element for a partwise MusicXML score. It includes a score-header group followed by a series of parts with measures inside. The document-attributes attribute group includes the version attribute. */
	scorePartwise: ScorePartwiseType;
	/** The score-timewise element is the root element for a timewise MusicXML score. It includes a score-header group followed by a series of measures with parts inside. The document-attributes attribute group includes the version attribute. */
	scoreTimewise: ScoreTimewiseType;
}
export var document: document;
