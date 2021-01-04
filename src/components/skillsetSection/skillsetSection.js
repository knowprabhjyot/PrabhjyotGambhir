import { Grid } from '@material-ui/core';
import React from 'react';
import Card from '../common/card/card';

const SkillSetSecton = () => {
    return (
        <Grid container spacing={3}>{showSkill()}</Grid>
    )
}

const skillSetData = [{title: 'Front End Development', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'},
{title: 'Back End Development', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'},
{title: 'Graphics Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'},
{title: 'UI/UX Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'},
{title: 'Devops', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'},
{title: 'Front End Development', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'}];
const showSkill = () => {
    return skillSetData.map((item, index) => {
        return (
                <Grid key={index} item xs={4}>
                    <Card buttonLabel="Learn More" showButton={true} data={item} />
                </Grid>
            )
    })
}
export default SkillSetSecton;