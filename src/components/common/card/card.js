import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
    box: {
        padding: 24
    },
})


const Card = (props) => {
    const classes = useStyles();
    return (
        <Box bgcolor="primary.A600" className={classes.box} display="grid" gridGap="16px">
            <Typography variant="h6">
                {props.data.title}
            </Typography>
            <Typography variant="body2">
                {props.data.description}
            </Typography>
            <Grid container>
                <Grid item xs={6}>
                    <Button fullWidth variant="outlined" color="secondary">
                        Read more 
                        <ArrowForward/>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Card;