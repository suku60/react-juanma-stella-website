import React, {useEffect, useState} from 'react';
import './SectionMyStack.css';

import axios from 'axios';

const SectionMyStack = () => {

return (
  <div className="size_main_section main_section_my_stack">
    <div className="my_stack_title"></div>
    <div className="my_stack_hexagon">
      <ul className="hexagon_grid">
        <li className="hex">
          <a className="hex_content" href="#">
            <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li className="hex">
          <a className="hex_content" href="#">
            <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li className="hex">
          <a className="hex_content" href="#">
            <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li className="hex">
          <a className="hex_content" href="#">
            <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li className="hex">
          <a className="hex_content" href="#">
            <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li className="hex">
          <a className="hex_content" href="#">
            <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li className="hex">
          <a className="hex_content" href="#">
            <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li className="hex">
          <a className="hex_content" href="#">
            <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li className="hex">
          <a className="hex_content" href="#">
            <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
      </ul>
    </div>
  </div> 
  )
}
export default SectionMyStack;