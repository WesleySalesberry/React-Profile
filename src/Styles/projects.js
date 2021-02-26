import style from 'styled-components';


export const GridContainer = style.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1rem;
    column-gap: 0.5rem;
    margin-top: 100px;
    width: 100%;

    @media screen and (max-width: 1600px){
        grid-template-columns: repeat(2, 1fr);
        row-gap: 0.5rem;
        column-gap: 0.5rem;
    }

    @media screen and (max-width: 900px){
        grid-template-columns: repeat(1, 1fr);
    }

`

export const Container = style.div`
    text-align: center;
    padding: 10px;
    height: 250px auto;
    width: 350px;
    background: #0381ff38;
    border-radius: 10px;
    border: 1px solid #2e344e;
` 
export const LinkContainer = style.div`
    display: flex;
    justify-content: space-around;
    
    .github-icon{
        color: #6e5494;
        transition: all .4s ease-in-out; 
    }

    .github-icon:hover{
        color: #6cc644;
    }
    .link-icon{
        color: #777;
        opacity: 0.5;
        transition: all .4s ease-in-out;
    }

    .link-icon:hover{
        opacity: 1;
        color: #d85600;
        
    }
`

export const A = style.a`
    text-decoration: none;
    
`