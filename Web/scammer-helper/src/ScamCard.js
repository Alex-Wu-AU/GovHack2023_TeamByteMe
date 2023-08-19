import React from "react";
import { Card, Segment } from "semantic-ui-react";
import WarningCard from "./WarningCard.jsx";
import users from "./users.js";
import InvestigateCard from "./InvestigateCard.jsx";
import SafeCard from "./SafeCard.jsx";

function ScamCard() {
  return (
    <Card.Group itemsPerRow={4}>
      <WarningCard
        img={users[0].img}
        name={users[0].name}
        date={users[0].date}
        detail={users[0].detail}
      />
      <InvestigateCard
        img={users[1].img}
        name={users[1].name}
        date={users[1].date}
        detail={users[1].detail}
      />
      <SafeCard
        img={users[2].img}
        name={users[2].name}
        date={users[2].date}
        detail={users[2].detail}
      />
    </Card.Group>
  );
}

export default ScamCard;
