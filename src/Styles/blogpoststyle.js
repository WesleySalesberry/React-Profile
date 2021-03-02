import style from 'styled-components';

export const PostContainer = style.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 50px;
`

export const Image = style.img`
    width: 50%;
    height: 30vh;
    margin: 10px;
`
export const Tags = style.div` 
    display: flex;
    justify-content: center;
`

export const Body = style.p`
    margin: 10px;
`

export const CommentsContainer = style.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`