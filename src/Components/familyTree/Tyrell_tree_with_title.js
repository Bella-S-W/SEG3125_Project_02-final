import Tyrell_familytree from "./Tyrell_familytree";
import React from "react";

class Tyrell_tree_with_title extends React.Component{
    render(){
        return(
            <section id ="services">
            <div className="container text-center bg-light">
              <h1 className ="title_service">HOUSE OF TYRELL</h1>
              <div className="row  text-center">
            </div>
            </div>
        <div>
            <Tyrell_familytree/> 
        </div>           
        </section>)
        
    }
}
export default Tyrell_tree_with_title;