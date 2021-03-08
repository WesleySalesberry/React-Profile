import React, { useState, useEffect } from 'react'
import BlogComponent from '../../Component/BlogComponent'
import { api } from '../../Utils/api'


export const UnpubBlogs = () => {
    const [myBlogs, setBlogs] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    let token;
    if(localStorage.token){
        token = localStorage.token
    }

    useEffect( _ => {
        async function fetchData(){
            fetchBlogs()
        }

        fetchData()
    }, [])

    const fetchBlogs = async () => {
        try {
            const response = await api.get('/blog/unpublished',{
                headers: {'Authorization': 'Bearer '+token}
            })
            setBlogs(response.data.data)
            setIsLoaded(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <BlogComponent blogs={myBlogs}/>
        </>
    )
}
