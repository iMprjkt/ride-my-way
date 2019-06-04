import React, { Component } from 'react'
import UserAvatar from '../components/UserAvatar'
import MapOverlay from '../components/MapOverlay'
import PositionPin from '../components/PositionPin'
import DestSlider from '../components/DestSlider'
import UserProfile from '../components/UserProfile'
import '../css/app.css'

class AppPage extends Component {
    render() {
        return (
            <div className="app-wrap">
            <UserAvatar />
            <MapOverlay />
            <PositionPin />
            <DestSlider />
            <UserProfile />
          </div>
        )
    }
}

export default AppPage