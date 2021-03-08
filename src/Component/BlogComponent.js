import React from 'react'
import { Link } from 'react-router-dom'
import { IMG, Tag } from '../Styles/blogpage'
import { Container, GridContainer } from '../Styles/projects'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Button } from '../Styles/CommentCardStyle'

const BlogComponent = ({ blogs, auth: { isAuthenticated }}) => {
    return (
        <GridContainer>
            {
                blogs && blogs.map((item) => (
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
                           {
                               isAuthenticated ? 
                               <Button>Edit Blog</Button>
                               :
                               ""
                           }

                        
                        
                    </Container>  
                ))
            }
        </GridContainer>
    )
}
BlogComponent.propTypes = {
    auth: PropTypes.bool,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(BlogComponent)
