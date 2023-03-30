import React from 'react'

function SingleCounter(props) {
  return (
    <>
      <section>
        <div className='count-box'>
            <span className="material-symbols-outlined counter-icon">{props.icon}</span>
            <h1>{props.number}</h1>
            <h6>{props.text}</h6>
        </div>
      </section>
  </>
  )
}

export default SingleCounter;