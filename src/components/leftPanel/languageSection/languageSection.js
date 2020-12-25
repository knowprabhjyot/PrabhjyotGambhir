import { Box, CircularProgress, Typography } from '@material-ui/core';
import React from 'react';

const languageData = [{ name: 'English', value: 100 }, { name: 'French', value: 60 }];
const LanguageSection = () => {
    return (
        languageData.map((item, index) => {
            return (
                <div key={index}>
                <Box position="relative" display="inline-flex" key={index} flexDirection="column">
                    <CircularProgress variant="determinate" value={item.value} />
                    <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
                            item.value,
                        )}%`}
                        </Typography>
                    </Box>
                </Box>
                <Typography component="p">
                            {item.name}
                </Typography>
                </div>
            )
        })
    )
}

export default LanguageSection;