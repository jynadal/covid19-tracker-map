import React, { useState, useEffect} from 'react';

//import Form from 'react-bootstrap/Form';
import Form, { Input, Fieldset } from 'react-bootstrap-form';

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

         

    return (
        <div className="Chart">
            <h2>Les Charts des Pays avec des Data par pays</h2>
            <h3>Fetch a list from an API and display it</h3>

            {/* <div className="countries"> */}

                {results && results.map((country, index) => {
                    const lastUpdate = new Date(country.updated).toLocaleDateString();

                return (
                    <div className="country" key={country.countryInfo.iso3}>
                        <h3>{country.countryInfo.iso3}</h3>
                        <h2>{country.country}</h2>

                        <div className="details">
                        <p>👨: {country.deaths}</p>
                        <p>📖: {country.recovered}</p>
                        <p>🏘️: {country.cases}</p>
                        <p>⏰: {lastUpdate}</p>
                        </div>

                    </div>
                );

                
                })};

            {/* </div> */}




        </div>


    )
    
};



export default Chart;