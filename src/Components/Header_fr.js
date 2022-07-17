import React from 'react';
import { NavLink, Link } from 'react-router-dom';
const logo = require("../images/logo.png");

class Header_fr extends React.Component {
  render() {
    return (<header>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src ={logo}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link" href="\">DOMICILE</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Family_card">
                  <a className="nav-link" href="Family_card">FAMILLE</a>
                  </Link>
                </li>
              <li className="nav-item"><Link to="/Subscribe_plan">
                <a className="nav-link" href="Subscribe_plan">S'ABONNER</a></Link>
              </li>
                <li className="nav-item">
                  <Link to="/Discussion_page">
                  <a className="nav-link" href="Discussion_page">COMMENTAIRES</a>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to="/Support_page">
                  <a className="nav-link" href="Support_page">SUPPORT</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <form className="form-inline my-2 my-lg-0">
                  <Link to="/Support_page">
                  <a className="nav-link" href="Support_page">English</a>
                  </Link>
                  </form>
                </li>  
            </ul>
          </div>
        </div>
      </nav>
      </header>
    );
  }
}

export default Header_fr;