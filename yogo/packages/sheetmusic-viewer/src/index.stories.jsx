import React from 'react';
import { Button } from '@storybook/react/demo';
import { SheetMusicViewer } from '../lib'

export default { title: 'SheetMusic' };

export const withSheetMusic = () => (
  <SheetMusicViewer options={{autoResize: true}} file="/sample.xml" />
)