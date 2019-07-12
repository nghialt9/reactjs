import React from 'react';

import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './src/reducers/reducers';
import App from './App';
import Video from './src/demoPlayVideo/video';
import CommentBox from './src/demoPlayVideo/commentBox';

let store = createStore(todoApp)
let rootElement = document.getElementById('app')

render(
    <Provider store = {store}>
        <CommentBox url='http://localhost:3000/comments' pollInterval='700' />
    </Provider>,
    rootElement
)