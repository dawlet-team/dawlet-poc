import React from 'react';
import { SheetMusicViewer } from '../lib'

export default { title: 'SheetMusic' };

export const Sample = () => (
  <SheetMusicViewer options={{autoResize: true}} file="/sample.xml" />
)