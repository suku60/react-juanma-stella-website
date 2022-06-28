import React, {useEffect, useState} from 'react';
import './SectionPersonalData.css';


import Name from '../Name/Name';
import Surname from '../Surname/Surname';

import {ReactComponent as GithubSvg} from '../../assets/svg/github.svg';
import {ReactComponent as LinkedinSvg} from '../../assets/svg/linkedin.svg';
import {ReactComponent as DotsSvg} from '../../assets/svg/dots.svg';


const SectionPersonalData = () => {

return (
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
  )
}
export default SectionPersonalData;