import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LeftPanel from './components/leftPanel/leftPanel';
import './App.css';
import { Box } from '@material-ui/core';
import Routes from './routes';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  box: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box bgcolor="primary.main" className={classes.box}>
        <Box className={classes.box}  bgcolor="primary.A700">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <LeftPanel />
          </Grid>
          <Grid item xs={9}>
            <Routes />
          </Grid>
        </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default App;