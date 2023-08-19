import React from "react";
import { Card, Form, Message } from "semantic-ui-react";
import CardItem from "./CardItem.jsx";
import users from "./users.js";

function ScamCard() {
  return (
    <Card.Group itemsPerRow={4}>
      <CardItem
        img={users[0].img}
        name={users[0].name}
        date={users[0].date}
        detail={users[0].detail}
      />
      <CardItem
        img={users[1].img}
        name={users[1].name}
        date={users[1].date}
        detail={users[1].detail}
      />
      <CardItem
        img={users[2].img}
        name={users[2].name}
        date={users[2].date}
        detail={users[2].detail}
      />
    </Card.Group>
  );
}

export default ScamCard;
