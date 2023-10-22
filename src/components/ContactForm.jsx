import React, { Component } from 'react';


export class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

      handleSubmit = e => { 
    e.preventDefault();
    const contact = {
        name: e.currentTarget.elements.name.value,
        number: e.currentTarget.elements.number.value,
    }
          this.props.handleAddContact(contact)

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="submit">
          <label htmlFor="">
            <p>Name</p>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                </label>
                <label htmlFor="">
                    <p>Number</p>
                    <input type="tel" name="number" value={this.state.number} onChange={this.handleChange} required />
                </label>

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
