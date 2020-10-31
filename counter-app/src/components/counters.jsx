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

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });

        this.setState({counters})
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleResetItem = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value = 0;
        this.setState({counters});
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters});
    }

    render() { 
        return ( 
            <React.Fragment>
                <button onClick={this.handleReset} className="btn btn-primary btn-small m-2">Reset</button>
                {this.state.counters.map(counter => <Counter
                        key={counter.id}
                        onIncrement={this.handleIncrement}
                        onResetItem={this.handleResetItem}
                        onDelete={this.handleDelete}
                        counter={counter}
                    >
                    <span>counter id: {counter.id}</span>
                </Counter>)}
            </React.Fragment>
         );
    }
}
 
export default Counters;