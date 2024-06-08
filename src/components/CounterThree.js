import React, { useReducer } from 'react'
const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
function CounterThree() {
const [countOne,dispatchOne] = useReducer(reducer, initialState)
const [countTwo,dispatchTwo] = useReducer(reducer, initialState)
    return (
        <div>CounterThree<br/>
        <div>Count One={countOne}</div>
        <button onClick={()=>dispatchOne('increment')}>Increment</button>
        <button onClick={()=>dispatchOne('decrement')}>Decrement</button>
        <button onClick={()=>dispatchOne('reset')}>Reset</button>
        <div>Count Two={countTwo}</div>
        <button onClick={()=>dispatchTwo('increment')}>Increment</button>
        <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
        <button onClick={()=>dispatchTwo('reset')}>Reset</button>
        </div>
    )
}

export default CounterThree