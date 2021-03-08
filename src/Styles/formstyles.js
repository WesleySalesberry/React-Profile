import styled, { css } from 'styled-components';

const SharedInputStyles = css`
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    padding: 0 20px;
`

export const Form = styled.form`
    width: 80%; 
    max-width: 700px;
    padding: 40px;
    box-sizing: border-box;
`

export const Input = styled.input`
    display: block;
    width: 90%;
    ${SharedInputStyles}
`

export const Button = styled.button`
    display: block;
    background: #0056d898;
    color: #a4acc4;
    font-size: .9rem;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    border: 1px solid #2e344e;
    box-sizing: border-box;
`

