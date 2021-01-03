import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles({
    textValue: {
        display: 'flex',
        justifyContent: 'space-between'
    }
});


const ExperienceSection = () => {
    const classes = useStyles();
    const experenceData = [{ name: 'Years Experience', value: 4 }, { name: 'Completed Projects', value: 10 }, { name: 'Companies Worked with', value: 3 }];


    const showExperience = () => {
        return experenceData.map((item, index) => {
            return (
                <Grid item xs={4} key={index}>
                    <Grid container justify="space-between" alignItems="center" display="flex">
                        <Grid item xs={2}>
                            <Typography color="secondary" variant="h5">
                                {item.value} +
                        </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography >
                                {item.name}
                            </Typography>
                        </Grid>
                    </Grid>
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