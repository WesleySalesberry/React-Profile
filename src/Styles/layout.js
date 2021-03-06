import styled from 'styled-components';

export const AppStyle = styled.div`
`
export const MainContent = styled.div`
    width: 84%;
    margin-left: 16%;
    background-color: #10121B;
    min-height: 100vh;
    background-image: url('https://res.cloudinary.com/wes1696/image/upload/v1614195912/dots_pj22uw.svg');
    display: grid;
    position: relative;
    
    @media screen and (max-width: 1000px){
            margin-left: 0;
            width: 100%;
        }
`;

export const Content = styled.div`
     margin: 5rem 15rem;
    @media screen and (max-width: 1100px){
            margin: 2rem 10rem;
        }

        @media screen and (max-width: 1400px){
            margin: 3rem 10rem;
        }

        @media screen and (max-width: 1400px){
            margin: 3rem 10rem;
        }

        @media screen and (max-width: 710px){
            margin: 2rem 3rem;
        }
        
        @media screen and (max-width: 1000px){
            margin-left: 0;
            width: 100%;
        }
`

export const Sidebar = styled.div`
    width: 16%;
    height: 100vh;
    background-color: #191D2B;
    position: fixed;
    z-index: 11;
    
    transform-origin: left;

    @media screen and (max-width: 1000px){
        transition: all .4s ease-in-out;
        transform: translateX(-100%);
        width: 30%;
    }

    @media screen and (max-width: 411px){
        width: 50%;
    }

    .nav-toggle{
        @media screen and (max-width: 1000px){
            transition: all .4s ease-in-out;
            transform: translateX(0);
        }
`;

export const NavBTN = styled.div`
    position: absolute;
    z-index: 10;
    right: 10%;
    top: 5%;
    width: 4rem;
    height: 4rem;
    display: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    .lines-1, .lines-2, .lines-3{
        height: .4rem;
        width: 100%;
        background-color: #3858cc;
        pointer-events: none;
        display: none;
        border-radius: 20px;
        &:not(:last-child){
            margin-bottom: .5rem;
        }
    }

    @media screen and (max-width: 1000px){
        display: block;
        .lines-1, .lines-2, .lines-3{
            display: block;
        }
    }
`