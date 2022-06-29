import React, {useEffect, useState} from 'react';
import './StackHex.css';

const StackHex = ({
  iconUrl = '',
  title = ''
  }) => {

  const [stackIndicatorDisplay, setStackIndicatorDisplay] = useState({
    backgroundColor: "transparent",
	  color: "transparent"
  });

  const [isStackInfoDisplayed, setIsStackInfoDisplayed] = useState(false);

  useEffect(() => {
  },[]);

  useEffect(() => {

    if (isStackInfoDisplayed) {
      setStackIndicatorDisplay({
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white"
      });
    }
    else {
      setStackIndicatorDisplay({
        backgroundColor: "transparent",
        color: "transparent"
      });
    }
    
  },[isStackInfoDisplayed]);


return (
        <li className="hex">
          <div className="hex_content"          
          onMouseOver={() =>setIsStackInfoDisplayed(true)}
          onMouseLeave={() =>setIsStackInfoDisplayed(false)}>
            <img src={iconUrl} alt={title} />
            <h2>{title}</h2>
          </div>
        </li>
  )
}
export default StackHex;