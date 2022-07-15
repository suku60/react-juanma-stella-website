import React, {useEffect, useState} from 'react';
import './SectionMyProjects.css';

import {ReactComponent as DotsSvg} from '../../assets/svg/dots.svg';
import {ReactComponent as WebsiteSvg} from '../../assets/svg/goWebsite.svg';

import {ReactComponent as MyProjectsTitleSvg} from '../../assets/svg/myprojectsTitle.svg';


const SectionMyProjects = () => { 

  const [carouselDisplay, setCarouselDisplay] = useState({
    backgroundColor: "transparemt",
    background: "none",
    transition: ".2s",
    opacity: "0",
    width: "0%"
    
  });

  const showCarousel = (isCarouselDisplayed) => {
    if(isCarouselDisplayed) {
      setCarouselDisplay({
        transition: ".4s",
        opacity: "1",
        width: "100%"
      });
    }else {
      setCarouselDisplay({
        backgroundColor: "transparemt",
        background: "none",
        transition: ".2s",
        opacity: "0",
        width: "0"

      });
    }
  }




return (
  <div className="size_main_section main_section_projects">
            <div className="projects_title centered_content">
            <MyProjectsTitleSvg className="my_stack_title_svg" id="animTitleSvg"/>
            </div>
            <div className="projects_data">
              <a className="projects_data_item project_tomeme" href='https://github.com/suku60/tomeme_social-network' target="_blank"></a>
              <a className="projects_data_item project_movieclub" href='https://github.com/suku60/ionic_angular_movieclub' target="_blank"></a>
              <a className="projects_data_item project_scrabaladder" href='https://github.com/suku60/scrabaladdeR_v.1.0' target="_blank"></a>
              <div className="projects_data_more_info centered_content"
              id="animMoreBtn"
              onClick={()=>showCarousel(true)}>
                <DotsSvg/>
              </div>
              <div className="projects_carousel" 
              style={carouselDisplay}
              onMouseLeave={()=>showCarousel(false)}
              >
                {/* THESE WILL BE A COMPONENT */}
                <div className="carousel_item_card">
                  <a className="projects_data_item project_rickmorty" href='https://github.com/suku60/rick_and_morty_frontend' target="_blank"></a>
                  <a href='https://master.d1ccev8u2cmvlp.amplifyapp.com/' target="_blank">
                    <p className='deploy_link'><WebsiteSvg/></p>
                  </a>
                  <p className="project_name">Rick and Morty Dex</p>
                  <p className="project_description">Quick exercise that reads from an API</p>
                </div>

                <div className="carousel_item_card">
                  <a className="projects_data_item project_moviesaurus" href='https://github.com/suku60/moviesaurus_frontend' target="_blank"></a>
                  <p className="project_name">Moviesaurus</p>
                  <p className="project_description">Full Stack project where you can rent movies.</p>
                </div>

                <div className="carousel_item_card">
                  <a className="projects_data_item project_pokemon" href='https://github.com/suku60/pokemon_cafe_bootstraps' target="_blank"></a>
                  <a href='https://suku60.github.io/pokemon_cafe_bootstraps/' target="_blank">
                  <p className='deploy_link'><WebsiteSvg/></p>

                  </a>
                  <p className="project_name">PKM Café</p>
                  <p className="project_description">Adaptive website made with bootstraps</p>
                </div>

                <div className="carousel_item_card">
                  <a className="projects_data_item project_robostrike" href='https://github.com/suku60/robostrike_videogame' target="_blank"></a>
                  <a href='https://suku60.github.io/robostrike_videogame/' target="_blank">
                  <p className='deploy_link'><WebsiteSvg/></p>

                  </a>
                  <p className="project_name">Robostrike videogame</p>
                  <p className="project_description">Vanilla javascript videogame</p>
                </div>

                <div className="carousel_item_card">
                  <a className="projects_data_item project_gameboy" href='https://github.com/suku60/ProyectoConsolaBTCFSD0122' target="_blank"></a>
                  <a href='https://suku60.github.io/ProyectoConsolaBTCFSD0122/' target="_blank">
                  <p className='deploy_link'><WebsiteSvg/></p>

                  </a>
                  <p className="project_name">Only CSS GBA</p>
                  <p className="project_description">CSS's only picture of a Game Boy Advance</p>
                </div>

                <div className="carousel_item_card">
                  <a className="projects_data_item project_movieclub" href='https://github.com/suku60/ionic_angular_movieclub' target="_blank"></a>
                  <a href='https://master.dogiqax5q9mxn.amplifyapp.com/' target="_blank">
                  <p className='deploy_link'><WebsiteSvg/></p>

                  </a>
                  <p className="project_name">Movie Data Website</p>
                  <p className="project_description">A frontend made with Angular that reads from TMDB's API.</p>
                </div>

                <div className="carousel_item_card">
                  <a className="projects_data_item project_tomeme" href='https://github.com/suku60/tomeme_social-network' target="_blank"></a>
                  <a href='https://develop.dvzjwfzqzlt10.amplifyapp.com/' target="_blank">
                  <p className='deploy_link'><WebsiteSvg/></p>

                  </a>
                  <p className="project_name">Tomeme</p>
                  <p className="project_description">Full stack project. Social media made with MERN stack.</p>
                </div>

                <div className="carousel_item_card">
                  <a className="projects_data_item project_scrabaladder" href='https://github.com/suku60/scrabaladdeR_v.1.0' target="_blank"></a>
                  <a href='https://master.dby48i6fhgezi.amplifyapp.com/' target="_blank">
                  <p className='deploy_link'><WebsiteSvg/></p>

                  </a>
                  <p className="project_name">scrabaladdeR</p>
                  <p className="project_description">Full stack project. Videogame with many rooms and users where you can join/leave lobbies.</p>
                </div>

              </div>
            </div>
           </div>
  )
}
export default SectionMyProjects;