import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './src/reducers/reducers';
import App from './App';
import Video from './src/demoPlayVideo/video';
import CommentBox from './src/demoPlayVideo/commentBox';
import Footer from './src/kucasino/footer';
import Header from './src/kucasino/header';
import Body from './src/kucasino/body';

let store = createStore(todoApp)
let rootElement = document.getElementById('app')

render(
    <Provider store={store}>
            <Header />
            <Body />
            <Footer />
    </Provider>,
    rootElement
)