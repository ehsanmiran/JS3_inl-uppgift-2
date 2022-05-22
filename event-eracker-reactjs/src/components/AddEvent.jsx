import React from 'react'

const AddEvent = () => {
  return (
    <div>
      <div className='event-header navbar'>
        <h2>Add Event</h2>
        <h2>x</h2>
      </div>
      <div className='secondaryContainer'>
        <form>
          <div className='field-warp'>
            <input type="text" name='title' placeholder='Enter a title...' className='input' />
          </div>
          <div className='field-warp'>
            <textarea type="textarea" name='description' placeholder='Enter a description...' className='input txt-area' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddEvent