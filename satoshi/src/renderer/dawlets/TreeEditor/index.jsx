// @flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400
  }
});
export const TreeEditor = () => {
  const classes = useStyles();

  return (
    <div className="dawlet">
      <h1>Tree Editor</h1>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="Note">
          <TreeItem nodeId="2" label="NoteOn" />
          <TreeItem nodeId="3" label="NoteOff" />
          <TreeItem nodeId="4" label="Modultions">
            <TreeItem nodeId="5" label="Modulation"></TreeItem>
          </TreeItem>
          <TreeItem nodeId="6" label="noteNumber"></TreeItem>
          <TreeItem nodeId="7" label="offsetTime"></TreeItem>
        </TreeItem>
      </TreeView>
    </div>
  );
};
