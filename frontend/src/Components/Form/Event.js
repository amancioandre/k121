import React, { Fragment } from 'react';

import './Event.css';

/* Material UI */
import { TextField } from '@material-ui/core';

export default ({ event: { title, date, description } }) => {
  return (
    <Fragment>
      <div className="Event">
        <TextField
          margin="normal"
          variant="outlined"
          id="title"
          name="title"
          defaultValue={title !== '' ? title : ''}
          label="Your Event Title"
          required
        />
        <TextField
          margin="normal"
          variant="outlined"
          id="date"
          type="date"
          name="date"
          defaultValue={date !== '' ? date : ''}
          required
        />
        <TextField
          margin="normal"
          multiline
          rows="6"
          variant="outlined"
          id="description"
          name="description"
          defaultValue={description !== '' ? description : ''}
          label="What an invitation says..."
          required
        />
      </div>
    </Fragment>
  )
}
