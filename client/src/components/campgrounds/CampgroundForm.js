import React, {Component } from 'react';
import { Form } from 'semantic-ui-react';

class CampgroundForm extends Component {
  state = {name: '', location: '', description: '', sites: '', price: ''};

  campgroundSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { updateCampground, toggleEdit } = this.props
      updateCampground(this.props.id, this.state)
      toggleEdit()
    } else {
      this.props.addCampground(this.state);
    }
    this.setState({name: '', location: '', description: '', sites: '', price: ''})
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  componentDidMount() {
    if (this.props.id) {
      const { id, name, location, description, sites, prices } = this.props
      this.setState({ id, name, location, description, sites, prices })
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Name"
          placeholder="Add name of Campground"
          required
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Location"
          placeholder="Add location of Campground"
          required
          name="location"
          value={this.state.Campground}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Description"
          placeholder="Add description of Campground"
          required
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Sites"
          placeholder="Add sites of Campground"
          required
          name="sites"
          value={this.state.sites}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Prices"
          placeholder="Add prices of Campground"
          required
          name="prices"
          value={this.state.price}
          onChange={this.handleChange}
        />
        <Form.Button color="lightgreen">Submit</Form.Button>
      </Form>
    )
  }
}

export default CampgroundForm
