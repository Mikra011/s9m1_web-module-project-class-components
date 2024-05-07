import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  state = {
    showAll: true
  }

  toggleShowAll = () => {
    this.setState({ showAll: !this.state.showAll })
  }

  render() {
    const { todos, clearList, toggleCompleted } = this.props
    const { showAll } = this.state
    const filtered = showAll ? todos : todos.filter(todo => !todo.completed)
    return (
      <div>
        {filtered.map(todo => (
          <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
        ))}
        <button onClick={this.toggleShowAll}>{showAll ? 'Hide completed' : 'Show all'}</button>
        <button onClick={clearList}>Clear list</button>
      </div>
    )
  }
}
