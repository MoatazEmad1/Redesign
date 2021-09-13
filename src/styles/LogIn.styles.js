import styled from 'styled-components'

export const LogInContainer=styled.div`

width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`
export const ImageContainer=styled.div`

width: 100px;
height: 100px;
margin: 0 auto;
img{
    width: 100%;
    object-fit: cover;
}

`
export const Card=styled.div`

width: 50%;
height: 50%;
display: flex;
flex-direction: column;

input{
    width: 300px;
    margin: 0 auto;
    padding: 10px;
    border:1px solid #D0D0D0 ;
    outline: none;
    margin-top:15px;
    border-radius: 10px;
}
button{
    width: 320px;
    margin: 0 auto;
    padding: 10px;
    background-color: #04B4FF;
    color: white;
    outline: none;
    border: none;
    margin-top:15px;
    border-radius: 10px;
    cursor: pointer;
}
`

