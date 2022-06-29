import React, {useEffect, useState} from 'react';

import './BasicView.css';

import SectionSkills from '../Components/SectionSkills/SectionSkills';
import SectionPersonalData from '../Components/SectionPersonalData/SectionPersonalData';
import SectionMyStack from '../Components/SectionMyStack/SectionMyStack';

import {ReactComponent as DotsSvg} from '../assets/svg/dots.svg';
import SectionMyProjects from '../Components/SectionMyProjects/SectionMyProjects';
import SectionAbout from '../Components/SectionAbout/SectionAbout';
import SectionContact from '../Components/SectionContact/SectionContact';


const BasicView = () => {

  return (
         <div className='size_section_center_column box_basic_view'>
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