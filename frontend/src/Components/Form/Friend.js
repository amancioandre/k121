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
        <div className="inputFriend">
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
        </div>
        <div className="inputFriend">
          <TextField
            margin="normal"
            variant="outlined"
            label="Email"
            type="email" 
            defaultValue={props.friends[i].email}
            inputProps={{
              id: emailId,
              "data-id": i,
              name: emailId,
              className: 'email',
            }}
            required
          />
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
