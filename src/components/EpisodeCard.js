import React from "react";
import { Card } from "semantic-ui-react";

export default function EpisodeCard({ episode }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{episode.name}</Card.Header>
        <Card.Meta>{episode.air_date}</Card.Meta>
        <Card.Description>{episode.id}</Card.Description>
      </Card.Content>
    </Card>
  );
}