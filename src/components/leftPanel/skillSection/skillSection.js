import { Box, LinearProgress, Typography } from '@material-ui/core';
import React from 'react';

const skillData = [{ name: 'React', value: 80 },{ name: 'Angular', value: 80 },{ name: 'JAVASCRIPT', value: 60 }, { name: 'HTML', value: 100 },{ name: 'CSS', value: 100 }, ];
const SkillSection = () => {
    return (
        skillData.map((item, index) => {
            return (
                <Box key={index} display="grid" gridGap="12px" width="100%">
                    <Box  display="flex" flexDirection="row" justifyContent="space-between">
                        <Typography component="p">
                            {item.name}
                        </Typography>
                        <Typography component="p">
                            {item.value} %
                            </Typography>
                    </Box>
                    <LinearProgress color="secondary" variant="determinate" value={item.value} />
                </Box>
            )
        })
    )
}

export default SkillSection;