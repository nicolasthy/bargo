import React, { Component } from 'react';
import firebase from 'firebase';
import { reduxForm } from 'redux-form';
import { loginUser } from '../actions/index';

import SignupForm from './SignupForm';

class LoginForm extends Component {
  state = { login: true }

  onSubmit(props) {
    this.props.loginUser(props);
  }

  renderForm() {
    if(this.state.login) {
      const { fields: { bgoEmail, bgoPassword }, handleSubmit } = this.props;

      return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className={`form-group ${bgoEmail.touched && bgoEmail.invalid ? 'has-danger' : ''}`}>
            <label>Email</label>
            <input type="text" className="form-control" {...bgoEmail} />
            <div className="text-help">
              {bgoEmail.touched ? bgoEmail.error : ''}
            </div>
          </div>

          <div className={`form-group ${bgoPassword.touched && bgoPassword.invalid ? 'has-danger' : ''}`}>
            <label>Password</label>
            <input type="password" className="form-control" {...bgoPassword} />
            <div className="text-help">
              {bgoPassword.touched ? bgoPassword.error : ''}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>

        </form>
      );
    }

    return <SignupForm />;
  }

  render() {
    return(
      <div>
        {this.renderForm()}
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.bgoEmail) {
    errors.bgoEmail = 'Enter your email adress';
  }
  if (!values.bgoPassword) {
    errors.bgoPassword = 'Enter your password';
  }

  return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'LoginUserForm',
  fields: ['bgoEmail', 'bgoPassword'],
  validate
}, null, { loginUser })(LoginForm);
