import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core";
import { DawletConfigDict } from "../types";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  header: {
    textTransform: 'capitalize'
  }
}));

type DawletListProps = {
  configuredDawlets: DawletConfigDict;
  checkDawlet: (key: string) => void
};

export const DawletList: FC<DawletListProps> = ({ configuredDawlets, checkDawlet }) => {
  const classes = useStyles();
  const dawlets = Object.values(configuredDawlets)

  console.log('render dawlet list')
  return (
    <List className={classes.root}>
      {dawlets.map(dawlet => {
        const labelId = `checkbox-list-label-${dawlet.name}`;

        const handleClick = () => checkDawlet(dawlet.name)

        return (
          <ListItem
            key={dawlet.name}
            role={undefined}
            dense
            button
            onClick={handleClick}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={dawlet.checked}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId}>
              <Typography className={classes.header} variant="subtitle1">
                {dawlet.name}
              </Typography>
            </ListItemText>
            <ListItemText id={labelId}>
              <Typography>{dawlet.description}</Typography>
            </ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};
