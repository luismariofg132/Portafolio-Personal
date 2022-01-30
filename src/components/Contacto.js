import React, { useState } from 'react';
import { ContacDivPrin, DivFormContact, PContact, SpanContact, InputContact, TexttareaContact, ButtonContact } from '../styleds/ContactoStyleds';
import Swal from 'sweetalert2';

const Contacto = () => {
    const [form, setform] = useState({
        name: "",
        email: "",
        mensaje: ""
    });

    const { name, email, mensaje } = form

    const handleInputChange = ({ target }) => {
        setform({
            ...form,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await fetch('https://formspree.io/f/mayveqwk', {
            method: "POST",
            body: JSON.stringify(form)
        })

        await Swal.fire({
            icon: 'success',
            title: 'Gracias, me pondre en contacto',
        })

        window.location.reload()
    }

    return <ContacDivPrin>
        <DivFormContact>
            <form onSubmit={handleSubmit}>
                <SpanContact>Contacto</SpanContact>
                <PContact>Si estas interesado, no dude en ponerse en contacto</PContact>
                <InputContact type="text" value={name} name='name' placeholder='Nombre Completo' required onChange={handleInputChange} />
                <InputContact type="email" value={email} name='email' placeholder='Correo Electronico' required onChange={handleInputChange} />
                <TexttareaContact name='mensaje' value={mensaje} placeholder='Mensaje' required onChange={handleInputChange} ></TexttareaContact>
                <ButtonContact type='submit'>Enviar Mensaje</ButtonContact>
            </form>
        </DivFormContact>
    </ContacDivPrin>;
};

export default Contacto;
