import React from 'react';

const form = (props) => {
  return (
    <form>
      <div>
        <label htmlFor={props.id} >Name</label>
        <input id={props.id} type="text" name={props.name} required></input>
      </div>
      <div>
        <label htmlFor={props.id + 1}>Email</label>
        <input id={props.id + 1} type="email" name={props.name} required></input>
      </div>
    </form>
  )
}

export default form;
