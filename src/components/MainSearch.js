import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Container} from '@material-ui/core';
import PlateList from './PlateList';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MainSearch() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Ingresa Número de Placa" variant="outlined" style={{width: '100%'}} />
      </form>
      <PlateList />
    </Container>
  );
}
