import React from 'react';

import './Friend.css';

/* Material UI */
import { Icon, IconButton, TextField } from '@material-ui/core';

const form = (props) => {
  const fields = props.friends.map((field, i) => {
    let nameId = `name-${i}`;
    let emailId = `email-${i}`;

    return (
      <div key={i} className="friendField">
        <div>
        <TextField
          margin="normal"
          variant="outlined"
          label="Name"
          defaultValue={props.friends[i].name}
          inputProps={{
            "data-id": i, 
            id: nameId,
            name: nameId,
            className: 'name',
          }}
          required
        />
          <label htmlFor={nameId}>Name</label>
          <input 
            id={nameId}
            data-id={i} 
            type="text" 
            name={nameId}
            defaultValue={props.friends[i].name}
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
            defaultValue={props.friends[i].email}
            className='email' 
            required />
        </div>
        <div className='deleteBtn'>
          <IconButton onClick={(i) => props.deleteBtn(i)}>
            <Icon>delete</Icon>
          </IconButton>
        </div>
      </div>
    )
  })

  return fields
}

export default form;
