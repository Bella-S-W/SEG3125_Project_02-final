import React from "react";
import {Link} from "react-router-dom";
import SimpleForm from "../Components/chatbot/SimpleForm";
import {Translation, useTranslation} from 'react-i18next';

// const homepage_background = require("../images/homepage_background.png");

class Subscribe_plan extends React.Component{
  render(){
      return(           
      <section id ="services">
      <div className="container text-center">
        <Translation>{
        t=><h1 className ="title_service">{t("SUBSCRIBE")}</h1>}
        </Translation>
        <div className="row  text-center">
        <div className="col-md-3 services bg-light">
          <Translation>{
           t=><h4>{t("Free")}</h4>}
          </Translation>
          <Translation>{
            t=><h5>{t("Customize one family for free")}</h5>}
          </Translation>
          <Translation>{
           t=><h2>{t("Free")}</h2>}
          </Translation>
            <Link to="/Payment_page" className="btn btn-dark">Select</Link>
         </div>
          <div className="col-md-3 services bg-light">
          <Translation>{
           t=><h4>{t("Basic")}</h4>}
          </Translation>
          <Translation>{
            t=><h5>{t("Customize your own family per Month")}</h5>}
          </Translation>
            <h2>$2.99</h2>
            <Link to="/Payment_page" className="btn btn-dark">Select</Link>
          </div>
          <div className="col-md-3 services bg-light">
          <Translation>{
           t=><h4>{t("Standard")}</h4>}
          </Translation>
          <Translation>{
            t=><h5>{t("Customize your own family per Week")}</h5>}
          </Translation>
           <h2>$5.99</h2>
           <Link to="/Payment_page" className="btn btn-dark">Select</Link>
         </div>
         <div className="col-md-3 services bg-light">
         <Translation>{
           t=><h4>{t("Premium")}</h4>}
          </Translation>
          <Translation>{
            t=><h5>{t("Customize your own family per day")}</h5>}
          </Translation>
           <h2>$9.99</h2>
           <Link to="/Payment_page" className="btn btn-dark">Select</Link>
         </div>
         
        </div>
        <SimpleForm/>       
      </div>
    </section>)
  }
}

export default Subscribe_plan; 