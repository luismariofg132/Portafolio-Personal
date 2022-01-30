import styled from "styled-components";

export const StyledHeader = styled.header`
width: 100vw;
height: 75px;
background-color: #0F0E17;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
`
export const StyledLi = styled.li`
display: inline-flex;
margin: 0 1.5em;
`
export const StyledNav = styled.nav`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
`

export const StyledA = styled.a`
color: white;
text-decoration: none;
&:hover{
    color: #F25F4C;
}
`