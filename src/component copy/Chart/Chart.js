import React, { useState, useEffect} from "react";

import './Chart.module.css';


function Chart() {

    const [results,setResults] = useState(null);
    const [searchCountries, setSearchCountries] = useState("");

    useEffect(() => {
        fetch('https://corona.lmao.ninja/v2/countries')
            .then(response => response.ok && response.json())
            .then(dataItems => setResults(dataItems));
    //.catch(error => console.log(error));    
    }, []); 
    
    // const filterCountry = results.filter(item => {
    //   return item.country === searchCountries;
    // })

    // const handleChange = evt => setSearchCountries(evt.target.value)


  return (
    <div className="Charts">
        {/* //APP */}
       <h2>Les Charts des Pays avec des Data par pays</h2>
            <h3>Fetch a list from an API and display it</h3>
            

      {/* Fetch data from API 
      <div>
        <button className="fetch-button" onClick={fetchBooks}>
          Fetch Data
        </button>
        <br />
      </div>*/}

      {/* Display data from API */}

      {/* Use JSX below for each book */}

      <div className="chart">
      
      {results &&
			filterCountry.map((country, index) => {
					//const lastUpdate = new Date(country.updated).toLocaleDateString();

	    return (
              <div className="card" key={country.index}>
                <h3><img 
					alt={'Drapeaux de ' + country.country}
					src={country.flag}/></h3>
                <h2>{country.country}</h2>

                <div className="details">
                  <p>👨: {country.deaths}</p>
                  <p>📖: {country.recovered}</p>
                  <p>🏘️: {country.index}</p>
                  <p>⏰:  {country.cases}</p>
                </div>
              </div>
            );
          })}
        ;
      </div>

    </div>
  );
}



export default Chart;