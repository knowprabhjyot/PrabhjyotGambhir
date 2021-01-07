import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LeftPanel from './components/leftPanel/leftPanel';
import './App.css';
import { Box, Drawer, Hidden, IconButton } from '@material-ui/core';
import Routes from './routes';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  box: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));


const App = () => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const showDrawer = () => {
    return (
      <Drawer anchor="left" open={state} onClose={() => setState(false)}>
        <LeftPanel />
      </Drawer>
    )
  }

  return (
    <div className={classes.root}>
      <Box bgcolor="primary.main" className={classes.box}>
        <Grid container spacing={3}>
          <Grid item lg={3}>
            <Hidden mdDown>
              <LeftPanel />
            </Hidden>
           <Hidden lgUp>
           <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setState(true)}
              edge="start"
            >
              <MenuIcon color="secondary" />
            </IconButton>
            {showDrawer()}
           </Hidden>
          </Grid>
          <Grid item lg={9} xs={12} >
            <Routes />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default App;