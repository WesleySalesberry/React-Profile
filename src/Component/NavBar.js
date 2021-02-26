import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Profile, IMG, NavItems, NavItem, Footer } from '../Styles/navbar'

export const NavBar = () => {
    return (
        <Navbar>
            <Nav> 
                <Profile>
                    <IMG src="https://source.unsplash.com/random" alt="my photo" />
                </Profile>
                <NavItems>
                    <NavItem>
                        <NavLink to="/">
                            Home
                        </NavLink>
                        <NavLink to="/about">
                            About
                        </NavLink>
                        <NavLink to="/projects">
                            Projects
                        </NavLink>
                        <NavLink to="/blog">
                            Blog
                        </NavLink>
                        <NavLink to="">
                            Contact
                        </NavLink>
                    </NavItem>
                </NavItems>
                <Footer>
                    <p>@Salesberry Media</p>
                </Footer>
            </Nav>
        </Navbar>
    )
}
