import React, { useState } from "react";
import { GeoChart, Cards, ChartList, GeoWorld, ChoroMap } from "./component";
import data from "./component/GeoWorld.Chart.geo.json";
import "./App.css";

function App() {
  const [property, setProperty] = useState("pop_est");

  return (
    <React.Fragment>
        
      <h2>World Map with d3-geo</h2>
      {/* <ChoroMap /> */}
      <GeoChart  data={data} />
      <h2>Select property to highlight</h2>
       <Cards  />
      
       <ChartList  />
    </React.Fragment>
  );
}

export default App;