import { Box, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    listItem: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        margin: theme.spacing(2)
        }
}));

const Header = () => {
    const classes= useStyles();

    const showNav = () => {
        return headerData.map((item, index) => {
            return (
                <Link key={index} to={item.to} className={classes.listItem}>
                    <Button color="secondary" variant="outlined">
                        {item.name}
                    </Button>
                </Link>
            )
        })
    }

    return (
        <div>
            <Box display="flex">
                {showNav()}
            </Box>
        </div>
    )
}

const headerData = [{ name: 'Home', to: '' }, { name: 'About', to: '/about' }, { name: 'Portfolio', to: '/portfolio' }, { name: 'Contact', to: '/contact' }, { name: 'Blog', to: '/blog' }]



export default Header;