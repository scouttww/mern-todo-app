import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteTodo from "./delete-todo.component";

const Todo = props => (
  <tr>
    <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
    <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
    <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
      <br />
      <DeleteTodo id={props.todo._id}/>
    </td>
  </tr>
)



export default class TodosList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };

  }

  onDeleteTodo() {
    setTimeout(() => {
      this.getData()
    }, 250)
  }

  componentDidMount() {
    setTimeout(() => {
      this.getData()
    }, 250)
  }

  getData = () => {
    axios.get('http://localhost:4000/todos/')
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }} >
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.todoList()}
          </tbody>
        </table>
      </div>
    )
  }

  todoList() {
    this.state.todos.sort((a, b) => {
      return b._id - a._id;

    });
    return this.state.todos.map((currentTodo) => {
      return <Todo todo={currentTodo} key={currentTodo._id}/>;
    })
  }

}

