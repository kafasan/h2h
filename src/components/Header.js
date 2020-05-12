import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  LOGOUT
} from '../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.settings,
});

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: LOGOUT })
});

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav  pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav  pull-xs-right">
        <li className="nav-item">
        <form className="Search" onSubmit={e => e.preventDefault()}>
          <input type="text" className="Search-box" placeholder="Search post" onChange={this.handleChange}/>
        </form>
        </li>
        
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="ion-home"></i>&nbsp;Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item dropdown">
          <a href="" className="nav-link"><i className="ion-person"></i>&nbsp;{props.currentUser.username}</a>
          <div className="dropdown-content">
            <Link to={`/@${props.currentUser.username}`} className="nav-link">
              <i className=""></i>&nbsp;Profile
            </Link>
            <Link to="/settings" className="nav-link">
              <i className=""></i>&nbsp;Edit Profile
            </Link>
            <Link to="/" onClick={props.onClick} className="nav-link">
              <i className="" ></i>&nbsp;Logout
            </Link>
          </div>         
        </li>
      </ul>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
            <h4 className="brandColor">{this.props.appName}</h4>
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} onClick={this.props.onClickLogout}/>

        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
