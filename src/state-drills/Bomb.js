import React from 'react';

export default class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0, timer: 'tick' }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState ({
                count: this.state.count + 1
            })
            if(this.state.count>=8){
                this.setState({
                    timer: 'BOOM'
                })
            } else this.state.count % 2 ? this.setState({ timer: 'tick' }) : this.setState({ timer: 'tock'})
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render() {
        return (
            <div className='bomb'>
                <p>{this.state.timer}</p>
            </div>
        )
    }
}


