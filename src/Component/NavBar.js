import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Profile, IMG, NavItems, NavItem, Footer } from '../Styles/navbar'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {logout} from '../Redux/auth/auth'

const NavBar = ({logout, auth: { isAuthenticated, loading }}) => {
    const vistorLinks = (
        <NavItems>
            <NavItem><NavLink to="/">Home</NavLink></NavItem>
            <NavItem><NavLink to="/about">About</NavLink></NavItem>
            <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
            <NavItem><NavLink to="/blog">Blog</NavLink></NavItem>
            <NavItem><NavLink to="">Contact</NavLink></NavItem>
        </NavItems>
    )
    const adminLinks = (
        <NavItems>
            <NavItem><NavLink to="/dashboard">Dashboard</NavLink></NavItem>
            <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
            <NavItem><NavLink to="/blog">Blog</NavLink></NavItem>
            <NavItem><NavLink to="/unpublished-blogs">Unpublished</NavLink></NavItem> 
            <NavItem><NavLink to="/" onClick={logout}>Logout</NavLink></NavItem> 
        </NavItems>
    )
    return (
        <Navbar>
            <Nav> 
                <Profile>
                    <IMG src="https://res.cloudinary.com/wes1696/image/upload/v1615219348/me_bdanzx.png" alt="my photo" />
                </Profile>
                {
                    !loading && isAuthenticated ? adminLinks : vistorLinks
                }
                <Footer>
                    <p>@Salesberry Media</p>
                </Footer>
            </Nav>
        </Navbar>
    )
}

Navbar.propTypes = {
    auth: PropTypes.bool,
}

const mapStateToProps = state => ({
    auth: state.auth,
    logout: PropTypes.func.isRequired,
})

export default connect(mapStateToProps, { logout })(NavBar)
