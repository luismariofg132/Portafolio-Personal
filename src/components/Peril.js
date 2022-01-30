import React from 'react';
import { ImgPerfil, Pperfil, SpanPerfil, StyledDivCont, StyledDivPrin } from '../styleds/PerfilStyleds';

const Peril = () => {
    return <StyledDivPrin>
        <StyledDivCont>
            <SpanPerfil>¡Hola!</SpanPerfil>
            <SpanPerfil>Soy Luis Mario Franco</SpanPerfil>
            <Pperfil>Desarrollador Front End y estudiante de ingenieria de sistemas</Pperfil>
            <ImgPerfil src='https://res.cloudinary.com/ddgyxfetd/image/upload/v1643494803/Portafolio/Imagen2_d60rvt.jpg' alt='perfil' />
        </StyledDivCont>
    </StyledDivPrin>;
};

export default Peril;
