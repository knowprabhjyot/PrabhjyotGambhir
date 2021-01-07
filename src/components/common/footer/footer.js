import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down("xs")]: {
        justifyContent: 'center'
    }
    }
}));  

const Footer = () => {
    const classes = useStyles();
    return (
        <Box padding="12px" bgcolor="primary.A600">
            <Grid container display="flex" justify="space-between" className={classes.container}>
                <Grid item>
                    <Typography variant="body2">
                        © 2020 All Rights Reserved.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2">
                        Email : knowprabhjyot@gmail.com
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;