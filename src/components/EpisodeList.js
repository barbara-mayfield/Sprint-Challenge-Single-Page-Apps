import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard'

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisode] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        console.log(res.data.results, "Character Data");
        setEpisode(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <section className="episode-list grid-view">
    {episodes.map(episode => {
        return <EpisodeCard 
                      key={episode.id}
                      episode={episode} 
                       />;
      })}
    </section>
  );
}