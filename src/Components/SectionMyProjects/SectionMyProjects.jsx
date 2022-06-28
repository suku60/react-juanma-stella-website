import React, {useEffect, useState} from 'react';
import './SectionMyProjects.css';

import {ReactComponent as DotsSvg} from '../../assets/svg/dots.svg';

const SectionMyProjects = () => { 

return (
  <div className="size_main_section main_section_projects">
            <div className="projects_title centered_content">
              <p>my projects</p>
            </div>
            <div className="projects_data">
              <div className="projects_data_item"></div>
              <div className="projects_data_item"></div>
              <div className="projects_data_item"></div>
              <div className="projects_data_more_info centered_content">
                <p>more</p>
                <DotsSvg/>
              </div>
            </div>
           </div>
  )
}
export default SectionMyProjects;