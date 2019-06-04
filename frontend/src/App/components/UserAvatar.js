import React, { Component } from 'react'

class UserAvatar extends Component {
    render() {
        return (
            <div id="userAvatar" className="grid-item user">
            <button className="user-btn" onclick="openNav()">
              <img className="avatar" src={require("../assets/avatar.png")} />
            </button>
          </div>
        )
    }
}

export default UserAvatar