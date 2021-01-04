import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import BannerSection from '../bannerSection/bannerSection';
import Education from './education';


const bannerConfig = {
    title: 'All Good Stuff about me!',
    image: '../images/banner2.jpg',
    image2: '../images/me2.png'
}

const About = () => {
    return (
        <div>
            <Box marginBottom="32px">            
                <BannerSection bannerConfig={bannerConfig} />
            </Box>
            <Typography variant="h5">
                About Me
            </Typography>
            <Box display="grid" gridGap="32px">
                <Typography variant="body2">
                    My Story
            </Typography>
                <Typography variant="subtitle2">
                    Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                    Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
            </Typography>
            <Typography variant="h5">
                My Education
            </Typography>
            <Education />
            </Box>
        </div>
    )
}

export default About;