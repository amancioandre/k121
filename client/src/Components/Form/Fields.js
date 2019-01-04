import React from 'react';

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
        <button onClick={(i) => props.deleteBtn(i)}>Remove</button>
      </div>
    )
  })

  return fields
}

export default form;
