import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
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
        width: '100%',
        height: '400px'
    },
    heading: {
        color: 'white'
    }
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
            }}>
               <Grid container>
                   <Grid item xs={4}>
                   <Typography variant="h3" className={classes.heading}>
                    Discover My Art Space
                </Typography>
                <Button color="primary" variant="contained">
                    Explore Now
                </Button>
                   </Grid>
                   {/* <Grid item xs={8}>
                        <img src="./images/me2.png" />
                   </Grid> */}
               </Grid>
            </Box>
        </Box>
    )
}

export default BannerSection;