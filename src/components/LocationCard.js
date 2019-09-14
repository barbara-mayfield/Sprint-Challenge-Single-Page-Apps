import React from "react";
import { Card } from 'semantic-ui-react';

export default function LocationCard({ location }) {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{location.name}</Card.Header>
          <Card.Meta>{location.dimension}</Card.Meta>
          <Card.Description> {location.created}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
