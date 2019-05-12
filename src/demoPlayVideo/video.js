import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import CommentBox from './commentBox';
import { server } from '../authen/helper';

class Video extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      playing: false,
      source: 'https://www.youtube.com/watch?v=dn4uH41zxpw'
    };

    this.changeSource = this.changeSource.bind(this);
  }
  changeSource(name) {
    return () => {
      this.setState({
        source: name,
        playing: true
      });
      <CommentBox url={server.baseURL + "comments"} pollInterval={1000}/>
    };
  }

  render() {
    const elements = ['https://www.youtube.com/watch?v=dn4uH41zxpw',
      'https://www.youtube.com/watch?v=mNxNoHRfWRA&t=0s',
      'https://www.youtube.com/watch?v=Qd0AdsOGEvo',
      'https://www.youtube.com/watch?v=p7NThYHx4ac',
      'https://www.youtube.com/watch?v=eQgkJIBDtvM',
      'https://www.youtube.com/watch?v=DoFM8p6p_kA',
      'https://www.youtube.com/watch?v=VfLe4eCtggc',
      'https://www.youtube.com/watch?v=ub8dXATkosg',
      'https://www.youtube.com/watch?v=pxf7YkF0iN0'
    ];
    const items = []

    for (const [index, value] of elements.entries()) {
      items.push(
        <div key={index} className="col-xl-3 col-md-4 col-12">
          <div className="card" onClick={this.changeSource(value)}>
            <div className="player">
              <ReactPlayer url={value} pip controls width="100%" height="100%" />
            </div>
            <div className="card-body" onClick={this.changeSource(value)}>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="container">
        <div className="row">
          <ReactPlayer playing={this.state.playing} url={this.state.source} pip controls width="100%" height="400px" />
          .
        </div>
        <div className="row">
          {items}
        </div>
      </div>
    )
  }
}

export default Video