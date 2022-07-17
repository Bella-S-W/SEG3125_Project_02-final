import React from "react";

import {Translation} from 'react-i18next';


class Support_page extends React.Component{
  render(){
      return(           
      <section id ="services">
      <div className="container text-center">
        <Translation>{
        t=><h1 className ="title_service">{t("SUPPORT")}</h1>}
        </Translation>
        <div className="row  text-center">
          <div className="col-md-6 services">
            <Translation>{
            t=><h4><b>{t("Game of Thrones Offical page")}</b></h4>}
            </Translation>
            <Translation>{
            t=><h5>{t("Your Guide to Game of Thrones")}</h5>}
            </Translation>
            <Translation>{
            t=><a href="https://www.hbo.com/game-of-thrones" className="btn btn-secondary">{t("Deatils")}</a>}
            </Translation>
          </div>
          <div className="col-md-6 services">
            <Translation>{
           t=><h4><b>{t("Game of Thrones Rotten Tomates")}</b></h4>}
            </Translation>
            <Translation>{
           t=><h5>{t("Score of Game of Thrones")}</h5>}
            </Translation>
            <Translation>{
            t=><a href="https://www.rottentomatoes.com/tv/game_of_thrones" className="btn btn-secondary">{t("Deatils")}</a>}
            </Translation>
         </div>
         <div className="col-md-6 services">
          <Translation>{
           t=><h4><b>{t("Game of Thrones Facebook")}</b></h4>}
          </Translation>
          <Translation>{
           t=><h5>{t=("Join the Game of Thrones's Facebook communicity")}</h5>}
          </Translation>
          <Translation>{
            t=><a href="https://www.facebook.com/GameOfThrones/" className="btn btn-secondary">{t("Deatils")}</a>}
            </Translation>
         </div>
         <div className="col-md-6 services">
          <Translation>{
           t=><h4><b>{t("Game of Thrones wiki")}</b></h4>}
          </Translation>
          <Translation>{
           t=><h5>{t("Welcome to the Game of Thrones Wiki")}</h5>}
          </Translation>
          <Translation>{
            t=><a href="https://gameofthrones.fandom.com/wiki/Game_of_Thrones_Wiki" className="btn btn-secondary">{t("Deatils")}</a>}
            </Translation>
         </div>

         <div className="col-md-6 services">
          <Translation>{
           t=><h4><b>{t("Game of Thrones on Crave")}</b></h4>}
          </Translation>
          <Translation>{
           t=><h5>{t("Start Watching now")}</h5>}
          </Translation>
          <Translation>{
            t=><a href="https://www.crave.ca/en/tv-shows/game-of-thrones" className="btn btn-secondary">{t("Deatils")}</a>}
            </Translation>
         </div>

         <div className="col-md-6 services">
          <Translation>{
           t=><h4><b>{t("Game of Thrones Reddit")}</b></h4>}
          </Translation>
          <Translation>{
           t=><h5>{t("A Reddit of Ice and Fire")}</h5>}
          </Translation>
          <Translation>{
            t=><a href="https://www.reddit.com/r/gameofthrones/" className="btn btn-secondary">{t("Deatils")}</a>}
            </Translation>
         </div>
         
        </div>
      </div>
    </section>)
  }
}

export default Support_page; 