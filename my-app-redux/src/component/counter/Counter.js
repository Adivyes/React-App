import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../actions'


 function Counter() {

    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispetch = useDispatch()

    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={() => dispetch(increment(5))}>+</button>
            <button onClick={() => dispetch(decrement())}>-</button>
            <h1>{counter}</h1>
            {isLogged ? <h3>Hi im trying my best</h3> : " "}
        </div>
    )
}
export default Counter