
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTodos, deleteTodo } from "../../actions/todos";

export class Todos extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        getTodos: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
      };
    
      componentDidMount() {
        this.props.getTodos();
      }
    render() {
        return (
            <Fragment>
        <h2>Todos</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Created At</th>
              <th>Complete</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.created_at}</td>
                <td>{todo.isComplete}</td>
                <td>
                  <button
                    onClick={this.props.deleteTodo.bind(this, todo.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
                <td><button disabled="disabled" className="btn btn-warning btn-sm">update</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
        )
    }
}

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(
  mapStateToProps,
  { getTodos, deleteTodo }
)(Todos);

