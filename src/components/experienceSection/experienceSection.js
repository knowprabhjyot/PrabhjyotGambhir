import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    itemName: {
        marginRight: '8px',
        [theme.breakpoints.down("md")]: {
            fontSize: '1.5rem',
            justifyContent: 'center'
        }
    },
    itemContainer: {
        [theme.breakpoints.down("md")]: {
            justifyContent: 'center'
        }
    }
}));

const ExperienceSection = () => {
    const classes = useStyles();
    const experenceData = [{ name: 'Years Experience', value: 4 }, { name: 'Completed Projects', value: 10 }, { name: 'Companies Worked with', value: 3 }, { name: 'Competitions Won', value: 2 }];

    const showExperience = () => {
        return experenceData.map((item, index) => {
            return (
                <Grid item lg={3} md={6} sm={6} xs={12} key={index}>
                    <Box className={classes.itemContainer} display="flex" alignItems="center" >
                        <Typography className={classes.itemName} color="secondary" variant="h6">
                            {item.value} +
                            </Typography>
                        <Typography className={classes.itemName} variant="subtitle2">
                            {item.name}
                        </Typography>
                    </Box>
                </Grid>
            )
        })
    }

    return (
        <Grid container>
            {showExperience()}
        </Grid>
    )
}

export default ExperienceSection;