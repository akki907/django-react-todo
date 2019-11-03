import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  componentDidMount(){
    if(this.props.isAuthenticated){
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.isAuthenticated){
      this.props.history.push('/')
    }
    else if(nextProps.errors){
      this.setState({errors:nextProps.errors})
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
