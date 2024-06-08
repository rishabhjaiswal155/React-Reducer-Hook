import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }

        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'something went wrong!!!'
            }

        default:
            return state
    }
}


function DataFetchingTwo() {
    const [state,dispatch]=useReducer(reducer,initialState)
   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(resp => {
                console.log(resp)
                dispatch({type:'FETCH_SUCCESS' ,payload:resp.data})
            })
            .catch(error => {
                console.log(error)
                dispatch({type:'FETCH_ERROR'})
            })
   },[])

    return (
        <div>DataFetchingTwo (with useReducer and useEffect)<br/>
        {state.loading?'Loading':state.post.title}
        {state.error?state.error:null}
        </div>
    )
}

export default DataFetchingTwo