import { useState } from 'react'

const AddEvent = () => {

  const [title, setTitle] = useState('')
  const [timeStamp, setTimeStamp] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {title, timeStamp: Date.parse(timeStamp), description};

    setLoading(true)

    fetch('http://localhost:8080/events', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event)
    }).then(() => {

      setLoading(false)
    })
  }

  return (
    <div>
      <div className='event-header'>
        <h1>Add Event</h1>
      </div>
      <form className='subContainer' onSubmit={handleSubmit}>
        <div className='field-warp'>
          <input type="text" name='title' value={title} placeholder='Enter a title...' className='input' onChange={(e) => { setTitle(e.target.value) }}/>
        </div>
        <div className="timestamp input">
            <label htmlFor="timestamp" className='input' >Enter or Select Date and Time:</label>
            <input type="datetime-local" className='input' id='timestamp' name="timestamp" value={timeStamp} onChange={(e) => { setTimeStamp(e.target.value) }}/>
        </div>
        <div className='field-warp'>
          <textarea type="textarea" name='description' value={description} placeholder='Enter a description...' className='input txt-area'  onChange={(e) => { setDescription(e.target.value) }}/>
        </div>
        {!loading && <button className='btn'>Add event</button>}
        {loading && <button className='btn'>Adding...</button>}
      </form>
    </div>
  )
}

export default AddEvent