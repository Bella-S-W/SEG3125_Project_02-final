import React from "react";
import {Translation} from 'react-i18next';

const homepage_background = require("../images/homepage_background.png");

class Home extends React.Component{
    render(){

        return (<section id ="infomation">
        <div className="container">
          <div className="row">
            <div>
              <Translation>{
             t=><h1 className ="title text-center"><b>{t("Game of Thrones")}</b></h1>}
              </Translation>
              <a className = " img-center" href="#"><img src ={homepage_background} styles={{maxWidth:20,maxHeight:20}}/></a>
            </div>
          <div className="text-center">
            <Translation>{
            t=><h4><b className ="text-center">{t("“Winter is coming.” — Ned Stark")}</b></h4>}
            </Translation>
            <Translation>{
            t=><h4><b className ="text-center">{t("“You know nothing Jon Snow.”— Ygritte")}</b></h4>}
            </Translation>
            <Translation>{
            t=><h4><b className ="text-center">{t("“Fear cuts deeper than swords.” — Arya Stark")}</b></h4>}
            </Translation>
            <Translation>{
            t=><h4><b className ="text-center">{t("“A lion doesn’t concern himself with the opinions of a sheep.” — Tywin Lannister")}</b></h4>}
            </Translation>
            <Translation>{
            t=><h4><b className ="text-center">{t("“Any man who must say ‘I am the king’ is no true king.” — Tywin Lannister")}</b></h4>}
            </Translation>
            <Translation>{
            t=><h4><b className ="text-center">{t("“Chaos isn’t a pit. Chaos is a ladder.” — Lord Baelish")}</b></h4>}
            </Translation>
            <Translation>{
            t=><h4><b className ="text-center">{t("“All men must die, but we are not men.” — Daenerys Targaryen")}</b></h4>}
            </Translation>
          </div>
          </div>
        </div>
      </section>)
    }
}

export default Home; 