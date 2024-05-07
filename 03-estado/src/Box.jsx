import './Box.css';
import React, {Component} from 'react';

export class Box extends Component {

    constructor(props) {
        super(props);
        this.state = { currentSeconds: Number(props.start) };

        setInterval(() => {
            let newSecs = this.state.currentSeconds + 1;
            this.setState({ currentSeconds: newSecs })
        }, 1000);
    }

    render() {
        return (<div className="box">{this.state.currentSeconds} Segundos </div>);
    }
}