import React, { Component } from 'react'

class CreateTodo extends Component {
  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state
    })
    this.setState({
      text: ''
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo </label>
            <input type='text' value={this.state.text} onChange={(event) => this.handleChange(event)} />
          </p>
          <input type='submit' />
        </form>
        <ul>
          {this.props.store.getState().todos.map(todo => <li key={todo.text}>{todo.text}</li>)}
        </ul>
      </div>
    )
  }
}

export default CreateTodo
