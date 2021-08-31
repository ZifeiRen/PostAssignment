import React from 'react';
import { mount } from 'enzyme'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../../reducers';
import PostCreate from '../posts/PostCreate';
import PostForm from '../posts/PostForm'; 

let wrapped;

beforeEach(() => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(reduxThunk))
    );

    wrapped = mount(
        <Provider store={store}>
            <PostCreate />
        </Provider>
   )
})

it('show a PostForm component', () => {
    expect(wrapped.find(PostForm).length).toEqual(1)
})
