import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
    constructor(){
        super()
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        setInterval(
            () => this.setState({
                date: new Date()
            }),
            1000
        );
    }

    render() {
        return(
            <div>
                {this.state.date}
            </div>
        )
    }
}

export default Clock;