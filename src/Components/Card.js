import React from 'react';
export default function Card(props) {
  return (
    <div className="card">
        <p className="title">{props.title}</p> 
        <p id="card_content">{props.content}</p>   
        <button>KnowMore</button>
    </div>
  )
}
