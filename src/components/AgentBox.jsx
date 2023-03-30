import React from 'react'

function AgentBox(props) {
    return (
      <>
            <div className='agent-box'>
                <img src={props.avatar} alt="Avatar" />
                <h4>{props.name}</h4>
                <p>{props.role}</p>
            </div>   
      </>
  )
}

export default AgentBox;