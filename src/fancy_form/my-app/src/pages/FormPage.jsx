import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SideBackground from '../assets/side.jpg';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#FFFFFF',
    width: "80%",
    height: "500px",
    borderRadius: '4px',

  },
  paper: {
    textAlign: 'center',
    color: "#DDDDDD",
    backgroundColor: "#FFFFFF",
    display: 'flex',
  },
  side: {
    backgroundImage: `url(${SideBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '4px 0 0 4px',
  }
}));


export const FormPage = () => {
  const styles = useStyles();

  return (
    <Grid container className={styles.root} >
      <Grid className={styles.side} item xs={4} md={5} />
      <Grid container direction={'column'} item xs={8} md={7}>
        <Grid item >
          <Typography noWrap>{'message'}</Typography>
        </Grid>
        <Grid item >
          <Typography noWrap>{'message'}</Typography>
        </Grid>
        <Grid item >
          <Typography noWrap>{'message'}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

