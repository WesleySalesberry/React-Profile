import styled from 'styled-components';

export const Home = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
`;

export const Hero =styled.header`
`;

export const HeroText =styled.h1`
    color: white;
    text-align: center;
    font-size: 3.6rem;
`;

export const HeroSubText =styled.p`
    text-align: center;
`;

export const IconHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    
    .icons{
        margin-right: 1rem;
        font-size: 2.8rem;
        
    }

    .github-icon{
        color: ##6e5494;
        transition: all .4s ease-in-out;
    }

    .linkedin-icon{
        color: #0e76a8;
        transition: all .4s ease-in-out;
    }

    .github-icon:hover{
        color: #6cc644;
    }

    .linkedin-icon:hover{
        color: #FFF;
    }
`;

// export const IconHolder = style.a`
//     margin-right: 1rem;
//     .icon{
//         font-size: 2.8rem;
//         color: #a4acc4;
//         transition: all .4s ease-in-out;
//     }
// `
// .icons{
    //     margin-right: 1rem;
    // }

    // .icon{
    //     font-size: 2.8rem;
    //     transition: all .4s ease-in-out;
    // }

