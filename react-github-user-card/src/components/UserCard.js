import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Image } from 'semantic-ui-react';

const UserCard = props => {
    return (
        <Card>
        <Image src={props.imgURL} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>{props.username}</Card.Meta>
          <Card.Description>{props.bio}</Card.Description>
        </Card.Content>  
        </Card>
    );
};

export default UserCard;