import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';


// const useStyle = makeStyles(() =>({
//     typographyStyles: {
//         flex: 1
//     }
// }));

const Header = () => {
    // const classes = useStyle();
    return ( 
    <AppBar position="static">
        <Toolbar>
            <Typography //className={classes.typographyStyles}
            >
            World Map with d3-geo
            </Typography>
        </Toolbar>
    </AppBar>
    );
   
};

export default Header;