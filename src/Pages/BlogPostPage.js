import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { CommentCard } from '../Component/CommentCard';
import { Headline } from '../Component/Headline'
import { LoaderComponent } from '../Component/LoaderComponent';
import { Tag } from '../Styles/blogpage';
import { PostContainer, Image, CommentsContainer } from '../Styles/blogpoststyle';
import { api } from '../Utils/api'
// import {FaComment } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BlogPostPage = () => {
    const [myPost, setPost] = useState([])
    const [hasLoaded, setHasLoaded] = useState(false)
    const params = useParams()
    console.log(typeof myPost.body)

    useEffect( _ => {
        async function fetchData(){
            fetchBlogs()
        }

        fetchData()
    }, [])

    const fetchBlogs = async () => {
        try {
            const response = await api.get(`blog/${params.id}`)
            setPost(response.data.data)
            setHasLoaded(true)
        } catch (error) {
            console.log(error)
        }
    }
    
    return !hasLoaded ?
        (
            <>
                <LoaderComponent />
            </>
        )
    :
        (
            <>
                <Headline maintitle={`${myPost.title}`} subtitle={"ramblings Post"}/>
                <PostContainer>
                    <Image src={myPost.image} alt=""/>
                    <Tag>{ myPost.tags}</Tag>
                    <p>{myPost.body}</p>
                </PostContainer>
                {
                    myPost.comments.length > 0 ? 
                        <CommentsContainer>
                            {
                                myPost.comments.map(item => (
                                    <CommentCard
                                        name={item.name}
                                        email={item.email}
                                        date={item.createdAt}
                                        comment={item.comment}
                                    />  
                                ))
                            }
                        </CommentsContainer>
                    :
                        <p>No Comments Yet</p>

                }
            </>
        )
}
    
