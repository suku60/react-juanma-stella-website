import React, {useEffect, useState} from 'react';

import './BasicView.css';

import SectionSkills from '../Components/SectionSkills/SectionSkills';
import SectionPersonalData from '../Components/SectionPersonalData/SectionPersonalData';
import SectionMyStack from '../Components/SectionMyStack/SectionMyStack';

import {ReactComponent as DotsSvg} from '../assets/svg/dots.svg';
import SectionMyProjects from '../Components/SectionMyProjects/SectionMyProjects';
import SectionAbout from '../Components/SectionAbout/SectionAbout';
import SectionContact from '../Components/SectionContact/SectionContact';


import {ReactComponent as NameSvg} from '../assets/svg/JuanmaSvg.svg';
import {ReactComponent as SurnameSvg} from '../assets/svg/StellaSvg.svg';


const BasicView = () => {

  return (
         <div className='size_section_center_column box_basic_view'>
           <div className="disclaimer">
             <p>website currently under construction</p>
           </div>
           <div className="frontpage centered_content">
             <NameSvg className="frontpage_text" id="animSvg2"/>
             <SurnameSvg className="frontpage_text" id="animSvg2"/>
           </div>
           <SectionPersonalData/>
           <SectionSkills/>
           <SectionMyStack/>
           <SectionMyProjects/>
           <SectionAbout/>
           <SectionContact/>
           <div>footer here</div>
         </div>
         )
}

export default BasicView;