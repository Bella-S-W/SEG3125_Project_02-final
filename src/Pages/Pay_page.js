import React from "react";
import {Link} from "react-router-dom";
import {Translation} from 'react-i18next';

class Pay_page extends React.Component{
    render(){
        return(
            <section id ="services">
            <div className="container text-center">
              <Translation>{  
              t=><h1 className ="title_service">{t("CONFIRMED OF PAYMENT")}</h1>}
                </Translation>
              <div className="row text-center bg-light justify-content-md-center">
                <div className="col-md-6">
                    <Translation>{
                    t=><h4>{t("Email Address: xxxxxxxx@gamil.com")}</h4>}
                    </Translation>
                    <Translation>{
                    t=><h4>{t("Confirmed Email Address: xxxxxxxx@gamil.com")}</h4>}
                    </Translation>
                    <Translation>{
                    t=><h4>{t("Name on Card: xxx XXX")}</h4>}
                    </Translation>
                    <Translation>{
                    t=><h4>{t("Card Number: xxxx xxxx xxxx xxxx")}</h4>}
                    </Translation>
                    <Translation>{
                    t=><h4>{t("Expiration Date: xx/xx")}</h4>}
                    </Translation>
                    <h4>CVV: xxx</h4>
                    <Translation>{
                    t=><h4>{t("Zip Code: N1N 2N3")}</h4>}
                    </Translation>
                    <Translation>{
                    t=><Link to="/Payment_page" className="btn btn-danger">{t("Previsou")}</Link>}
                    </Translation>
                    <Translation>{
                    t=><Link to="/Pay_success_page" className="btn btn-success">{t("Next")}</Link>}
                    </Translation>
                </div>
            </div>
            </div>       
        </section>)
        
    }
}

export default Pay_page;