import React, {useEffect, useState} from 'react';
import './SectionMyStack.css';

import StackHex from '../StackHex/StackHex';

import {connect} from 'react-redux';

import {ReactComponent as MyStackTitleSvg} from '../../assets/svg/mystackTitle.svg';

const SectionMyStack = (props) => {

  // the data of 9 of the tecnologies i know. 
  // Icons we're going to display at the honey hexagons

  const myStackData = [
    {
      // iconUrl: "../../assets/img/tecnologies/react.png",
      title: 'React',
      titleLowercase: 'react',
      description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.'
    },
    {
      title: 'Node',
      titleLowercase: 'node',
      description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive applications that run across distributed devices.'
    },
    {
      title: 'Sass',
      titleLowercase: 'sass',
      description: 'Sass is a stable, mature, and powerful professional grade CSS extension language.'
    }
    ,{
      title: 'Bootstraps',
      titleLowercase: 'bootstraps',
      description: 'Bootstrap is a free and open-source front-end framework for designing websites and web applications.'
    }
    ,{
      title: 'Git',
      titleLowercase: 'git',
      description: 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.'
    }
    ,{
      title: 'AWS',
      titleLowercase: 'aws',
      description: 'Amazon Web Services (AWS) is a suite of cloud computing services that makes it easy to build, deploy, and manage applications and infrastructure.'
    }
    ,{
      title: 'MySQL',
      titleLowercase: 'mysql',
      description: 'MySQL is a relational database management system (RDBMS) that is used to store and manage data.'
    }
    ,{
      title: 'Photoshop',
      titleLowercase: 'photoshop',
      description: 'Photoshop is a free software application used to create, edit, and manipulate images.'
    }
  ]

  const [stackIndicatorDisplay, setStackIndicatorDisplay] = useState({
    backgroundColor: "transparent",
    color: "transparent",
    height: "0%",
    display: "none",
    transform: "translateY(-200%)",
    animation: "opacity 5s ease-out"
  });

  const [isUserOnIndicator, setIsUserOnIndicator] = useState(false);

  useEffect(() => {
  },[]);

  useEffect(() => {
    if(props?.infoDisplay?.isStackInfoDisplayed){
      setStackIndicatorDisplay({
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        height: "100vh",
        display: "flex",
        width: "30%",
        transition: ".5s"
      });
    }else{

      if(isUserOnIndicator){
        setStackIndicatorDisplay({
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          height: "100vh",
          display: "flex",
          width: "30%",
          transition: ".5s"
        });
      }else{

        setStackIndicatorDisplay({
          backgroundColor: "transparent",
          color: "transparent",
          height: "0%",
          display: "none",
          transform: "translateY(-100%)",
          transition: ".5s"
        });
      }
    }
    
  },[props?.infoDisplay?.isStackInfoDisplayed, isUserOnIndicator]);

  

return (
  <div className="size_main_section main_section_my_stack">
    <div className="my_stack_title centered_content"
    >
      <MyStackTitleSvg className="my_stack_title_svg" id="animTitleSvg"/>
    </div>
    <div className="my_stack_hexagon">
      <ul className="hexagon_grid">
        {
          myStackData.map((item, index) => {
            return (
              <StackHex key={index}
              iconUrl={item.iconUrl}
              title={item.title}
              titleLowercase={item.titleLowercase}
              description={item.description}
              />
            )})
        }
      </ul>
    </div>
    <div className="my_stack_indicator" 
    style={stackIndicatorDisplay}
    onMouseOver={() => {setIsUserOnIndicator(true)}}
    onMouseLeave={() => {setIsUserOnIndicator(false)}}
    >
      <div className="my_stack_indicator_title">
        <p>{props?.infoDisplay?.stackInfo?.title}</p>
      </div>
      <div className="my_stack_indicator_description">
        <p>{props?.infoDisplay?.stackInfo?.description}</p>
      </div>  
    </div>
    
  </div> 
  )
}

export default connect((state) => ({
  infoDisplay: state.infoDisplay
}))(SectionMyStack);