import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTodos, deleteTodo, updateTodo } from "../../actions/todo";
import { Link } from "react-router-dom";

export class Todos extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    getTodos: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getTodos();
  }

  checkboxChange(data, e) {
    this.props.updateTodo({ id: data.id, isComplete: e.target.checked });
  }

  getData(data) {
    return data && data.category_name
      ? data.category_name
      : null;
  }

  render() {
    return (
      <Fragment>
        {this.props.todos.length > 0 ? (
          <div>
            <h2>Todos</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Created At</th>
                  <th>Complete</th>
                  <th>Category</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.props.todos.map((todo) => (
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.name}</td>
                    <td>{todo.created_at}</td>
                    <td>
                      <input
                        type="checkbox"
                        onChange={this.checkboxChange.bind(this, todo)}
                        className="form-check-input"
                        name="isComplete"
                        defaultChecked={todo.isComplete}
                      ></input>
                    </td>
                    <td>{this.getData(todo)}</td>
                    <td>
                      <button
                        onClick={this.props.deleteTodo.bind(this, todo.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link
                        to={{
                          pathname: `/todo/${todo.id}`,
                          query: { id: todo.id },
                        }}
                        className="btn btn-warning btn-sm"
                      >
                        Update
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="alert alert-primary">NO Todos Created yet.</div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  categories: state.todos.categories,
});

export default connect(mapStateToProps, { getTodos, deleteTodo, updateTodo })(
  Todos
);
