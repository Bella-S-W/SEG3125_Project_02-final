import Baratheon_familytree from "./Baratheon_familytree";
import React from "react";

class Baratheon_tree_with_title extends React.Component{
    render(){
        return(
            <section id ="services">
            <div className="container text-center bg-light">
              <h1 className ="title_service">HOUSE OF BARATHEON</h1>
              <div className="row  text-center">
            </div>
            </div>
        <div>
            <Baratheon_familytree/> 
        </div>           
        </section>)
        
    }
}
export default Baratheon_tree_with_title;