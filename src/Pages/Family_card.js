import React from "react";
import {Link} from "react-router-dom";
import {Translation} from 'react-i18next';

const HouseOfArryn = require("../images/HOUSE OF ARRYN.png");
const HouseOfBaratheon = require("../images/HOUSE OF BARATHEON.png");
const HouseOfLannister = require("../images/HOUSE OF LANNISTER.png");
const HouseOfMartell = require("../images/HOUSE OF MARTELL.png");
const HouseOfStark = require("../images/HOUSE OF STARK.png");
const HouseOfTargaryen = require("../images/HOUSE OF TARGARYEN.png");
const HouseOfTully = require("../images/HOUSE OF TULLY.png");
const HouseOfTyrell = require("../images/HOUSE OF TYRELL.png");

class Family_card extends React.Component{
    render(){
        return(           
        <section id ="services">
        <div className="container text-center">
          <Translation>{
          t=><h1 className ="title_service">{t("FAMILY")}</h1>}
          </Translation>
          <div className="row  text-center bg-light">
            <div className="col-md-3 services">
              <img src={HouseOfArryn} className="service_img"/>
              <Translation>{
              t=><h4>{t("HOUSE OF ARRYN")}</h4>}
              </Translation>
              <Translation>{
              t=><h5>{t("As High as Honor.")}</h5>}
              </Translation>
              <Translation>{
              t=><Link to="/Arryn_tree_with_title" className="btn btn-secondary">{t("LEARN MORE")}</Link>}
              </Translation>
            </div>
            <div className="col-md-3 services">
             <img src={HouseOfTully}className="service_img"/>
              <Translation>{
             t=><h4>{t("HOUSE OF TULLY")}</h4>}
              </Translation>
              <Translation>{
             t=><h5>{t("Family, Duty, Honor.")}</h5>}
              </Translation>
              <Translation>{
              t=><Link to="/Tully_tree_with_title#" className="btn btn-secondary">{t("LEARN MORE")}</Link>}
              </Translation>
           </div>
           <div className="col-md-3 services">
             <img src={HouseOfStark} className="service_img"/>
              <Translation>{
             t=><h4>{t("HOUSE OF STARK")}</h4>}
              </Translation>
              <Translation>{
             t=><h5>{t("Winter Is Coming.")}</h5>}
              </Translation>
              <Translation>{
              t=><Link to="/Stark_tree_with_title" className="btn btn-secondary">{t("LEARN MORE")}</Link>}
              </Translation>
           </div>
           <div className="col-md-3 services">
             <img src={HouseOfTargaryen} className="service_img"/>
              <Translation>{
             t=><h4>{t("HOUSE OF TARGARYEN")}</h4>}
              </Translation>
              <Translation>{
             t=><h5>{("Fire and Blood.")}</h5>}
              </Translation>
              <Translation>{
            t=><Link to="/Targaryen_tree_with_title" className="btn btn-secondary">{t("LEARN MORE")}</Link>}
              </Translation>
           </div>
           <div className="col-md-3 services">
             <img src={HouseOfBaratheon} className="service_img"/>
              <Translation>{
             t=><h4>{t("HOUSE OF BARATHEON")}</h4>}
              </Translation>
              <Translation>{
             t=><h5>{t("Ours is the Fury.")}</h5>}
              </Translation>
              <Translation>{
            t=><Link to="/Baratheon_tree_with_title" className="btn btn-secondary">{t("LEARN MORE")}</Link>}
              </Translation>
           </div>
           <div className="col-md-3 services">
             <img src={HouseOfLannister} className="service_img"/>
              <Translation>{
             t=><h4>{t("HOUSE OF LANNISTER")}</h4>}
              </Translation>
              <Translation>{
             t=><h5>{t("A gold lion, on a crimson field.")}</h5>}
              </Translation>
              <Translation>{
            t=><Link to="/Lannister_tree_with_title" className="btn btn-secondary">{t("LEARN MORE")}</Link>}
              </Translation>
           </div>
           <div className="col-md-3 services">
            <img src={HouseOfTyrell} className="service_img"/>
              <Translation>{
            t=><h4>{t("HOUSE OF TYRELL")}</h4>}
              </Translation>
              <Translation>{
            t=><h5>{t("Growing Strong.")}</h5>}
              </Translation>
              <Translation>{
            t=><Link to="/Tyrell_tree_with_title" className="btn btn-secondary">{t("LEARN MORE")}</Link>}
              </Translation>
          </div>
          <div className="col-md-3 services">
            <img src={HouseOfMartell} className="service_img"/>
              <Translation>{
            t=><h4>{t("HOUSE OF MARTELL")}</h4>}
              </Translation>
              <Translation>{
            t=><h5>{t("Unbowed, Unbent, Unbroken.")}</h5>}
              </Translation>
              <Translation>{
            t=><Link to="/Martell_tree_with_title" className="btn btn-secondary">{t("LEARN MORE")}</Link>}
              </Translation>
          </div>
          <div className="row align-items-center services">
            <Translation>{
            t=><Link to="/Subscribe_plan" className="btn btn-secondary">{t("Customize your own family card")}</Link>}
            </Translation>
          </div>
          </div>
        </div>
      </section>)
    }
}

export default Family_card;
