import React from 'react'
import { Card } from 'semantic-ui-react'
import CardItem from './CardItem.jsx'
import customers from './customers'

function DevCard() {
  return (
    <Card.Group itemsPerRow={3}>
      <CardItem
        img={customers[0].img}
        name={customers[0].name}
        date={customers[0].date}
        detail={customers[0].detail}
        rate={customers[0].rate}
      />
      <CardItem
        img={customers[1].img}
        name={customers[1].name}
        date={customers[1].date}
        detail={customers[1].detail}
        rate={customers[1].rate}
      />
      <CardItem
        img={customers[2].img}
        name={customers[2].name}
        date={customers[2].date}
        detail={customers[2].detail}
        rate={customers[2].rate}
      />
    </Card.Group>
  )
}

export default DevCard
