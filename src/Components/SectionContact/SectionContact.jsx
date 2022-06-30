import React, {useEffect, useState} from 'react';
import './SectionContact.css';

import {ReactComponent as LinkedinSvg} from '../../assets/svg/linkedin.svg';
import {ReactComponent as WhatsappSvg} from '../../assets/svg/whatsapp.svg';

const SectionContact = () => { 

  const [displayContactData, setDisplayContactData] = useState({
    height: "0%",
    display: "none"
  });
  const [displayContactTitle, setDisplayContactTitle] = useState({
    height: "100%",
    display: "flex"

  });

  const changeContactDisplay = (isDisplayed) => {

    if (isDisplayed) {
    setDisplayContactData({
        height: "100%",
        display: "flex"
      })
    setDisplayContactTitle({
        height: "0%",
        display: "none"
      })
    }else{
        setDisplayContactData({
          height: "0%",
          display: "none"
        })
        setDisplayContactTitle({
          height: "100%",
          display: "flex"
        })
      }

  }

return (
  <div className="size_main_section main_section_contact">
    <div 
    className="contact_title centered_content" 
    style={displayContactTitle}
    onMouseOver={()=>changeContactDisplay(true)}
    >
      <p>contact</p>
    </div>
    <div className="contact_data"
    style={displayContactData}
    // onMouseLeave={()=>changeContactDisplay(false)}
    >
      <div className="box_contact_svg whatsapp_contact centered_content">
        <a className='contact_link centered_content' href='https://wa.me/34649325992' target="_blank">
          <WhatsappSvg/>
        </a>
      </div>
      <form className="form_contact" action="mailto:contact@juanmatella.com" method="GET">
        <div className="form_subject">
          <p>subject</p>
          <input className="input_subject" name="subject" type="text" />

        </div>
        <textarea className="form_body" name="body"></textarea>
        <input className="form_button" type="submit" value="Send"/>
      </form>
      
      <div className="box_contact_svg linkedin_contact centered_content">
        <a className='contact_link centered_content' href='https://www.linkedin.com/in/juanma-stella/' target="_blank">
          <LinkedinSvg/>
        </a>
      </div>
    </div>
      

  </div>
  )
}
export default SectionContact;