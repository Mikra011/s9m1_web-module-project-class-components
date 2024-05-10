import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    name: ''
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.name)
    this.setState({ name: '' })
  }

  onChange = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    const { name } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' value={name} onChange={this.onChange} />
        <input type='submit' />
      </form>
    )
  }
}
