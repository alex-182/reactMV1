import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
        tags: ["tag1", "tag2", "tagn"]
    }

    render() {
        return (
            <React.Fragment>
                <p className={this.formatClasses()}>{this.formatCount()}</p>
                <button className="btn btn-secondary btn-sm">increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>   
            </React.Fragment>
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