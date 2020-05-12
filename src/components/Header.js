import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav  pull-xs-right">

        <li className="nav-item">
          <Link to="/h2h/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/h2h/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/h2h/register" className="nav-link">
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
          <Link to="/h2h/" className="nav-link">
            <i className="ion-home"></i>&nbsp;Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/h2h/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item dropdown">
          <a href="" className="nav-link"><i className="ion-person"></i>&nbsp;{props.currentUser.username}</a>
          <div className="dropdown-content">
            <Link to={`/h2h/@${props.currentUser.username}`} className="nav-link">
              <i className=""></i>&nbsp;Profile
            </Link>
            <Link to="/h2h/settings" className="nav-link">
              <i className=""></i>&nbsp;Edit Profile
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

          <Link to="/h2h" className="navbar-brand">
            <h4 className="brandColor">{this.props.appName}</h4>
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
