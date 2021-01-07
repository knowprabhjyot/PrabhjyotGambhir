import { Box, Button, Drawer, Hidden, IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    listItem: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        margin: theme.spacing(2)
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    container: {
        [theme.breakpoints.down("xs")]: {
            justifyContent: 'flex-end'
        }
    },
    arrow: {
        [theme.breakpoints.down("xs")]: {
            position: 'absolute',
            top: '40px',
            right: 0
        }
    },
    nav: {
        display: 'flex',
        [theme.breakpoints.down("md")]: {
            position: 'absolute',
            top: 0,
            left: '48px'
        },
        [theme.breakpoints.down("sm")]: {
            top: 0,
            left: 'unset',
            right: '48px'
        }
    }
}));

const Header = () => {
    const classes = useStyles();
    const [state, setState] = React.useState(false);

    const showDrawer = () => {
        return (
            <Drawer anchor="right" open={state} onClose={() => setState(false)}>
                <Box height="100vh" display="flex" flexDirection="column" bgcolor="primary.main">
                    {showNav()}
                </Box>
            </Drawer>
        )
    }

    const showNav = () => {
        return headerData.map((item, index) => {
            return (
                <Link key={index} to={item.to} className={classes.listItem}>
                    <Button onClick={() => setState(false)} fullWidth color="secondary" variant="outlined">
                        {item.name}
                    </Button>
                </Link>
            )
        })
    }

    return (
        <div>
            <Box className={classes.container} justifyContent="flex-start" display="flex">
                <Hidden xsDown>
                    <Box className={classes.nav}>
                        {showNav()}
                    </Box>
                </Hidden>
                <Hidden smUp >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setState(true)}
                    edge="start"
                    className={classes.arrow}
                >
                    <ArrowBack color="secondary" />
                </IconButton>
                </Hidden>
                {showDrawer()}
            </Box>
        </div>
    )
}

const headerData = [{ name: 'Home', to: '' }, { name: 'About', to: '/about' }, { name: 'Portfolio', to: '/portfolio' }, { name: 'Contact', to: '/contact' }]



export default Header;