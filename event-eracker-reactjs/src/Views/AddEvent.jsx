import React from 'react'
import DateTimePicker from '../components/DateTimePicker'

const AddEvent = () => {
  return (
    <div>
      <div className='event-header navbar'>
        <h2>Add Event</h2>
        <h2>x</h2>
      </div>
      <form className='subContainer'>
        <div className='field-warp'>
          <input type="text" name='title' placeholder='Enter a title...' className='input' />
        </div>
        <DateTimePicker />
        <div className='field-warp'>
          <textarea type="textarea" name='description' placeholder='Enter a description...' className='input txt-area' />
        </div>
        <button className='btn'> Add event</button>
      </form>
    </div>
  )
}

export default AddEvent