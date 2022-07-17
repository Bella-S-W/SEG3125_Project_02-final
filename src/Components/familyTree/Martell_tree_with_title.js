import Martell_familytree from "./Martell_familytree";
import React from "react";

class Martell_tree_with_title extends React.Component{
    render(){
        return(
            <section id ="services">
            <div className="container text-center bg-light">
              <h1 className ="title_service">HOUSE OF MARTELL</h1>
              <div className="row  text-center">
            </div>
            </div>
        <div>
            <Martell_familytree/> 
        </div>           
        </section>)
        
    }
}
export default Martell_tree_with_title;