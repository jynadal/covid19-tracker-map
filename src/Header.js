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
            <h1>Traceurs COVID-19 avec React (Hooks), D3-geo, ...</h1>
            </Typography>
        </Toolbar>
    </AppBar>
    );
   
};

export default Header;