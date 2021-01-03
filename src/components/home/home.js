import { Box, Typography } from '@material-ui/core';
import React from 'react';
import ExperienceSection from '../experienceSection/experienceSection';
import SkillSetSecton from '../skillsetSection/skillsetSection';

const Home = () => {
    return (
        <Box display="grid" gridGap="32px">
            <ExperienceSection />
            <Typography variant="h5">
                My Skilset
                </Typography>
            <SkillSetSecton />
        </Box>
    )
}

export default Home;