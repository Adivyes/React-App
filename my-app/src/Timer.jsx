import React, {useState, useEffect} from 'react'

export default function Timer(props) {

    let [hours, setHours] = useState ('00');
    let [minutes, setMinutes] = useState ('00');
    let [seconds, setSeconds] = useState ('00');
    let [setInt, setTimerInterval] = useState({});
    let [controler, setControler] = useState (true);
    let [buttonName, setButtonName] = useState("Start Timer")
   useEffect(() => {
 
   })

    function timerRun(){
        setButtonName('Stop')
        setTimerInterval(setInterval(()=>{
         let newDate = new Date()
        setHours(newDate.getHours());
        setMinutes(newDate.getMinutes());
        setSeconds(newDate.getSeconds());
        
    },1000)
    )
    }

    function timerStop(){
        setButtonName('Start')
        clearInterval(setInt)
    }
    
    function timerControler() {
        controler ? timerRun() : timerStop();
        setControler(!controler)
    }
    return (
        <div>
         <button onClick={timerControler}>{buttonName}</button>

         <div id = "timer"><h4>{hours}:</h4><h4>{minutes}:</h4><span>{seconds}</span></div>

        </div>
    )
}
