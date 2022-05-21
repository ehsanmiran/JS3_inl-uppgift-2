// This file is considered to be the Routing file.

import React from 'react'
import { Route, Routes } from 'react-router-dom'

import EventsList from './EventsList'
// import { ProtectedRoute } from '../routes/ProtectedRoute'
// import CreatePostView from './CreatePostView'
// import LoginView from './LoginView'
// import NewsView from './NewsView'
// import PostDetailsView from './PostDetailsView'

const Views = () => {
  return (
    <Routes>
      <Route path='/' element={ <EventsList /> } />
      {/* <Route path='/posts/:id' element={ <PostDetailsView /> }/> */}
      {/* <Route path='/create' element={ 
      <ProtectedRoute>
        <CreatePostView /> 
      </ProtectedRoute>
      } /> */}
    </Routes>
  )
}

export default Views