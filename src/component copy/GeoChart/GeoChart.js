import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator, min, max, scaleLinear } from "d3";
import useResizeObserver from "./../../useResizeObserver";
//import {Chart} from '../Chart/Chart';
import { fetchCountries} from '../../api';



import  './GeoChart.module.css';

/**
 * Component that renders a map of Germany.
 */

function GeoChart({ data, property }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  //const [selectedCountry, setSelectedCountry] = useState(null);
  const [countries, setCountries] = useState(null);

  // will be called initially and on every data change
  useEffect(() => {

    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    //const dataCountries = {countries.map(country, i)}

    //const minCov = min(fetchCountries.countries, country => fetchCountries[cases]);
    //const maxCov = max(data.features, feature => feature.properties[property]);
    //console.warn(minCov,maxCov);

  

    fetchAPI();
  },[]);

    useEffect(() => {

    const svg = select(svgRef.current);

     //const minProp = min(data.feature,
     // Chart.country => Chart.country.cases);
     const minProp = min(data.features, feature => feature.properties[property]);
     const maxProp = max(data.features, feature => feature.properties[property]);
     console.warn(minProp,maxProp);
     


    // const maxProp = max(data.features, feature => feature.properties[property]);
    console.log(data.features);
     //console.log(fetchCountries.countries.name);

    // const colorScale = scaleLinear()
    //   .domain([minProp, maxProp])
    //   .range(["#ccc", "red"]);

    // use resized dimensions
    // but fall back to getBoundingClientRect, if no dimensions yet.
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // projects geo-coordinates on a 2D plane
    const projection = geoMercator()
      .fitSize([width, height], data)
      //.precision(100);

    // takes geojson data,
    // transforms that into the d attribute of a path element
    const pathGenerator = geoPath().projection(projection);

    // render each country
    svg
      .selectAll(".country")
      .data(data.features)
      .join("path")
    //   .on("click", feature => {
    //     setSelectedCountry(selectedCountry === feature ? null : feature);
    //   })
       .attr("class", "country")
    //   .transition()
    //   //.attr("fill", feature => colorScale(feature.properties[property]))
      .attr("d", feature => pathGenerator(feature));

    // render text
  //   svg
  //     .selectAll(".label")
  //     .data([selectedCountry])
  //     .join("text")
  //     .attr("class", "label")
  //     .text(
  //       feature =>
  //         feature &&
  //         feature.properties.name +
  //           ": " +
  //           feature.properties[property].toLocaleString()
  //     )
  //     .attr("x", 10)
  //     .attr("y", 25);
   }, [data, dimensions, property]);
   //, selectedCountry

  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default GeoChart;