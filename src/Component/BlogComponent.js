import React from 'react'
import { IMG, Tag } from '../Styles/blogpage'
import { Container, GridContainer } from '../Styles/projects'

export const BlogComponent = ({ blogs }) => {
    return (
        <GridContainer>
            {
                blogs && blogs.map((item, idx) => (
                    <Container key={item.id}>
                        <IMG src={item.image} alt="title image"/>
                        <h1>{item.title}</h1>
                        {/* TODO: Figure out how to end at the end of a word */}
                        <p>{
                            item.body.length > 200 ?
                                item.body.substring(0, 200) + "..."
                            :
                                ''
                        }</p>
                        
                           <Tag>{item.tags}</Tag>
                        
                        
                    </Container>  
                ))
            }
        </GridContainer>
    )
}
