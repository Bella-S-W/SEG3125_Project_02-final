import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {Translation} from 'react-i18next';
import i18n from '../i18n';
import i18next from 'i18next';

const logo = require("../images/logo.png");
class Header extends React.Component {
  render() {  
    const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
    }
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
                <Translation>{
                  t=><a className="nav-link" href="\">{t("HOME")}</a>}
                </Translation>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Family_card">
                  <Translation>{
                  t=><a className="nav-link" href="Family_card">{t("FAMILY")}</a>}
                </Translation>
                  </Link>
                </li>
              <li className="nav-item"><Link to="/Subscribe_plan">
              <Translation>{
                t=><a className="nav-link" href="Subscribe_plan">{t("SUBSCRIBE")}</a>}
                </Translation>
                </Link>
              </li>
                <li className="nav-item">
                  <Link to="/Discussion_page">
                  <Translation>{
                  t=><a className="nav-link" href="Discussion_page">{t("COMMENTS")}</a>}
                </Translation>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to="/Support_page">
                  <Translation>{
                  t=><a className="nav-link" href="Support_page">{t("SUPPORT")}</a>}
                </Translation>
                  </Link>
                </li>
                {/* <li className="nav-item"> */}
                  <li alignSelf='flex-end'>
                  <select name='language' onChange={onChange}>
                    <option value='en'>English</option>
                    <option value='fr'>Français</option>
                  </select>
                  {/* </li> */}
                </li>
            </ul>
          </div>
        </div>
      </nav>
      </header>
    );
  }
}

export default Header