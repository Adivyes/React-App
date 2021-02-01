import React from 'react';
import Header from './Heder';

export default function Home(props) {
    let {greetings} = props;
    return (

       <div id="homeDivId">
            <h1>{greetings}</h1>
       </div>
    )
}
