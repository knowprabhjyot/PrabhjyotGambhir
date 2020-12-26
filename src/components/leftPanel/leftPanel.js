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
        paddingTop: '32px'
    },
    media: {
        height: 120,
        width: 120,
        borderRadius: '50%',
        margin: 'auto'
    },
});

const LeftPanel = () => {
    const classes = useStyles();
    return (
            <Box className={classes.root} bgcolor="primary.A600">
                <Container>
                    <Box>
                        <CardMedia
                            className={classes.media}
                            image="./images/me.jpg"
                            title="Prabhjyot Gambhir"
                        />
                        <CardContent>
                            <Box display="grid" gridGap="8px">
                                <div>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Prabhjyot Gambhir
                </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Full Stack Web Developer
                </Typography>
                                </div>
                                <div>
                                    <Grid container>
                                        <Grid item xs={3}>
                                            Residence:
                            </Grid>
                                        <Grid item xs={9}>
                                            India
                            </Grid>
                                        <Grid item xs={3}>
                                            City:
                            </Grid>
                                        <Grid item xs={9}>
                                            Delhi
                            </Grid>
                                        <Grid item xs={3}>
                                            Age
                            </Grid>
                                        <Grid item xs={9}>
                                            26
                            </Grid>
                                    </Grid>
                                </div>
                                <Divider />
                                <Box display="flex" justifyContent="space-evenly">
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