import styled from 'styled-components'
export const Drop=styled.div`
    padding: 50px 0;
    text-align: center;
    background: url('images/home-bg.jpg');
    background-size: cover;
    background-position: center;
    background-size:cover;
`

export const DropTitle=styled.h2`
    font-size: 60px;
    margin-bottom: 30px
`

export const Span=styled.span`
    font-weight: normal;
    color:orange;
    font-size:2em;
`

export const Form=styled.form`
    width: 70%;
    margin: auto;
`

export const Input=styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
    border-radius:10px;
    height:45px;
`

export const FormInput=styled.div`
    overflow: hidden
`

export const InputText=styled(Input)`
    float: left;
      width: 49%;
`

export const InputEmail=styled(Input)`
    float: right;
      width: 49%;
`

export const Sub=styled(Input)`
    width: 100%;
`

export const TextArea=styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc;
    border-radius:10px;
`

export const InputSubmit=styled(Input)`
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer;
    background-color:orange;
    height:50px;
    font-size:1.2em;
    color:#000;
    border-radius:20px;
`
