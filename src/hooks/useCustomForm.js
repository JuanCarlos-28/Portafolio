import { useForm } from "@formspree/react";
import { useState } from "react";

export const useCustomForm = () => {
    const [state, handleSubmit] = useForm("xayzzgkq");
    const [mostrarSpinner, setMostrarSpinner] = useState(false);
    
    const mostrarAlerta = (mensaje, tipo, e) => {
        const notificacion = document.createElement('p');
        const formulario = document.querySelector('.formulario-contacto');

        notificacion.textContent = mensaje;

        if (tipo === 'success') {
            notificacion.classList.add('alert', 'success');
        } else {
            notificacion.classList.add('alert', 'error');
        }

        formulario.appendChild(notificacion);

        // Elimina la notificación después de 3 segundos
        setTimeout(() => {
            notificacion.remove();
            e.target.style.display = 'block';
        }, 3000);
    };

    const validarEmail = (email) => {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    };

    const validarTelefono = (telefono) => {
        const regex = /^(?:\+\d{1,3}\s?)?\d{6,14}$/;
        const resultado = regex.test(telefono);
        return resultado;
    };
    
    const soloNumeros = (event) => {
        const key = event.key;
        const isShiftPressed = event.shiftKey;

        // Permite Numeros, las flechas y la combinación "Shift + Inicio" "Shift + Fin"
        if ( !(isShiftPressed && (key === 'Home' || key === 'End')) && !/[\d+\s]/.test(key) && key !== 'Backspace' && key !== 'Delete' && key !== 'ArrowLeft' && key !== 'ArrowRight' ) {
            event.preventDefault();
        }
        
    }

    const onEnviar = (e) => {
        // e.preventDefault();

        if (e.target.localName !== 'button') {
            return;
        }

        e.target.style.display = 'none';

        // Validaciones
        const asunto = document.querySelector('#asunto').value.trim();
        const email = document.querySelector('#email').value.trim();
        const telefono = document.querySelector('#telefono').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (asunto === '' || email === '' || telefono === '' || message === '') {
            mostrarAlerta('All fields must be filled', 'error', e);
            return;
        }

        if (!validarEmail(email)) {
            mostrarAlerta('Invalid email', 'error', e);
            return;
        }

        if (!validarTelefono(telefono)) {
            mostrarAlerta('Invalid phone', 'error', e);
            return;
        }
        
        setMostrarSpinner(true);

        setTimeout(() => {

            setMostrarSpinner(false);

            limpiarFormulario();
            mostrarAlerta('Thank you for sending a message, I will contact you shortly!', 'success', e);

        }, 3000);

    };

    const limpiarFormulario = () => {
        const formulario = document.querySelector('.formulario-contacto');
        formulario.reset();
    }

    return {
        state,
        handleSubmit,
        onEnviar,
        mostrarSpinner,
        soloNumeros,
    };
};
