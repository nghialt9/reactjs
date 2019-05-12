import React, { Component } from 'react';
import Comment from './comment'

class CommentList extends Component {
    render() {
        return (
            <div className="comment-list">
                {this.props.data.map((c, i) => {
                    return (
                        <div className="comment-root" key={i}>
                            <Comment author={c.author} text={c.text} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CommentList