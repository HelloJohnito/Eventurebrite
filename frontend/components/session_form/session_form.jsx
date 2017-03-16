import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);

    this.demo = false;
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }


  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => (
      this.setState({[field]: e.currentTarget.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }
  //
  // navLink() {
  //   if (this.props.formType === "login") {
  //     return <Link to="/signup">sign up instead</Link>;
  //   }
  //   else {
  //     return <Link to="/login">log in instead</Link>;
  //   }
  // }

  handleDemo(e){
    e.preventDefault();
    this.props.processDemo({username: "john", password: "password"});
    this.demo = true;
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const text = this.props.formType === "login" ? "Log In" : "Sign Up";
    return (
      <div>
        <h1 className="form-name">{text}</h1>
        <br/>
        <h1 className="form-option"></h1>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <div>

            <div className="session-error">
              {this.renderErrors()}
            </div>

            <br/>
            <label> Username:
              <input className="form-input" type="text"
                value={this.state.username}
                onChange={this.update("username")}
              />
            </label>
            <br/>
            <label> Password:
              <input className="form-input" type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
            <br/>
            <input className="form-submit" type="submit" value="Submit" />

            <a className="session-demo" onClick={this.handleDemo.bind(this)}>Demo</a>

          </div>

          <div className="session-demo">
          </div>

        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);
