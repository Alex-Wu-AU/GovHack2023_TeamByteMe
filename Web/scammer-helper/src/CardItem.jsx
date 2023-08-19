import React from 'react'
import { Card, Icon, Image, Header, CardContent } from 'semantic-ui-react'
import CommentExampleComment from './UserComment'

const CardItem = (props) => {
  return (
    <Card>
      <Image src={props.img} wrapped ui={false} size="small" />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.date}</Card.Meta>
        <Card.Description>{props.detail}</Card.Description>
      </Card.Content>
      <Card.Content>
        <CommentExampleComment />
      </Card.Content>
    </Card>
  )
}

export default CardItem
