import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0
    }

    handleIncrement = (product) => {  //arrow functions dont rebind "this", they inherit "this"
        console.log(product);
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <p className={this.formatClasses()}>{this.formatCount()}</p>
                <button
                    onClick={ () => this.handleIncrement({id:1}) }
                    className="btn btn-secondary btn-sm"
                >
                    increment
                </button>
            </div>
        );
    }

    formatClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;