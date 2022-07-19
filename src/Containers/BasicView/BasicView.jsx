import React, {useEffect, useState} from 'react';

import './BasicView.css';

import SectionSkills from '../../Components/SectionSkills/SectionSkills';
import SectionPersonalData from '../../Components/SectionPersonalData/SectionPersonalData';
import SectionMyStack from '../../Components/SectionMyStack/SectionMyStack';

import {ReactComponent as DotsSvg} from '../assets/svg/dots.svg';
import SectionMyProjects from '../../Components/SectionMyProjects/SectionMyProjects';
import SectionAbout from '../../Components/SectionAbout/SectionAbout';
import SectionContact from '../../Components/SectionContact/SectionContact';


import {ReactComponent as NameSvg} from '../assets/svg/JuanmaSvg.svg';
import {ReactComponent as SurnameSvg} from '../assets/svg/StellaSvg.svg';

import {ReactComponent as GithubSvg} from '../assets/svg/github.svg';
import {ReactComponent as LinkedinSvg} from '../assets/svg/linkedin.svg';
import {ReactComponent as TwitterSvg} from '../assets/svg/twitter.svg';
import {ReactComponent as BehanceSvg} from '../assets/svg/behance.svg';
import {ReactComponent as WhatsappSvg} from '../assets/svg/whatsapp.svg';

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
           <div className="temporary_contact">
        <a className='sn_link centered_content' href='https://github.com/suku60' target="_blank">
          <GithubSvg/>
        </a>
        <a className='sn_link centered_content' href='https://www.linkedin.com/in/juanma-stella/' target="_blank">
          <LinkedinSvg/>
        </a>
        <a className='sn_link centered_content' href='https://twitter.com/suku60_dev' target="_blank">
          <TwitterSvg/>
        </a>
        <a className='sn_link centered_content' href='https://www.behance.net/westellart' target="_blank">
          <BehanceSvg/>
        </a>
        <a className='sn_link centered_content' href='https://wa.me/34649325992' target="_blank">
          <WhatsappSvg/>
        </a>
        {/* HIDDEN DOTS FOR FUTURE ADDITIONS */}
        {/* <div className='sn_link centered_content link_dots' 
        onClick={()=>setIsLinkDataDisplay(true)}
        >
          <DotsSvg/>
        </div> */}
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