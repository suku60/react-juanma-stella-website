import React, {useEffect, useState} from 'react';
import './SectionMyStack.css';

import StackHex from '../StackHex/StackHex';

import {connect} from 'react-redux';

const SectionMyStack = (props) => {

  // the data of 9 of the tecnologies i know. 
  // Icons we're going to display at the honey hexagons

  const myStackData = [
    {
      iconUrl: 'https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg',
      title: 'This is a title'
    },
    {
      iconUrl: 'https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg',
      title: 'This is a title'
    },
    {
      iconUrl: 'https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg',
      title: 'This is a title'
    }
    ,{
      iconUrl: 'https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg',
      title: 'This is a title'
    }
    ,{
      iconUrl: 'https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg',
      title: 'This is a title'
    }
    ,{
      iconUrl: 'https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg',
      title: 'This is a title'
    }
    ,{
      iconUrl: 'https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg',
      title: 'This is a title'
    }
    ,{
      iconUrl: 'https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg',
      title: 'This is a title'
    }
    ,{
      iconUrl: 'https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg',
      title: 'This is a title'
    }

  ]

  const [stackIndicatorDisplay, setStackIndicatorDisplay] = useState({
    backgroundColor: "transparent",
    color: "transparent",
    height: "0%",
    transform: "translateY(-100%)",
    animation: "opacity 2s ease-out"
  });

  const [isUserOnIndicator, setIsUserOnIndicator] = useState(false);

  useEffect(() => {
  },[]);

  useEffect(() => {
    if(props?.infoDisplay?.isStackInfoDisplayed){
      setStackIndicatorDisplay({
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        animation: "animIndicator 1s normal",
        width: "30%",
        transition: "1s"
      });
    }else{

      if(isUserOnIndicator){
        setStackIndicatorDisplay({
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          animation: "animIndicator 1s normal",
          width: "30%",
          transition: "1s"
        });
      }else{

        setStackIndicatorDisplay({
          backgroundColor: "transparent",
          color: "transparent",
          height: "0%",
          transform: "translateY(-100%)",
          animation: "opacity 2s ease-out",
          transition: "1s"
        });
      }
    }
    
  },[props?.infoDisplay?.isStackInfoDisplayed, isUserOnIndicator]);

  

return (
  <div className="size_main_section main_section_my_stack">
    <div className="my_stack_title centered_content"
    >
      <p> my stack </p>
    </div>
    <div className="my_stack_hexagon">
      <ul className="hexagon_grid">
        {
          myStackData.map((item, index) => {
            return (
              <StackHex key={index}
              iconUrl={item.iconUrl}
              title={item.title}
              />
            )})
        }
      </ul>
    </div>
    <div className="my_stack_indicator" 
    style={stackIndicatorDisplay}
    onMouseOver={() => {setIsUserOnIndicator(true)}}
    onMouseLeave={() => {setIsUserOnIndicator(false)}}
    ></div>
  </div> 
  )
}

export default connect((state) => ({
  infoDisplay: state.infoDisplay
}))(SectionMyStack);