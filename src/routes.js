import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import About from './components/about/about';
import Footer from './components/common/footer/footer';
import Header from './components/common/header/header';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import Portfolio from './components/portfolio/portfolio';
import { animated, useTransition, usetransition } from 'react-spring';

const Routes = () => {
    let location = useLocation();
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: "translate(100%, 0)" },
        enter: { opacity: 1, transform: "translate(0%, 0)" },
        leave: { opacity: 0, transform: "translate(-50%, 0)" }
    });
    return (
        <div>
                <Header />
                <Grid sm={12}>
                    <Box display="grid" gridGap="24px">
                        {transitions.map(({ item, props, key }) => (
                            <animated.div key={key} style={props} >
                                <Switch location={item}>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/contact" component={Contact} />
                                    <Route path="/about" component={About} />
                                    <Route path="/portfolio" component={Portfolio} />
                                </Switch>
                            </animated.div>
                        ))}

                        <Footer />
                    </Box>
                </Grid>
        </div>
    )
}

export default Routes;