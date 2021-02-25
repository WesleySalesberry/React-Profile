import React from 'react'
import { Headline } from '../Component/Headline'
import { Projects } from '../Styles/projects'
import projects from '../Data/projectData'
import { ProjectComponent } from '../Component/ProjectComponent'

export const ProjectsPage = () => {
    return (
        <>
            <Headline maintitle={"Projects"} subtitle={"Projects"}/>
            <Projects>
                <ProjectComponent project={projects} />
            </Projects>
        </>
    )
}
