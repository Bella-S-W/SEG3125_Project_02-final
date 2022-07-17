import React from "react";
import Comments from '../Components/comment/comments';
import {Translation} from 'react-i18next';

class Discussion_page extends React.Component{
    render(){
        return(
            <section id ="services">
            <div className="container text-center">
            <Translation>{
              t=><h1 className ="title_service">{t("COMMENTS")}</h1>}
            </Translation>
              <div className="row  text-center">
            </div>
            </div>
        <div>
            <Comments/> 
        </div>           
        </section>)
        
    }
}

export default Discussion_page;