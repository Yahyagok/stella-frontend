import styled from 'styled-components'

export const FlexContHoriz = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const RecentCardStyle = styled.div`
    border-style: dotted;
    padding: 10px 5px;
`
export const NavButton = styled.button`
    background-color: blue;
`

export const StyledCard = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
    width: 70vw;
    justify-content: center;
    background-color: #d61877;
    > div > img {
        height: 200px;
    }
    span {
        line-height: 222px;
        margin: 25px;
        font-size: 2em;
    }
`

export const StyledFilter = styled.div`
    display: flex;
    flex-direction: row;
    width: 72vw;
    height: 40px;
    justify-content: space-evenly;
    background-color: white;
    color: #282c34;
    `

 export const Button = styled.button`
 display: inline-block;
 color: palevioletred;
 font-size: 1em;
 margin: 1em;
 padding: 0.25em 1em;
 border: 2px solid palevioletred;
 border-radius: 3px;
 display: block;

`;







 export const Container = styled.div`
  text-align: center;

`

export const SideBy = styled.div`
float: left;
width: 33.33%;
padding: 5px;
content: "";
clear: both;
display: table;

`

 export const StyledButton = styled.button`
    position: absolute;
    height: 10%;
    width: 10%;
  
    font-size: 2.6vmin;
    cursor: pointer;
    box-shadow: rgba(255, 255, 255, 0.05) 0px 3px 20px;
    border-width: initial;
    background-color: grey;
    color: white;
    border-style: none;
    border-color: initial;
    border-image: initial;
    outline: none;
    `



