import React from 'react';

/* Material UI */
import { Icon, IconButton } from '@material-ui/core';

const form = (props) => {
  const fields = props.friends.map((field, i) => {
    let nameId = `name-${i}`;
    let emailId = `email-${i}`;

    return (
      <div key={i}>
        <div>
          <label htmlFor={nameId}>Name</label>
          <input 
            id={nameId}
            data-id={i} 
            type="text" 
            name={nameId}
            value={props.friends[i].name}
            className='name' 
            required />
        </div>
        <div>
          <label htmlFor={emailId}>Email</label>
          <input 
            id={emailId}
            data-id={i} 
            type="email" 
            name={emailId}
            value={props.friends[i].email}
            className='email' 
            required />
        </div>
        <IconButton onClick={(i) => props.deleteBtn(i)}>
          <Icon>delete</Icon>
        </IconButton>
      </div>
    )
  })

  return fields
}

export default form;
