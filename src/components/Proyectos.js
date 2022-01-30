import React from 'react';
import { DivPrinProyecto, SpanProyec, DivProyecto, DivDescripcion, SpanDescrip, Pdescrip, ButtonDescrip, ADescrip } from '../styleds/ProyectoStyled';

const Proyectos = () => {
    return <DivPrinProyecto>
        <SpanProyec>Algunos de mis proyectos</SpanProyec>
        <DivProyecto>
            <DivDescripcion>
                <SpanDescrip>La tiendida</SpanDescrip>
                <Pdescrip>La tiendita es proyecto para facilitar la compra y venta de micro-empresas</Pdescrip>
                <ButtonDescrip>
                    <ADescrip href='https://github.com/luismariofg132/Sprint1-LaTiendita'>Ver en GitHub</ADescrip>
                </ButtonDescrip>
            </DivDescripcion>
        </DivProyecto>
    </DivPrinProyecto>;
};

export default Proyectos;
