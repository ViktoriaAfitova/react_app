import React, { Component } from 'react';

export default class MyClassButton extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.incrementClick = this.incrementClick.bind(this);
    }
    incrementClick = () => {
        this.setState( {count: this.state.count +1} )
    }

    render() {
        return (
            <button onClick={this.incrementClick}>
                {this.state.count}
            </button>
        )
    }
}

// rcc