import React, { Component } from 'react';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state;
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field control={Input} label="First name" placeholder="First name" />
          <Form.Field control={Input} label="Last name" placeholder="Last name" />
          <Form.Field control={Select} label="Gender" options={options} placeholder="Gender" />
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field
            checked={value === '1'}
            control={Radio}
            label="One"
            onChange={this.handleChange}
            value="1"
          />
          <Form.Field
            checked={value === '2'}
            control={Radio}
            label="Two"
            onChange={this.handleChange}
            value="2"
          />
          <Form.Field
            checked={value === '3'}
            control={Radio}
            label="Three"
            onChange={this.handleChange}
            value="3"
          />
        </Form.Group>
        <Form.Field control={TextArea} label="About" placeholder="Tell us more about you..." />
        <Form.Field control={Checkbox} label="I agree to the Terms and Conditions" />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    );
  }
}

export default FormExampleFieldControl;

