import React, {useEffect, useState} from 'react';

import './BasicView.css';
import Name from '../Components/Name/Name';
import Surname from '../Components/Surname/Surname';

const BasicView = () => {

  return (
         <div className='size_section_center_column box_basic_view'>
           <div className="size_main_section main_section_personal_data">
             <div className="personal_data_photo">

             </div>
             <div className="personal_data_name">
              <div className="personal_data_name_section"></div>
              <div className="personal_data_name_section box_name">
                <div className="container_name">
                  <Name/>
                </div>
                <div className="container_surname">
                  <Surname/>
                </div>
              </div>
              <div className="personal_data_name_section"></div>
              
             </div> 
           </div>
           <div className="size_main_section">hello</div>
           <div className="size_main_section">hello</div>
           <div className="size_main_section">hello</div>
           <div className="size_main_section">hello</div>
           <div className="size_main_section">hello</div>
         </div>
         )
}

export default BasicView;