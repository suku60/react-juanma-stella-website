import React, {useEffect, useState} from 'react';
import './SectionPersonalData.css';


import Name from '../Name/Name';
import Surname from '../Surname/Surname';

import {ReactComponent as GithubSvg} from '../../assets/svg/github.svg';
import {ReactComponent as LinkedinSvg} from '../../assets/svg/linkedin.svg';
import {ReactComponent as TwitterSvg} from '../../assets/svg/twitter.svg';
import {ReactComponent as BehanceSvg} from '../../assets/svg/behance.svg';
import {ReactComponent as WhatsappSvg} from '../../assets/svg/whatsapp.svg';
import {ReactComponent as DotsSvg} from '../../assets/svg/dots.svg';


const SectionPersonalData = () => {

  const [linkDataDisplay, setLinkDataDisplay] = useState({
    backgroundColor: "transparent",
    color: "transparent",
    display: "none"
  })
  const [isLinkDataDisplay, setIsLinkDataDisplay] = useState(false);

  useEffect(() => {
  }, []);

  useEffect(() => {
    if(isLinkDataDisplay){
      setLinkDataDisplay({
        backgroundColor: "blue",
        color: "blue",
        display: "flex"
      })
    }else{
      setLinkDataDisplay({
        backgroundColor: "transparent",
        color: "transparent",
        display: "none"
      })
    }
  }
  ,[isLinkDataDisplay])

return (
  <div className="size_main_section main_section_personal_data">
    <div className="personal_data_photo">
    </div>
    <div className="personal_data_name">
      <div className="personal_data_name_section empty"></div>
      <div className="personal_data_name_section box_name">
        <div className="container_name">
          <Name/>
        </div>
        <div className="container_surname">
          <Surname/>
        </div>
      </div>
      <div className="personal_data_name_section box_social_network_icons">
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
    </div>
    <div className="links_data_indicator" 
    style={linkDataDisplay}
    onMouseLeave={() => {setIsLinkDataDisplay(false)}}
    ></div>
  </div> 
  )
}
export default SectionPersonalData;