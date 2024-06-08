import React, { useState, useEffect } from 'react'
import axios from 'axios'
function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(resp => {
                console.log(resp)
                setLoading(false)
                setError('')
                setPost(resp.data)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
                setError('Something went wrong!!!')
                setPost({})
            })
    }, [])
    return (
        <div>DataFetchingOne(with useState and useEffect)<br />
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne