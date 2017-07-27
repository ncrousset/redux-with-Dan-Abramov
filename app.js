import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './src/components/counter';

const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(counter);

const render = () => {
    ReactDOM.render(
        <Counter value={ store.getState() } />,
        document.getElementById('main')
    );

};

store.subscribe(render);
render();

document.addEventListener('click', () => {
   store.dispatch({type: 'INCREMENT'});
});