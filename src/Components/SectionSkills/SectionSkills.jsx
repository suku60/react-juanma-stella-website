import React, {useEffect, useState} from 'react';
import './SectionSkills.css';

import axios from 'axios';

const SectionSkills = () => {

return (
  <div className="size_main_section main_section_skills">
    <div className="skills_wakatime_data">
     <a href='https://wakatime.com/@suku60' target="_blank">
       <img src="https://wakatime.com/badge/user/68570dd8-7b92-42d8-9c26-e2e7580e71f0.svg" alt="Wakatime" />
     </a>
    </div>
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
  )
}
export default SectionSkills;