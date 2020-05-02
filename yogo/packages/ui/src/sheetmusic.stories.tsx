import React from 'react';
import { SheetMusicViewer } from './'

export default { title: 'SheetMusic' };

export const Sample = () => (
  <SheetMusicViewer options={{autoResize: true}} file="/sample.xml" />
)