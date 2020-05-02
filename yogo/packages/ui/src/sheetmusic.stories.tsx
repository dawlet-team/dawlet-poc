import React from 'react';
import { MusicXMLBuilder } from '@dawlet/utils/lib/musicXmlBuilder' // hackie escape
import { SheetMusicViewer } from './'
import { ScoreFactory } from './helper/sheetMusicFactory'

export default { title: 'SheetMusic' };

export const Sample = () => (
  <SheetMusicViewer options={{autoResize: true}} file="/sample.xml" />
)

export const QuarterTones = () => (
  <SheetMusicViewer options={{autoResize: true}} file="/quarter-tones.xml" />
)

export const InlineSheetMusic = () => {
  const inlineFile = 
`<?xml version="1.0" encoding="UTF-8"?>
<score-partwise version="2.0">
  <work>
    <work-title>Inline Example</work-title>
  </work>
  <part-list>
    <score-part id="P2">
      <part-name>Piano</part-name>
      <score-instrument id="P2-I2">
        <instrument-name>Acoustic Grand Piano</instrument-name>
      </score-instrument>
    </score-part>
  </part-list>
  <!--=========================================================-->
  <part id="P2">
    <measure number="1" width="324">
      <note default-x="136">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
        </pitch>
        <duration>96</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="15.5">up</stem>
        <staff>1</staff>
      </note>
    </measure>
    <!--=======================================================-->
  </part>
  <!--=========================================================-->
</score-partwise>
`
  return (
    <SheetMusicViewer options={{ autoResize: true }} file={inlineFile} />
  )
}

export const RandomSheetMusic = () => {
  const score = ScoreFactory.build()
  const randomFile = new MusicXMLBuilder().render(score)
  return (
    <SheetMusicViewer options={{ autoResize: true }} file={randomFile} />
  )
}