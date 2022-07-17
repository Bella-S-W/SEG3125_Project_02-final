import Lannister_familytree from "./Lannister_familytree";
import React from "react";

class Lannister_tree_with_title extends React.Component{
    render(){
        return(
            <section id ="services">
            <div className="container text-center bg-light">
              <h1 className ="title_service">HOUSE OF LANNISTER</h1>
              <div className="row  text-center">
            </div>
            </div>
        <div>
            <Lannister_familytree/> 
        </div>           
        </section>)
        
    }
}
export default Lannister_tree_with_title;