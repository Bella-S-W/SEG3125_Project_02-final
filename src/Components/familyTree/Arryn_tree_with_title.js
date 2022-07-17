import Arryn_familytree from "./Arryn_familytree";
import React from "react";
import {Translation} from 'react-i18next';

class Arryn_tree_with_title extends React.Component{
    render(){
        return(
            <section id ="services">
            <div className="container text-center bg-light">
                <Translation>{
              t=><h1 className ="title_service">{t("HOUSE OF ARRYN")}</h1>}
                </Translation>
              <div className="row  text-center">
            </div>
            </div>
        <div>
            <Arryn_familytree/> 
        </div>           
        </section>)
        
    }
}
export default Arryn_tree_with_title;