import { Box } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BannerSection from './components/bannerSection/bannerSection';
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
                    <BannerSection />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                    <Footer />
                </Box>
            </BrowserRouter>
        </div>
    )
}

export default Routes;