import { Box, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import BannerSection from './bannerSection/bannerSection';
import ExperienceSection from './experienceSection/experienceSection';
import SkillSetSecton from './skillsetSection/skillsetSection';

class MainPanel extends Component {
    render() {
        return (
            <Box display="grid" gridGap="20px">
                <BannerSection />
                <ExperienceSection />
                <Typography variant="h5">
                    My Skilset
                </Typography>
                <SkillSetSecton /> 
                <Box>
                </Box>
            </Box>
        )
    }
}

export default MainPanel;