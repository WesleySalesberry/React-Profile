import style from 'styled-components';

export const Projects = style.div`
    display: grid;
    grid=template-columns: repeat(3, 1fr);
    row-gap: 2rem;
    column-gap: 1rem;
    margin: 50px;
    width: 100%;

    @media screen(max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen(max-width: 900px){
        grid-template-columns: repeat(1, 1fr);
    }
`