import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard'
import axios from 'axios';

export default function LocationsList() {
    
    const [locations, setLocation] = useState([]);

    useEffect(() => {
      axios
        .get("https://rickandmortyapi.com/api/location/")
        .then(res => {
          console.log("location data:", res.data.results);
          setLocation(res.data.results);
        })
        .catch(err => {
          console.error(err);
        });
    }, []);
  
    return (
      <section className="location-list grid-view">
        {locations.map(location => {
          return <LocationCard key={location.id} location={location} />;
        })}
      </section>
    );

}
