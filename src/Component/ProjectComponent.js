import React from 'react'

export const ProjectComponent = ({ projects }) => {
    return (
        <div>
            {
                projects.map(item => {
                    console.log(item)
                })
            }
        </div>
    )
}
