import React from 'react';
import './Hero.css'

export default class Heder extends React.Component{
    constructor(props){
        super(props)
        this.state = {hours:"00",minutes:"00", seconds:"00"};
        this.runTimer = this.runTimer.bind(this);
    }
   
    runTimer(){
        // let newDate = new Date()
        // this.setState({hours:newDate.getHours(),minutes:newDate.getMinutes(), seconds:newDate.getSeconds()})
    }

    componentWillMount(){
    this.runTimer();
    }
    
    render(){
        let {hours,minutes,seconds} = this.state
        let {nameFromUser,email,city} = this.props;
        
        return(
            <div id="headrDivId">
                <h5>My name is {nameFromUser}</h5>
                <h5>{email}</h5>
                <h5>and i live in {city}</h5>
                <h3>My Favorite six Heroes Are:</h3>
            </div>
        )
    }
    
    componentDidMount(){
        this.runTimer();
    }
}