import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Card from '../common/card/card';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative'
    },
    card: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    image: {
        width: "100%",
        display: "block",
        maxHeight: '300px'
    }
}));

const Portfolio = () => {
    const classes = useStyles();
    let [cardView, setCardView] = useState(-1);

    const showPort = () => {
        return portfolioData.map((item, index) => {
            return (
                <Box className={classes.container}  onMouseEnter={() => setCardView(index)}
                onMouseLeave={() => setCardView(-1)}>
                     <img
                        alt="Prabhjyot Gambhir"
                        key={index}
                        src={item.image}
                        className={classes.image}
                    />
                     <div className={classes.card}>
                            {cardView === index ? <Card data={item} /> : null}
                        </div>
                </Box>
            )
        })
    }

    return (
        <Container maxWidth="lg">
             <Typography variant="h5">
                Portfolio
            </Typography>
            <Box display="grid" gridGap="32px">
                <Typography variant="body2">
                    A developer's experience says its all
            </Typography>
             <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 2}}
            >
            <Masonry gutter="10px">
               {showPort()}
            </Masonry>
            </ResponsiveMasonry>
            </Box>

        </Container>
    )
}

const portfolioData = [
    { title: 'Maven Scholars', description: 'Developed Maven scholars using React & Node. Implemented Continuous deployment using AWS', image: '../images/web6.jpg' },
    { title: 'Know Prabhjyot', description: 'The Web Resume which you are viewing, obviously it is my product too. Made with love in React and Node js and Fully Responsive Website.', image: '../images/web7.jpg' },
    { title: 'Card Design', description: 'Card design description', image: '../images/carddesign.jpg' },
    { title: 'Website 4', description: 'Website 4 description', image: '../images/web4.jpg' },
    { title: 'Website 5', description: 'Website 5 description', image: '../images/web5.jpg' },
    { title: 'Coming Soon 1', description: 'Coming Soon 1 description', image: '../images/coming1.png' },
    { title: 'Coming soon 2', description: 'Coming soon 2 description', image: '../images/coming2.png' }]

export default Portfolio;