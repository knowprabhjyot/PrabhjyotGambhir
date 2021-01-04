import { Grid } from '@material-ui/core';
import React from 'react';
import Card from '../common/card/card';

const skillSetData = [{title: 'Current Employer', description: 'Keysight Technologies'}, {title: 'Designation', description: 'R&D Engineer'}, {title: 'Email', description: 'knowprabhjyot@gmail.com'}]

const QuickInfo = () => {
    return (
        <Grid container spacing={3}>
            {showInfo()}
        </Grid>
    )
}

const showInfo = () => {
    return skillSetData.map((item, index) => {
        return (
            <Grid key={index} item xs={4}>
                <Card data={item}/>
            </Grid>
        )
    })
}

export default QuickInfo;