import Stark_familytree from "./Stark_familytree";
import React from "react";

class Stark_tree_with_title extends React.Component{
    render(){
        return(
            <section id ="services">
            <div className="container text-center bg-light">
              <h1 className ="title_service">HOUSE OF STARK</h1>
              <div className="row  text-center">
            </div>
            </div>
        <div>
            <Stark_familytree/> 
        </div>           
        </section>)
        
    }
}
export default Stark_tree_with_title;