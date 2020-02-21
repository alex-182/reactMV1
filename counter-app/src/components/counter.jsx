import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 2
    }

    render() { 
        return (
            <React.Fragment>
                <p>{this.formatCount()}</p>
                <button>increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;