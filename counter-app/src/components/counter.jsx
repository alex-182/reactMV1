import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                {console.log(this.props)}
                <p>{this.props.children}</p>
                <p className={this.formatClasses()}>{this.formatCount()}</p>
                <button
                    onClick={ () => this.props.onIncrement(this.props.counter) }
                    className="btn btn-secondary btn-sm"
                >
                    increment
                </button>
                <button onClick={() => this.props.onResetItem(this.props.counter)} className="btn btn-secondary btn-sm m-2 btn-warning">Reset</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    formatClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;