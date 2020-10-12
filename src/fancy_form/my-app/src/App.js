import React from 'react';
import './App.css';
import { FormPage } from "./pages/FormPage";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100vw',
    minHeight: '100vh',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <FormPage />
    </div>
  );
}

export default App;
