import React, { useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";


export default function CharacterCard(props) {
  console.log(props, "Props")
  return (
    <Card>
      {props.img}
      <h2>Name: {props.name}</h2>
      <div className="status">
        Status: <em>{props.status}</em>
      </div>
      <div className="species">
        Species: <em>{props.species}</em>
      </div>
    </Card>
  )
}