import React, {useEffect, useState} from 'react';
import './SectionMyStack.css';

import axios from 'axios';
import StackHex from '../StackHex/StackHex';

const SectionMyStack = () => {

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
              {...item}
              />
            )})
        }
      </ul>
    </div>
  </div> 
  )
}
export default SectionMyStack;