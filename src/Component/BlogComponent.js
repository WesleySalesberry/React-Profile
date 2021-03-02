import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { IMG, Tag } from '../Styles/blogpage'
import { Container, GridContainer } from '../Styles/projects'

const BlogComponent = ({ blogs }) => {
    return (
        <GridContainer>
            {
                blogs && blogs.map((item, idx) => (
                    <Container key={item.id}>
                        <IMG src={item.image} alt="title image"/>
                        <Link to={`/blog-post/${item.id}`}><h1>{item.title}</h1></Link>
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

export default withRouter(BlogComponent)
