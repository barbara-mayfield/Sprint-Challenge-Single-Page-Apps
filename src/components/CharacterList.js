import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data.results, "Character Data");
        setCharacter(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <section className="character-list grid-view">
    {character.map(props => {
        return <CharacterCard 
                      key={props.id}
                      img={props.img}
                      char={props} 
                      name={props.name}
                      status={props.status}
                      species={props.species}
                       />;
      })}
    </section>
  );
}