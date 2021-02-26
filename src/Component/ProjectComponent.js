import React from 'react'
import { GridContainer, Container,  LinkContainer, A } from '../Styles/projects'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export const ProjectComponent = ({ projects }) => {
    return (
        <GridContainer>
            {
                 projects && projects.map((item) => (
                     <Container key={item.id}>
                         <h5>{item.name}</h5>
                         <hr/>
                         <p>{item.description}</p>
                         <p>{item.languages}</p>
                         <LinkContainer>
                             {
                                 item.github ? <A href={item.github} target="_blank" rel="noopener noreferrer" className="github-icon" > <FontAwesomeIcon icon={faGithub} className="github-icon"/> Github</A> : ''
                             }
                             {
                                 item.website ? <A href={item.website} target="_blank" rel="noopener noreferrer" className="link-icon"><FontAwesomeIcon icon={faExternalLinkAlt} className="link-icon"/> Website</A> : ''
                             }                             
                         </LinkContainer>
                     </Container> 
                ))
            }
        </GridContainer>
    )
}
