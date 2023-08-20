import React from "react";
import { Card, Image, Message } from "semantic-ui-react";
import CommentExampleComment from "./UserComment";

const InvestigateCard = (props) => {
  return (
    <Card>
      <Image src={props.img} wrapped ui={false} size="small" />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.date}</Card.Meta>
        <Card.Description>{props.detail}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Message
          warning
          header="Under investigation"
          content="Byteme: please change your password immediately!"
        />
      </Card.Content>
      <Card.Content>
        <CommentExampleComment />
      </Card.Content>
    </Card>
  );
};

export default InvestigateCard;
