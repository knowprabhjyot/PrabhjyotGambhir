import { makeStyles, Typography } from '@material-ui/core';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab';
import React from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Card from '../common/card/card';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const educationData = [
{ title: 'Keysight Technologies', description: 'Working in Keysight as R&D Engineer' },
{ title: 'Indrik Technologies', description: 'Worked as Software Engineer for a product called Referyaar' },
{ title: 'Indraprastha University', description: 'Completed in Computer Science Blah blah' },
{ title: 'Delhi Public School', subTitle: 'Secondary School', showTag: 'May 2012', description: 'Completed with Physcs, Chemistry, Maths' }];

const Education = () => {
    const classes = useStyles();
    return (
        <div>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Card subTitle="R&D Engineer" showButton={true} buttonLabel="Work Samples" showTag="Feb 2019 - Current" data={educationData[0]} />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h5" >
                            Current Employment
                        </Typography>   
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Card subTitle="Software Engineer" showButton={true} buttonLabel="Work Samples" showTag="Oct 2018 - Feb 2019" data={educationData[1]} />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h5" >
                            Former Employment
                    </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Card subTitle="Bachelors in Technology" showButton={true} buttonLabel="Degree" showTag="Aug 2013 - May 2017" data={educationData[2]} />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h5" >
                            Graduation
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Card subTitle="Matriculation" showTag="2011 - 2012" data={educationData[3]} />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h5" >
                            Secondary Education
                    </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default Education;