import { Box, Grid } from '@material-ui/core';
import React from 'react';

const Footer = () => {
    return (
        <Box padding="12px" bgcolor="primary.A600">
            <Grid container display="flex" justify="space-between">
                <Grid item>
                    © 2020 All Rights Reserved.
                </Grid>
                <Grid item>
                    Email : knowprabhjyot@gmail.com
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;