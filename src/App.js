import React, { useState } from "react";
import { GeoChart, Cards, ChartList, SearchBox, GeoWorld, ChoroMap } from "./component";
import data from "./component/GeoWorld.Chart.geo.json";
import Header from './Header';
import { Grid } from '@material-ui/core';
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

      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
            {/* <ChoroMap /> */}
            <GeoChart  data={data} />
            <h2>Select property to highlight</h2>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Cards  />
        </Grid>
        <Grid item xs={12} sm={8}>
          <ChartList  />
        </Grid>


      </Grid>

      </Grid>
      
              
      
    // </React.Fragment>
  );
}

export default App;