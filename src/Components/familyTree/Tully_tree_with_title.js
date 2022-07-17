import Tully_familytree from "./Tully_familytree";
import React from "react";

class Tully_tree_with_title extends React.Component{
    render(){
        return(
            <section id ="services">
            <div className="container text-center bg-light">
              <h1 className ="title_service">HOUSE OF TULLY</h1>
              <div className="row  text-center">
            </div>
            </div>
        <div>
            <Tully_familytree/> 
        </div>           
        </section>)
        
    }
}
export default Tully_tree_with_title;