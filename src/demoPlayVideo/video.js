import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
class Video extends Component {
  render () {
    return <ReactPlayer url='[https://www.youtube.com/watch?v=dn4uH41zxpw, https://www.youtube.com/watch?v=V6CG0ti0KxY ]' light="true"/>
  }
}

export default Video