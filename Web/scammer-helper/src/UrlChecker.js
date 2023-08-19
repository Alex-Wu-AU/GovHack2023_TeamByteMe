import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

const UrlChecker = () => (
  <Form>
    <Form.Field inline>
      <label>Check the url here</label>
      <Input placeholder="Please input the url here" />
      <Button>Check</Button>
    </Form.Field>
  </Form>
)

export default UrlChecker
