import React from 'react';

class Counter extends React.Component {
    render() {
        return React.DOM.h1('', `${this.props.value}`);
    }
}

export default Counter;