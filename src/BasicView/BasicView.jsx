import React, {useEffect, useState} from 'react';

import './BasicView.css';
import Name from '../Components/Name/Name';

const BasicView = () => {

  return (
         <div className='size_section_center_column box_basic_view'>
           <Name/>
           <Name/>
           <Name/>
         </div>
         )
}

export default BasicView;