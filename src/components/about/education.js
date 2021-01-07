import { Hidden, makeStyles, Typography } from '@material-ui/core';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab';
import React from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Card from '../common/card/card';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles((theme) => ({
    heading: {
        [theme.breakpoints.down("xs")]: {
            fontSize: '1rem'
        }
    },
    timelineItem: {
        [theme.breakpoints.down("xs")]: {
            flexDirection: 'column !important',
        }
    },
    timeline: {
        [theme.breakpoints.down("xs")]: {
            width: '100% !important',
            padding: '0 !important',  
        }
    },
    timelineContent: {
        [theme.breakpoints.down("xs")]: {
            padding: 0,
            // display: 'none'
            textAlign: 'left !important'
        }
    },
    timelineOppositeContent: {
        padding: '0px',
        [theme.breakpoints.down("xs")]: {
           textAlign: 'start',
           order: 2,
           width: '100%'
        }
    },
    seperator: {
        [theme.breakpoints.down("xs")]: {
            width: 'fit-content'
        }
    },
    connector: {
        [theme.breakpoints.down("xs")]: {
            height: '20px'
        }
    }
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
            <Timeline className={classes.timeline} align="alternate">
                <TimelineItem className={classes.timelineItem}>
                    <TimelineOppositeContent className={classes.timelineOppositeContent} >
                        <Card subTitle="R&D Engineer" showButton={true} buttonLabel="Work Samples" showTag="Feb 2019 - Current" data={educationData[0]} />
                    </TimelineOppositeContent>
                    <TimelineSeparator className={classes.seperator} className={classes.seperator}>
                        <TimelineDot color="secondary">
                            <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className={classes.timelineContent} className={classes.timelineContent}>
                            <Typography variant="h5" className={classes.heading} >
                                Current Employment
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className={classes.timelineItem}>
                    <TimelineOppositeContent className={classes.timelineOppositeContent}>
                        <Card subTitle="Software Engineer" showButton={true} buttonLabel="Work Samples" showTag="Oct 2018 - Feb 2019" data={educationData[1]} />
                    </TimelineOppositeContent>
                    <TimelineSeparator className={classes.seperator} className={classes.seperator}>
                        <TimelineDot color="primary">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className={classes.timelineContent} className={classes.timelineContent}>
                            <Typography variant="h5" className={classes.heading} >
                                Former Employment
                    </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className={classes.timelineItem}>
                    <TimelineOppositeContent className={classes.timelineOppositeContent}>
                        <Card subTitle="Bachelors in Technology" showButton={true} buttonLabel="Degree" showTag="Aug 2013 - May 2017" data={educationData[2]} />
                    </TimelineOppositeContent>
                    <TimelineSeparator className={classes.seperator} className={classes.seperator}>
                        <TimelineDot color="secondary">
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className={classes.timelineContent} className={classes.timelineContent}>
                            <Typography className={classes.heading} variant="h5" >
                                Graduation
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className={classes.timelineItem}>
                    <TimelineOppositeContent className={classes.timelineOppositeContent}>
                        <Card subTitle="Matriculation" showTag="2011 - 2012" data={educationData[3]} />
                    </TimelineOppositeContent>
                    <TimelineSeparator className={classes.seperator}>
                        <TimelineDot color="primary">
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className={classes.timelineContent}>
                            <Typography variant="h5" className={classes.heading} >
                                Secondary Education
                    </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default Education;