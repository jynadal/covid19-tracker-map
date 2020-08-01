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
        <Toolbar style={{backgroundColor:"lightskyblue"}}>
            <Typography //className={classes.typographyStyles}
            >
            Traceurs COVID-19 avec React, D3-geo, ...
            </Typography>
        </Toolbar>
    </AppBar>
    );
   
};

export default Header;