import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Heder from './Heder';
import Hero from './Hero';
import './Hero.css'

function App() {
  return (
    <div className="App">
      <Home greetings = "Hello World"/>
      <Heder nameFromUser = "David" email = "David@gmail.com"/>
      
      <div class = "heroDivIdOfApp">
      <Hero heroName ="Yuji Itadori" heroAge ={17} heroPower = "Demon Soul" heroImeg = './imges/jujutsu kaisen.gif'/>
      <Hero heroName ="Shigeo Kageyama" heroAge ={13} heroPower = "Telekinesis" heroImeg = './imges/mob psycho.gif'/>
      <Hero heroName ="Asta" heroAge ={15} heroPower = "A Magic Book" heroImeg = './imges/Asta black clover.gif'/>
      </div>
      <div class = "heroDivIdOfApp">
      <Hero heroName ="Asta" heroAge ={15} heroPower = "A Magic Book" heroImeg = './imges/Asta black clover.gif'/>
      <Hero heroName ="Yuji Itadori" heroAge ={17} heroPower = "Demon Soul" heroImeg = './imges/jujutsu kaisen.gif'/>
      <Hero heroName ="Shigeo Kageyama" heroAge ={13} heroPower = "Telekinesis" heroImeg = './imges/mob psycho.gif'/>
      </div>
    </div>
  );
}

export default App;
