import React, {useEffect, useState} from 'react';
import './SectionAbout.css';

import {ReactComponent as AboutMeSvg} from '../../assets/svg/aboutmeTitle.svg';


const SectionAbout = () => { 

return (
  <div className="size_main_section main_section_about">
    <div className="about_title centered_content">
            <AboutMeSvg className="my_stack_title_svg" id="animTitleSvg"/></div>
    <div className="about_content">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Ea explicabo, tempore recusandae rem soluta quod officia earum, 
      a quibusdam eius blanditiis aut quo deserunt perspiciatis omnis velit 
      alias ipsa nobis.</div>
  </div>
  )
}
export default SectionAbout;