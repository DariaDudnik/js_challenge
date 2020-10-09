import { Grid } from '@material-ui/core';
import React from 'react';
import './App.css';
import { FormPage } from "./pages/FormPage";
import { makeStyles } from '@material-ui/core/styles';
import Background from './assets/background-vector.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    width: '100vw',
    minHeight: '100vh',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: 'center',
  },

}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container justify={'center'}>
        <FormPage />
      </Grid>
    </div>
  );
}

export default App;
