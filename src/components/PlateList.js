import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Container } from '@material-ui/core';
import Plate from './Plate';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function PlateList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Plate />
        </Grid>
        <Grid item xs={12}>
          <Plate />
        </Grid>
        <Grid item xs={12}>
          <Plate />
        </Grid>
      </Grid>
    </div>
  );
}
