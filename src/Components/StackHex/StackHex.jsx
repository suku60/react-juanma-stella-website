import React, {useEffect, useState} from 'react';
import './StackHex.css';

const StackHex = ({
  iconUrl = '',
  title = '',
  description = '',
}) => {

return (
        <li className="hex">
          <div className="hex_content">
            <img src={iconUrl} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </li>
  )
}
export default StackHex;