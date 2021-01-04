import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';
import React from 'react';


const BannerSection = (props) => {


    const useStyles = makeStyles({
        root: {
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            // justifyContent: 'center'
            paddingTop: '32px'
        },
        image: {
            height: '350px',
            position: 'absolute',
            right: 0,
            top: -50
        },
        heading: {
            color: 'white'
        },
        bannerImage: {
            backgroundImage: `url(${props.bannerConfig.image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '300px',
            position: 'relative'
        }
    });


    const classes = useStyles();
    return (
        <Box bgcolor="primary.A700">
            <Box display="flex" alignItems="center" className={classes.bannerImage}>
                <Grid container>
                    <Grid item xs={4}>
                        <Box padding="32px">
                            <Typography variant="h3" className={classes.heading}>
                                {props.bannerConfig.title}
                            </Typography>
                            <Button color="primary" variant="contained">
                                Explore Now
                    <ArrowDownward />
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <img alt="me" className={classes.image} src={props.bannerConfig.image2} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default BannerSection;