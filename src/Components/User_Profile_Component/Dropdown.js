import React, { useState, useRef, useEffect } from 'react'
import dropdown_arrow from './images/dropdown_arrow.svg'
import './css/dropdown.css'

function Dropdown(props) {

    let menuRef = useRef();
    const [listOpen, setListOpen] = useState(false);
    let [currentHeader, setCurrentHeader] = useState(props.title);

    const openList = ()=>{
        setListOpen(true);
    }

    const setItem = (event)=>{
        setCurrentHeader(event.target.innerHTML);
        setListOpen(false);
    }

    useEffect( () => {
        let handler = (event) => {
          if(!menuRef.current.contains(event.target)){
              setListOpen(false)
          }
        };
        document.addEventListener("mousedown", handler);
  
        return () => {
          document.removeEventListener("mousedown", handler);
        };
    }, [menuRef])
  return (
    <div className="dropdown_container">
        <div className="dropdown_header" onClick={openList}>
            <p style={props.type === "link" ? {fontSize: "18px", color: "rgba(0, 0, 0, 0.5)"} : {}}>{currentHeader}</p>
            <img src={dropdown_arrow} alt="arrow"/>
        </div>
        <div ref={menuRef} className="choice_container" style={listOpen ? {display: "block"} : {display: "none"}}>
            <p id="selection_instruction">{props.inst}</p>
            <div className="items_list">
                {props.items_list.map((item) =>{
                    return <p key={item} onClick={setItem}>{item}</p>
                })}
            </div>
        </div>
    </div>
  )
}

export default Dropdown