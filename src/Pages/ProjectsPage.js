import React, { useState, useEffect } from 'react'
import { api } from '../Utils/api'
import { Headline } from '../Component/Headline'
import { ProjectComponent } from '../Component/ProjectComponent'
import { LoaderComponent } from '../Component/LoaderComponent'

export const ProjectsPage = () => {
    const [myProjects, setMyProjects] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect( _ => {
        async function fetchData(){
            fetchProjects()
        }

        fetchData()
    }, [])

    const fetchProjects = async () => {
        try {
            const response = await api.get('project/')
            setMyProjects(response.data.data)
            setIsLoaded(true)
        } catch (error) {
            console.log(error)
        }
    }

    return !isLoaded ? 
        (
            <>
                <Headline maintitle={"Work"} subtitle={"Work"}/>
                <LoaderComponent />
            </>
        )
    :
        (
            <>
                <Headline maintitle={"Work"} subtitle={"Work"}/>
                <ProjectComponent key={myProjects.id} projects={myProjects} />    
            </>
        )
}
