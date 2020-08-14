import React, { Component } from "react";
import ReactDOM from "react-dom";
import { schema } from './validation'

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    const { error } = schema.validate({ dateEntered: '12/31/1899' });
    console.log('Error is ',error)
    return (
      <form>
        <p>Sample text to display rendering</p>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;