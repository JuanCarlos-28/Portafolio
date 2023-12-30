import { useForm } from "@formspree/react";

export const useCustomForm = () => {
    const [state, handleSubmit] = useForm("xayzzgkq");

    const mostrarAlerta = (mensaje, tipo) => {
        const formulario = document.querySelector('.formulario-contacto');
        const notificacion = document.createElement('p');

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
        }, 3000);
    };

    const validarEmail = (email) => {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    };

    const onEnviar = (e) => {
        // e.preventDefault();

        if (e.target.localName !== 'button') {
        return;
        }

        // Validaciones
        const asunto = document.querySelector('#asunto').value.trim();
        const email = document.querySelector('#email').value.trim();
        const rol = document.querySelector('#rol').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (asunto === '' || email === '' || rol === '' || message === '') {
        mostrarAlerta('All fields must be filled', 'error');
        return;
        }

        if (!validarEmail(email)) {
        mostrarAlerta('Invalid email', 'error');
        return;
        }

        if (state.errors) {
        mostrarAlerta('Oops, a problem occurred with the server', 'error');
        return;
        }

        mostrarAlerta('Thank you for sending a message, I will contact you shortly!', 'success');
    };

    return {
        state,
        handleSubmit,
        onEnviar,
    };
};
