import React, {useState} from 'react'
import './Hero.css'

export default function Hero(props) {
    let [heroBtn, setHeroBtn] = useState(false)

    let {heroName, heroAge, heroPower, heroImeg} = props
    
    function heroBtnFunction (){
        setHeroBtn(heroState => !heroState)
    }
    return (
        
        <div id = "heroDivId">
            
            <img src={heroImeg} />
            <button onClick = {heroBtnFunction}>Click</button>
            {heroBtn ?
            <div id = "toggelDivOn">
            <h3>Name: <span class = "heroSpan">{heroName}</span></h3>
            <h3>Age: <span class = "heroSpan">{heroAge}</span></h3>
            <h3>My Powers: <span class = "heroSpan">{heroPower}</span></h3>
            </div>
                :
            <div id = "toggelDivOf">
                <h3>Click the button for informetion</h3>
            </div>
            }
        </div>
    )
}
