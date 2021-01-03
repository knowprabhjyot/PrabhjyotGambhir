import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';
import React from 'react';


const useStyles = makeStyles({
    root: {
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center'
        paddingTop: '32px'
    },
    image: {
        width: '300px',
        height: '400px',
        position: 'absolute',
        right: 0,
        top: -100
    },
    heading: {
        color: 'white'
    },
});

const BannerSection = () => {
    const classes = useStyles();

    return (
        <Box bgcolor="primary.A700">
            <Box display="flex" alignItems="center" style={{
                backgroundImage: "url('./images/banner.jpg')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '300px',
                position: 'relative'
            }}>
               <Grid container>
                   <Grid item xs={4}>
                        <Box padding="32px">
                        <Typography variant="h3" className={classes.heading}>
                    Discover
                    <br/>
                     My
                     <br/>
                      Art Space
                </Typography>
                <Button color="primary" variant="contained">
                    Explore Now
                    <ArrowDownward/>
                </Button>
                        </Box>
                   </Grid>
                   <Grid item xs={8}>
                        <img className={classes.image} src="./images/me2.png" />
                   </Grid>
               </Grid>
            </Box>
        </Box>
    )
}

export default BannerSection;