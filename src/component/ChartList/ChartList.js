import React, { useState, useEffect} from 'react';
import FormRow from './FormRow';
import SearchBox from './SearchBox';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import { Grid} from '@material-ui/core';

import './ChartList.module.css';
import styles from  './ChartList.module.css';

const useStyles = makeStyles((theme) => ({
	root: {
        flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
	},

}));


function ChartList() {

    const [data, setData] = useState([]);
    const [searchResults,setSearchResults] = useState([]);
    const [searchField, setSearchField] = useState("");
  let results;

    const handleChange = evt => setSearchField(evt.target.value);


    useEffect(() => {
        const fetchData = async ()=> {
          try{
            const resp= await axios.get('https://corona.lmao.ninja/v2/countries');
            setData(resp.data);
            setSearchResults(resp.data);
        }
         catch(err){
            throw new Error(err);
         }
        };
        fetchData();
      },[]);
    
      useEffect(() =>{
        const results = searchResults.filter(resp =>
           resp.country.toLowerCase().includes(searchField)
        );
        setData(results)
      },[searchField])
   
    
    const onChange = (evt) => {
    setSearchField(evt.target.value);
    }

    return (
        <div className="Chart">
            <h2>Les Charts des Pays avec des Data par pays</h2>
            <h3>Fetch a list from an API and display it</h3>

             <input type='search'
                    className='search'
                    placeholder="Enter a country"
                    value={searchField}
                    onChange={handleChange}
            />

                             
                             {data.map((country,index) =>(

                             <ul key={index}>

                                 <li>{country.country}</li>
                                <img
												//className={classes.img}
												alt={'Drapeaux de ' + country.country}
												src={country.countryInfo.flag}
											/>
                                            
                                 <li>👨: {country.deaths}</li>
                                 <li>📖: {country.recovered}</li>
                                 <li>🏘️: {country.cases}</li>
                                 <li>🏘️: {country.cases}</li>
                                 <li>🏘️: {index}</li>
                                 </ul>
                                 )
                                 )}
               

        </div>


    );
    
};



export default ChartList;