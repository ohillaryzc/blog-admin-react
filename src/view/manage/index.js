import React from 'react'
import NavBar from './NavBar'
import SlideBar from './SlideBar'
import { Route } from 'react-router-dom'
import Desktop from '../desktop'
import '../../css/manage/index.css'

class Manage extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar/>
        <SlideBar/>
        <div className="content">
          <Route path="/manage/desktop" component={Desktop}/>
        </div>
      </div>
    )
  }
}

export default Manage
