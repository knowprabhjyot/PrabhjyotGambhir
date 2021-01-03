import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';

const Footer = () => {
    return (
        <Box padding="12px" bgcolor="primary.A600">
            <Grid container display="flex" justify="space-between">
                <Grid item>
                    <Typography variant="body2">
                        © 2020 All Rights Reserved.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2">
                        Email : knowprabhjyot@gmail.com
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;