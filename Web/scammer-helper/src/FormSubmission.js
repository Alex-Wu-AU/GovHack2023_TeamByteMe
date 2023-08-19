import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Message,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

class FormExampleFieldControl extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="First name"
            placeholder="First name"
          />
          <Form.Field
            control={Input}
            label="Last name"
            placeholder="Last name"
          />
          <Form.Field
            control={Select}
            label="Gender"
            options={options}
            placeholder="Gender"
          />
        </Form.Group>
        <Form.Group inline>
          <label>Scam Type</label>
          <Form.Field
            control={Radio}
            label="Phone"
            value="1"
            checked={value === "1"}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label="Text"
            value="2"
            checked={value === "2"}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label="Email"
            value="3"
            checked={value === "3"}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="Detail"
          placeholder="Please enter details..."
        />
        <Form.Field
          control={Checkbox}
          label="I agree to the Terms and Conditions"
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    );
  }
}

export default FormExampleFieldControl;
