import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTodo, getCategories ,addCategory} from "../../actions/todo";
import CustomModal from "../utility/CustomModal";
import { Button } from "react-bootstrap";

export class Form extends Component {
  state = {
    name: "",
    category: "",
    show: false,
    newCategory: ""
  };

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    getCategories: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCategories();
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onChangeSelect = (e) => {
    this.setState({ category: parseInt(e.target.value) });
  };

  /**
   * @description handles the submit button
   *  */
  onSubmit = (e) => {
    e.preventDefault();
    const { name, category } = this.state;
    const post_data = { name, category };
    this.props.addTodo(post_data);
    this.setState({
      name: "",
    });
  };

  componentWillUpdate(data) {
    if (
      this.state.category === "" &&
      Array.isArray(data.categories) &&
      data.categories.length > 0
    ) {
      this.setState({ category: data.categories[0].id });
    }
  }

  getOptions = () => {
    return this.props.categories.map((item) => (
      <option value={item.id} key={item.id}>
        {item.name}
      </option>
    ));
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  onCategorySubmit =(e)=>{
    e.preventDefault()
    const post_data = { name:this.state.newCategory };
    this.props.addCategory(post_data);
    this.setState({show:false})
  }

  render() {
    return (
      <div className="card card-body mt-4 mb-4">
        <div className="flex-space-between">
          <h2>Add Todo</h2>
          <Button variant="primary" onClick={this.handleShow}>
            Add Category
          </Button>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select onChange={this.onChangeSelect} className="form-control">
              {this.getOptions()}
            </select>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <CustomModal
          handleClose={() => this.setState({ show: false })}
          show={this.state.show}
          value={this.state.newCategory}
          onChange={(e)=>this.setState({newCategory:e.target.value})}
          onSubmit={this.onCategorySubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.todos.categories,
});

export default connect(mapStateToProps, {addCategory, addTodo, getCategories })(Form);
