import React from 'react';
import { AutoComplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons';
const Header = () => {
    return (
        <AppBar positiion = "static">
            <Toolbar className ={classes.toolbar}>
                <Typography vairant = "h5" className = {classes.title}>
                    Travel Advisor

                </Typography>
                <Box display = "flex">
                <Typography vairant = "h6" className = {classes.title}>
                    Explore new climbing places

                </Typography>
                <AutoComplete>
                    <div className={classes.search}>
                        <div className = {classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placebolder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput}}/>
                    </div>
                </AutoComplete>
                </Box>
            </Toolbar>
        </AppBar>
        );
}

export default Header;