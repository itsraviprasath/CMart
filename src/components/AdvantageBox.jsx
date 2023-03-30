import React from 'react'

function AdvantageBox(props) {
    return (
      <>
            <div className='advantage-box'>
                <span className="material-symbols-outlined advantage-icon">{props.icon}</span>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>   
      </>
  )
}

export default AdvantageBox;