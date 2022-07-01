import React, {useEffect, useState} from 'react';
import './StackHex.css';

import {connect} from 'react-redux';
import { INFOLOG, TECNOLOGYLOG } from '../../redux/types';

const StackHex = (props) => {

  useEffect(() => {
  },[]);

  useEffect(() => {
  },[props]);


return (
        <li className="hex"
        onMouseOver={()=>{
          props.dispatch({ type: INFOLOG, payload: true });
          props.dispatch({ type: TECNOLOGYLOG, 
            payload: {title: props.title, description: props.description} });
          console.log("working?")
        }}
        onMouseLeave={()=>{
          props.dispatch({ type: INFOLOG, payload: false });
          // console.log("working?")
        }}
        key={props.key}>
          <div className="hex_content">
            <img src={props.iconUrl} alt={props.title} />
            <h2>{props.title}</h2>
          </div>
        </li>
  )
}
export default connect((state) => ({
  infoDisplay: state.isStackInfoDisplayed
}))(StackHex);