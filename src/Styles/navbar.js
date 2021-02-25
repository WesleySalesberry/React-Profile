import style from 'styled-components';

export const Navbar = style.div`
    height: 100vh;
    width: 25%
    border-right: 1px solid #2e344e;
`;

export const Nav = style.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
`

export const Profile = style.div`
    margin: 1rem;
    text-algin: center;
    border-bottom: 1px solid #2e344e;
    width: 100%;
`

export const IMG = style.img`
    width: 100%;
    border-radius: 100%;
    border: 5px solid #2e344e;
    margin-bottom: 1rem;
`

export const NavItem = style.ul`
    width: 100%;
`

export const NavItems = style.li`
    list-style: none;
    text-align: center;
    
    a{
        display: block;
        position: relative;
        text-decoration: none;
        color: inherit;
        padding: .5rem 0;
    }

    a::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: .4rem;
            height: 100%;
            width:100%;
            background-color: #0381ff33;
            transform: scale(0);
            transition: transform .6s, .2s width .5s cubic-bezier(1,-0.16,.6,1.35);
        }

        a:hover::before{
            transform: scale(1);
        }
`;

export const Footer = style.footer`
    width: 100%;
    border-top: 1px solid #2e344e;

    p{
        text-align: center;
        padding: 1rem 0; 
    }
`;
