import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getBooks} from "./api.js"


const FullBook = () => {
    const {id} = useParams()
    const [post, setBooks] = useState(null)

useEffect(() => {
    fetch('https://fakerapi.it/api/v1/books?_quantity=12')
}, [id]);
return (

<div>
    {post && (
        <>
        <img src={post.image}></img>
        <p>{post.title}</p>
        </>
    )}
</div>

)
    }
export {FullBook}