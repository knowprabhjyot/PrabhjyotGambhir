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
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
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
    { title: 'Maven Scholars', description: 'Developed Maven scholars from scratch in React & Node and officially I am the Co-Founder of the company', image: '../images/web1.jpg' },
    { title: 'Website 3', description: 'Website 3 description', image: '../images/web3.jpg' },
    { title: 'Card Design', description: 'Card design description', image: '../images/carddesign.jpg' },
    { title: 'Website 4', description: 'Website 4 description', image: '../images/web4.jpg' },
    { title: 'Website 5', description: 'Website 5 description', image: '../images/web5.jpg' },
    { title: 'Coming Soon 1', description: 'Coming Soon 1 description', image: '../images/coming1.png' },
    { title: 'Coming soon 2', description: 'Coming soon 2 description', image: '../images/coming2.png' }]

export default Portfolio;