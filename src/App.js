import React, { useState } from "react";
import { GeoChart, Cards, ChartList, SearchBox, GeoWorld } from "./component";
import data from "./component/GeoWorld.Chart.geo.json";
import Header from './Header';
import { Grid, Box, MenuItem, InputLabel, FormControl, Button, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "./App.css";


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
}));




function App() {
  const classes = useStyles();
  const [property, setProperty] = useState("pop_est");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setProperty(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  //const [property, setProperty] = useState("pop_est");
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
            <GeoChart  data={data} property={property}/>
              <h2>GeoChart property to highlight</h2>
              {/* <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button> */}

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Data Covid-19</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}          
          value={property}
          onChange={handleChange}
        >
          <MenuItem value="pop_est">
            <em>Populations</em>
          </MenuItem>
          <MenuItem value="cases">Cas de Covid</MenuItem>
          <MenuItem value="recovered">Guéris</MenuItem>
          <MenuItem value="deaths">Décés</MenuItem>
        </Select>
      </FormControl>


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