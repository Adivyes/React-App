import React from 'react';
import './Hero.css'

export default class Heder extends React.Component{
    constructor(props){
        super(props)
        this.state = {city:"Cape-Town"}
    }
   
    render(){
        let {nameFromUser,email} = this.props;
        let {city} = this.state
        return(
            <div id="headrDivId">
                
                <h5>My name is {nameFromUser}</h5>
                <h5>{email}</h5>
                <h5>and i live in {city}</h5>
                <h3>My Favorite six Heroes Are:</h3>
            </div>
        )
    }
}