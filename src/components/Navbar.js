import React from 'react';
import { StyledA, StyledHeader, StyledLi, StyledNav } from '../styleds/NavbarStyleds';

const Navbar = () => {
    return <div>
        <StyledHeader>
            <StyledNav>
                <ul>
                    <StyledLi><StyledA href='#hola'>Hola</StyledA></StyledLi>
                    <StyledLi><StyledA href='#proyectos'>Proyectos</StyledA></StyledLi>
                    <StyledLi><StyledA href='#contacto'>Contacto</StyledA></StyledLi>
                </ul>
            </StyledNav>
        </StyledHeader>
    </div>;
};

export default Navbar;

