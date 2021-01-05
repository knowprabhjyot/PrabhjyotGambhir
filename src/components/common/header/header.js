import { Box, Button, Drawer, Hidden, IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
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
                <Link  key={index} to={item.to} className={classes.listItem}>
                    <Button fullWidth color="secondary" variant="outlined">
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
                    {showNav()}
                </Hidden>
                <Hidden smUp >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setState(true)}
                    edge="start"
                >
                    <MenuOpenIcon  color="secondary" />
                </IconButton>
                </Hidden>
                {showDrawer()}
            </Box>
        </div>
    )
}

const headerData = [{ name: 'Home', to: '' }, { name: 'About', to: '/about' }, { name: 'Portfolio', to: '/portfolio' }, { name: 'Contact', to: '/contact' }]



export default Header;