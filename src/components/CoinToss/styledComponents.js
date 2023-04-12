import styled from 'styled-components'

export const MainCon=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image:linear-gradient(to left,#e2a139,#f9d423);
    background-size:cover;
    min-height: 100vh;
`

export const Con=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius:10px;
    padding:20px;
`

export const Heading=styled.h1`
    color:#a35200;
    font-weight: bold;
`

export const Para=styled.p`
    font-weight: 500;
    color:#334155;
`

export const Img=styled.img`
    height:250px;
`

export const Button=styled.button`
    background-color:#f9d423;
    border-width:0px;
    border-radius: 5px;
    cursor: pointer;
    padding:10px;
    margin:10px;
`

export const Contain=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:576px){
        flex-direction: column;
    }
`

export const Total=styled.p`
    font-weight: 500;
    margin:10px;
`

export const Head=styled.p`
    font-weight: 500;
    margin:10px;
`

export const Tail=styled.p`
    font-weight: 500;
    margin:10px;
`