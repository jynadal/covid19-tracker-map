import React, { useState } from "react";
import { GeoChart, Cards, ChartList, SearchBox, GeoWorld } from "./component";
import data from "./component/GeoWorld.Chart.geo.json";
import Header from './Header';
import { Grid, Box } from '@material-ui/core';
import "./App.css";




function App() {
  const [property, setProperty] = useState("pop_est");
 // const [searchField, setSearchField] = useState("");

  return (

    // <React.Fragment>
      <Grid container direction="column">
      <Grid item>
          <Header />
      </Grid>    

      <Box display={{ xs: 'none', md: 'block' }} // m={1} 
      style={{backgroundColor:"lightskyblue"}}>      
        <Grid item>
            {/* <ChoroMap /> */}
            <GeoChart  data={data} />
              <h2>GeoChart property to highlight</h2>
        </Grid>
      </Box>

      {/* <Grid item container  style={{backgroundColor:"grey"}}>        
      <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={12}>
        <h2>Nombre de personne ayant contractés la Covid-19 dans le monde.</h2>
          <Cards  />
        </Grid>
      </Grid> */}
      

      {/* <Grid item container style={{backgroundColor:"lightgrey"}}>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>  
        <ChartList  />        
        </Grid>
      </Grid> */}

      <Grid item>
          <Header />
      </Grid>

      </Grid>
      
              
      
    // </React.Fragment>
  );
}

export default App;