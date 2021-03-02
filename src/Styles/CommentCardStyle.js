import styled from 'styled-components';


export const Card = styled.div`
    background: #2e344e;
    border: 1px solid #037FFF;
    padding: 25px 12px 18px;
    border-radius: 10px;
    margin-bottom: 10px;
    width: 75%;
`
export const Name = styled.h2`
    font-weight: 300;
    @media (max-width: 500px) {
        font-size: 1rem;
    }
`

export const Date = styled.div`
    font-weight: 300;
    margin: 6px 0;
    @media (max-width: 500px) {
        font-size: 0.8rem;
    }
`

export const Body = styled.p`
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`

export const Buttons = styled.div`
    color: #333;
    display: flex;
    align-items: center;
    svg {
        transform: translateY(2px);
        margin-right: 5px;
    }
    @media (max-width: 500px) {
        flex-direction: column;
        & button {
        width: 100%;
        margin-bottom: 4px;
        font-size: 0.65rem;
        }
    }
`

export const Button = styled.button`
    margin: 0 5px;
    padding: 8px 14px;
    background: rgba(155, 155, 155, 0.2);
    color: #fff;
    cursor: pointer;
    border: 1px solid #fff;
    outline: 0;
    font-weight: 300;
    :hover {
        opacity: 0.8;
    }
`
