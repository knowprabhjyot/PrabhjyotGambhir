import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Box } from '@material-ui/core';

const SocialSection = () => {
    return (
        <Box display="flex" justifyContent="space-between">
            <FacebookIcon color="secondary" />
            <LinkedInIcon color="secondary" />
            <InstagramIcon color="secondary" />
            <TwitterIcon  color="secondary"/>
            <GitHubIcon  color="secondary" />
        </Box>
    )
}

export default SocialSection;