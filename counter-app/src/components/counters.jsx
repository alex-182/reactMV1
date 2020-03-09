import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = { 
        counters: [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0}
        ]
    }

    handleDelete = () => {
        console.log("Raising event!!")
    }

    render() { 
        return ( 
            <React.Fragment>
                {this.state.counters.map(counter => <Counter key={counter.id}  onDelete={this.handleDelete}  value={counter.value}>
                    <span>counter id: {counter.id}</span>
                </Counter>)}
            </React.Fragment>
         );
    }
}
 
export default Counters;