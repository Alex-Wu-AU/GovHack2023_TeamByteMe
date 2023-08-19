import React from 'react'
import { Card, Icon, Image, Header } from 'semantic-ui-react'

const CardItem = (props) => {
  return (
    <Card>
      <Image src={props.img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.date}</Card.Meta>
        <Card.Description>{props.detail}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="star" />
          {props.rate}
        </a>
      </Card.Content>
    </Card>
  )
}

export default CardItem
