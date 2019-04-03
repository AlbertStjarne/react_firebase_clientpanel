import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AddClient extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left"></i> Back To Dashboard
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default AddClient;