//ATTENTION utilisation de AXIOS pour le fetch mais  à changer par useFetch ou fetch
import axios from 'axios';
import React, { useState, useEffect} from 'react';

export const fetchCountries = async () => {
    fetch('https://corona.lmao.ninja/v2/countries')
            .then(response => response.ok && response.json())
            .then(dataItems => fetchCountries(dataItems));
    //.catch(error => console.log(error));    


    // try {
    //   const { data: { countries } } = await axios.get(`${url}/countries`);
  
    //   return countries.map((country) => country.name);
    // } catch (error) {
    //   return error;
    // }
  };




// useEffect(() => {
//     fetch('https://corona.lmao.ninja/v2/countries')
//         .then(response => response.ok && response.json())
//         .then(dataItems => setResults(dataItems));
// //.catch(error => console.log(error));    
// }, []);