import React from 'react';

export default ({ title, date, description }) => {
  return (
    <div>
      <div>
        <label htmlFor="title">Event Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
        />
      </div>
      <div>
        <label htmlFor="date">Event Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={date}
        />
      </div>
      <div>
        <label htmlFor="description">Event Description</label>
        <textarea
          rows="5"
          cols="33"
          id="description"
          name="description"
          type="textarea"
          value={description}
        > Hey Friends, guess what!? ... </textarea>
      </div>
    </div>
  )
}
