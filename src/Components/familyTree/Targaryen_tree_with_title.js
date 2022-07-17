import Targaryen_familytree from "./Targaryen_familytree";
import React from "react";

class Targaryen_tree_with_title extends React.Component{
    render(){
        return(
            <section id ="services">
            <div className="container text-center bg-light">
              <h1 className ="title_service">HOUSE OF TARGARYEN</h1>
              <div className="row  text-center">
            </div>
            </div>
        <div>
            <Targaryen_familytree/> 
        </div>           
        </section>)
        
    }
}
export default Targaryen_tree_with_title;