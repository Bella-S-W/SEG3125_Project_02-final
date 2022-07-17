import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import {Translation} from 'react-i18next';
//import i18n from '../i18n'

function Payment_page(){
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    // const [name, setName] = useState('');
    // const [error_name, setError_name] = useState(null);

    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    const handleChangeEmail = event => {
      if (!isValidEmail(event.target.value)) {
        setError('Please enter a valid email address.');
      } else {
        setError(null);
      }
      setMessage(event.target.value);
    }
      
    // function isValidName(name) {
    //   return /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
    // }

    // const handleChangeName = event => {
    //   if (!isValidName(event.target.value)) {
    //     setError_name('Please enter a valid name.');
    //   }else {
    //     setError_name(null);
    //   }
    //   setMessage(event.target.value);
    // };
        return(
            <section id ="services">
            <div className="container text-center">
              <Translation>{
              t=><h1 className ="title_service">{t("payment")}</h1>}
              </Translation>
              <div className="row bg-light justify-content-md-center">
                <div className="col-md-6">
                    <Translation>{
                    t =><h2>{t("Email Address")}</h2>}
                    </Translation>
                    <input type ="email"
                        placeholder="Required"
                        className="form-control"
                        id="message"
                        name="message"
                        value={message}
                        onChange={handleChangeEmail} />
                        {error && <h4 style={{color: "red"}}>{error}</h4>}

                        <Translation>{
                        t =><h2>{t("Name on Card")}</h2>}
                        </Translation>
                    {/* <input type ="name"
                        placeholder="Required"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleChangeName} />
                        {error_name && <h4 style={{color: "red"}}>{error_name}</h4>}  */}
                    <input type="text" className="form-control" placeholder="Required" />
                    <Translation>{
                    t =><h2>{t("Credit card number")}</h2>}
                    </Translation>
                    <input type="text" className="form-control" placeholder="Credit card number" />
                    <Translation>{
                    t =><h2>{t("Expiration Date")}</h2>}
                    </Translation>
                    <input type="text" className="form-control"  placeholder="MM/YYYY" />
                    <Translation>{
                    t =><h2>{t("CVV")}</h2>}
                    </Translation>
                    <input type="text" className="form-control" placeholder="3-digits" />
                    <Translation>{
                    t =><h2>{t("Zip code")}</h2>}
                    </Translation>
                    <input type="text" className="form-control" placeholder="Zip Code" />
                    <Translation>{
                    t =><Link to="/Subscribe_plan" className="btn btn-danger">{t("Cancel")}</Link>}
                    </Translation>
                    <Translation>{
                    t =><Link to="/Pay_page" className="btn btn-success">{t("Pay")}</Link>}
                    </Translation>
                </div>
            </div>
            </div>       
        </section>) 
    }



export default Payment_page;