import styled from 'styled-components';

export const Title = styled.div` 
    text-transform: uppercase;
    font-size: 2rem;
    position: relative;
    padding-bottom: 1rem;
    letter-spacing: 3px;

    &::before{
        content: "";
        bottom: 0;
        position: absolute;
        left: 0;
        background-color: #0381ff38;
        width: 6rem;
        height: .4rem;
        border-radius: 50px;
    }

    &::after{
        content: "";
        bottom: 0;
        position: absolute;
        left: 0;
        background-color: #037FFF;
        width: 3rem;
        height: .4rem;
        border-radius: 50px;
    }
`

export const Span = styled.span`
    position: absolute;
    top: 15%;
    left: 0;
    font-size: 5rem;
    opacity: 0.07;
`