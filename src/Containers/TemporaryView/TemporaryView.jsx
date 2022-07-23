import React, {Fragment, useEffect, useState} from 'react';

import './TemporaryView.css';

import {ReactComponent as NameSvg} from '../../assets/svg/JuanmaSvg.svg';
import {ReactComponent as SurnameSvg} from '../../assets/svg/StellaSvg.svg';

import {ReactComponent as GithubSvg} from '../../assets/svg/github.svg';
import {ReactComponent as LinkedinSvg} from '../../assets/svg/linkedin.svg';
import {ReactComponent as TwitterSvg} from '../../assets/svg/twitter.svg';
import {ReactComponent as BehanceSvg} from '../../assets/svg/behance.svg';
import {ReactComponent as WhatsappSvg} from '../../assets/svg/whatsapp.svg';
import {ReactComponent as FigmaSvg} from '../../assets/svg/figmadetails.svg';
import {ReactComponent as FigmaNameSvg} from '../../assets/svg/figmaname.svg';
import {ReactComponent as CvSvg} from '../../assets/svg/cv.svg';

const TemporaryView = () => {

  return (
    <Fragment>
        <div className="disclaimer" id="animOpenUp">
             <p>website currently under construction</p>
           </div>
           <div className="frontpage centered_content">
             {/* <NameSvg className="frontpage_text" id="animSvg2"/>
             <SurnameSvg className="frontpage_text" id="animSvg2"/> */}
             <div className="figma_details centered_content" id="animSvg2">
              <FigmaNameSvg className='figma_name_svg'id="animSvg3"/>
              <FigmaSvg/>
             </div>
      
           </div>
           <div className="temporary_contact" id="animOpenUp">
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
        {/* <a href='../../assets/files/CV-JMSTELLA-JUL22-SPA.pdf' className='sn_link centered_content' alt="download my cv" download>         
         <CvSvg/>
        </a> */}
        {/* HIDDEN DOTS FOR FUTURE ADDITIONS */}
        {/* <div className='sn_link centered_content link_dots' 
        onClick={()=>setIsLinkDataDisplay(true)}
        >
          <DotsSvg/>
        </div> */}
      </div>

    </Fragment>
           
         )
}

export default TemporaryView;