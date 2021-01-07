import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box, Container, Divider, Grid } from '@material-ui/core';
import LanguageSection from './languageSection/languageSection';
import SkillSection from './skillSection/skillSection';
import SocialSection from './socialSection/socialSection';

const useStyles = makeStyles({
    root: {
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center'
        paddingTop: '32px',
        height: '100%'
    },
    media: {
        height: 120,
        width: 120,
        borderRadius: '50%',
        margin: 'auto'
    },
    details: {
        color: '#fff'
    },
    container: {
        height: '100%'
    }
});

const LeftPanel = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root} bgcolor="primary.A600">
            <Container className={classes.container}>
                <Box>
                    <CardMedia
                        className={classes.media}
                        image="./images/me.jpg"
                        title="Prabhjyot Gambhir"
                    />
                    <CardContent>
                        <Box display="grid" gridGap="16px">
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Typography variant="h5" component="h2">
                                    Prabhjyot Gambhir
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Full Stack Web Developer
                                </Typography>
                            </Box>
                            <Divider />
                            <div>
                                <Grid container>
                                    <Box width="100%" display="grid" gridTemplateColumns="auto" gridGap="8px">
                                    <Box display="flex" justifyContent="space-between">
                                    <Typography variant="subtitle2">
                                        Residence:
                                    </Typography>
                                    <Typography variant="body2">
                                        India
                                    </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between">
                                    <Typography variant="subtitle2">
                                        City:
                                    </Typography>
                                    <Typography variant="body2">
                                        Delhi
                                    </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between">
                                    <Typography variant="subtitle2">
                                        Age
                                    </Typography>
                                    <Typography variant="body2">
                                        26
                                    </Typography>
                                    </Box>
                                    </Box>
                                </Grid>
                            </div>
                            <Divider />
                            <Box display="flex" justifyContent="space-around" >
                                <LanguageSection />
                            </Box>
                            <Divider />
                            <Box display="flex" flexDirection="column">
                                <SkillSection />
                            </Box>
                            <Divider />
                            <Box>
                                <SocialSection />
                            </Box>
                        </Box>
                    </CardContent>

                </Box>
            </Container>
        </Box>
    )
}

export default LeftPanel;