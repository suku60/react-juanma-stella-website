import React, {useEffect, useState} from 'react';

import './BasicView.css';

import SectionSkills from '../Components/SectionSkills/SectionSkills';
import SectionPersonalData from '../Components/SectionPersonalData/SectionPersonalData';
import SectionMyStack from '../Components/SectionMyStack/SectionMyStack';


const BasicView = () => {

  return (
         <div className='size_section_center_column box_basic_view'>
           <SectionPersonalData/>
           <SectionSkills/>
           <SectionMyStack/>
           <div className="size_main_section">hello</div>
           <div className="size_main_section">hello</div>
           <div className="size_main_section">hello</div>
         </div>
         )
}

export default BasicView;