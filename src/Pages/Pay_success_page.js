import React from "react";
import {Link} from "react-router-dom";
import {Translation} from 'react-i18next';

class Pay_success_page extends React.Component{
    render(){
        return(
            <section id ="services">
            <div className="container text-center">
            <Translation>{
              t=><h1 className ="title_service"> {t("SUCCESSED")}</h1>}
            </Translation>
              <div className="row text-center bg-light justify-content-md-center">
                <div className="col-md-6">
                    <Translation>{
                    t=><h3>{t("Congratulation")}</h3>}
                    </Translation>
                    <Translation>{
                    t=><h4>{t("You have successfully subscribed to our service")}</h4>}
                    </Translation>
                    <Translation>{
                    t=><h4>{t("We will contact you shortly")}</h4>}
                    </Translation>
                    <Translation>{
                    t=><Link to="/Family_card" className="btn btn-success">{t("Done")}</Link>}
                    </Translation>
                </div>
            </div>
            </div>       
        </section>)
    }
}

export default Pay_success_page;