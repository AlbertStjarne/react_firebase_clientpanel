import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

class Login extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center pb-4 pt-3">
                <span className="text-primary">
                  <i className="fas fa-lock"></i>{' '}
                    Login
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired
}
export default firebaseConnect()(Login);