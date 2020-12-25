import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LeftPanel from './components/leftPanel/leftPanel';
import MainPanel from './components/mainPanel/mainPanel';
import RightPanel from './components/rightPanel/rightPanel';
import { Box } from '@material-ui/core';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  box: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box bgcolor="primary.main" className={classes.box}>
        <Grid container>
          <Grid item xs={3}>
            <LeftPanel />
          </Grid>
          <Grid item xs={6}>
            <MainPanel />
          </Grid>
          <Grid item xs={3}>
            <RightPanel />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default App;