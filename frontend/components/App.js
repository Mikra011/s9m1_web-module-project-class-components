import React, { Component } from 'react'
import Form from './Form'
import TodoList from './TodoList'

export default class App extends Component {
  state = {
    todos: [{
      id: 0,
      name: 'Write a todolist',
      completed: false  
    }]
  }

  getId = () => {
    const { todos } = this.state
    return todos.length ? todos[todos.length - 1].id + 1 : 0
  }

  addTodo = (name) => {
    const newTodo = {
      id: this.getId(),
      name,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => (id === todo.id ? { ...todo, completed: !todo.completed } : todo))
    })
  }

  clearList = () => {
    this.setState({ todos: [] })
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <TodoList todos={todos} toggleCompleted={this.toggleCompleted} clearList={this.clearList} />
        <Form addTodo={this.addTodo} />
      </div>
    )
  }
}
