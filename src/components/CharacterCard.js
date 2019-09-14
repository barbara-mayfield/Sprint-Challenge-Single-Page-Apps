import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";


export default function CharacterCard(props) {
  console.log(props, "Props")
  return (
    <Card>
      <Image src={props.img} />
      <Card.Content>
        <Card.Header>Name: {props.name}</Card.Header>
        <Card.Meta>Species: {props.species}</Card.Meta>
        <Card.Description>Location: {props.location}</Card.Description>
      </Card.Content>
    </Card>
  )
}