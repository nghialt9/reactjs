import React from 'react';

import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './src/reducers/reducers';
import App from './App.jsx';
import Video from './src/demoPlayVideo/video';

let store = createStore(todoApp)
let rootElement = document.getElementById('app')

render(
    <Provider store = {store}>
        <Video />
    </Provider>,
    rootElement
)