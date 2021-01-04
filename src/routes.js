import { Box } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/about/about';
import Footer from './components/common/footer/footer';
import Header from './components/common/header/header';
import Contact from './components/contact/contact';
import Home from './components/home/home';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Box display="grid" gridGap="24px">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                    </Switch>
                    <Footer />
                </Box>
            </BrowserRouter>
        </div>
    )
}

export default Routes;