import React from 'react';

export default class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }
    
    state = { 
        chamber: null, 
        spinningTheChamber: false
    };
    

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }

    pullTrigger = () => {
        this.setState({
            spinningTheChamber: true
        })

        let chamberNum = Math.ceil(Math.random() * 8)

        this.timeout = setTimeout(() => {

            this.setState({
                spinningTheChamber: false,
                chamber: chamberNum,
            })
        }, 2000)
    }

    renderDisplay(){
        if(this.state.spinningTheChamber){
            return 'spinning the chamber and pulling the trigger! ...'
        }  
        if(this.state.chamber == this.props.bulletInChamber){
            return 'BANG!!!'
        } else {
            return 'you are safe!'
        }
    }

    render() {
        return (
            <div className='rouletteGun'>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.pullTrigger}>Pull the trigger!</button>
            </div>
        )
    }
}


