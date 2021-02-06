import React from 'react';
import Heder from './Heder';
import Hero from './Hero';
import Timer from './Timer';
export default function Home(props) {
    let {greetings} = props;
    return (

       <div id="homeDivId">
            <h1>{greetings}</h1>
            <Timer/>
            <Heder nameFromUser = "David" email = "David@gmail.com" city = "Cape-Town"/>
      
      <div className = "heroDivIdOfApp">
      <Hero heroName ="Yuji Itadori" heroAge ={17} heroPower = "Demon Soul" heroImeg = './imges/jujutsu kaisen.gif'/>
      <Hero heroName ="Shigeo Kageyama" heroAge ={13} heroPower = "Telekinesis" heroImeg = './imges/mob psycho.gif'/>
      <Hero heroName ="Asta" heroAge ={15} heroPower = "Magic Book" heroImeg = './imges/Asta black clover.gif'/>
      </div>

      <div className = "heroDivIdOfApp">
      <Hero heroName ="Shinra Kusakabe" heroAge ={18} heroPower = "Blazing Legs" heroImeg = './imges/Shinra Kusakabe.gif'/>
      <Hero heroName ="Monkey D. Luffy" heroAge ={17} heroPower = "Rubber powers" heroImeg = './imges/Monkey D. Luffy.gif'/>
      <Hero heroName ="Saitama" heroAge ={27} heroPower = "One Punch Man" heroImeg = './imges/Saitama.gif'/>
      </div>
       </div>
    )
}
