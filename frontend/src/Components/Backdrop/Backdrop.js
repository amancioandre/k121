import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
  const { message } = props
  return (
    <div className="Backdrop">
      <h1>{ message !== '' ?  message : null }</h1>
    </div>
  )
}

export default backdrop;