import React, {useEffect, useState} from 'react';

import './BasicView.css';

import Name from '../Components/Name/Name';
import Surname from '../Components/Surname/Surname';

import {ReactComponent as GithubSvg} from '../assets/svg/github.svg';
import {ReactComponent as LinkedinSvg} from '../assets/svg/linkedin.svg';
import {ReactComponent as DotsSvg} from '../assets/svg/dots.svg';


const BasicView = () => {

  return (
         <div className='size_section_center_column box_basic_view'>
           <div className="size_main_section main_section_personal_data">
             <div className="personal_data_photo">
             </div>
             <div className="personal_data_name">
              <div className="personal_data_name_section empty"></div>
              <div className="personal_data_name_section box_name">
                <div className="container_name">
                  <Name/>
                </div>
                <div className="container_surname">
                  <Surname/>
                </div>
              </div>
              <div className="personal_data_name_section box_social_network_icons">
                <GithubSvg/>
                <LinkedinSvg/>
                <DotsSvg/>
              </div>
              
             </div> 
           </div>
           <div className="size_main_section main_section_skills">
             <div className="skills_wakatime_data"></div>
             <div className="skills_chart">
               <div className="skills_chart_languages">
                <div className="chart_languages">
                  <p>html</p>
                </div>
                <div className="chart_languages">
                  <p>html</p>
                </div>
                <div className="chart_languages">
                  <p>html</p>
                </div>
                <div className="chart_languages">
                  <p>html</p>
                </div>
                <div className="chart_languages">
                  <p>html</p>
                </div>
               </div>
               <div className="skills_chart_bars">
                 <div className="chart_bar">
                   <div className="chart_bar_inside bar_html"></div>
                 </div>
                 <div className="chart_bar">
                   <div className="chart_bar_inside bar_css"></div>
                 </div>
                 <div className="chart_bar">
                   <div className="chart_bar_inside bar_js"></div>
                 </div>
                 <div className="chart_bar">
                   <div className="chart_bar_inside bar_php"></div>
                 </div>
                 <div className="chart_bar">
                   <div className="chart_bar_inside bar_python"></div>
                 </div>
               </div>
             </div>
           </div>
           <div className="size_main_section">hello</div>
           <div className="size_main_section">hello</div>
           <div className="size_main_section">hello</div>
           <div className="size_main_section">hello</div>
         </div>
         )
}

export default BasicView;