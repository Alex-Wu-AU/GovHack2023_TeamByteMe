import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";

const CommentExampleComment = () => (
  <Comment.Group>
    <Header as="h3" dividing>
      Comments
    </Header>

    <Comment>
      <Comment.Content>
        <Comment.Author as="a">John</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>Thank you!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
    <Form reply>
      <Form.TextArea />
      <Button content="Add Reply" labelPosition="left" icon="edit" />
    </Form>
  </Comment.Group>
);

export default CommentExampleComment;
