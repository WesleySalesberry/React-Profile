import React, {useEffect, useState} from 'react'
import BlogComponent  from '../Component/BlogComponent'
import { Headline } from '../Component/Headline'
import { LoaderComponent } from '../Component/LoaderComponent'
import { api } from '../Utils/api'

export const BlogsPage = () => {
    const [myBlogs, setBlogs] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect( _ => {
        async function fetchData(){
            fetchBlogs()
        }

        fetchData()
    }, [])

    const fetchBlogs = async () => {
        try {
            const response = await api.get('blog/')
            setBlogs(response.data.data)
            setIsLoaded(true)
        } catch (error) {
            console.log(error)
        }
    }
 
    return !isLoaded ? 
        (
            <>
                <Headline maintitle={"Blogs"} subtitle={"Blogs"}/>
                <LoaderComponent />
            </>
        )
    :
        (
            <>
                <Headline maintitle={"Blogs"} subtitle={"Blogs"}/>
                <BlogComponent blogs={myBlogs}/>
            </>
        )
}
