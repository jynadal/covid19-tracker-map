import React, { useState } from "react";
import { GeoChart, Cards, ChartList, SearchBox, GeoWorld, ChoroMap } from "./component";
import data from "./component/GeoWorld.Chart.geo.json";
import "./App.css";

function App() {
  const [property, setProperty] = useState("pop_est");
 // const [searchField, setSearchField] = useState("");

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