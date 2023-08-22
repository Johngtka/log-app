import React from 'react';

class Timer extends React.Component {
    state = {
        date: new Date(),
    };

    constructor(props) {
        super(props);
        setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

    render() {
        return (
            <span className="timer">
                {this.state.date.toLocaleString('pl-PL').replace(',', '')}
            </span>
        );
    }
}

export default Timer;
