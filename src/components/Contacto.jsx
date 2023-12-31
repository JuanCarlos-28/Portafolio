// import { useForm } from "../hooks/useForm"
import { Formulario, InformacionContacto, Mapa } from '../components';

export const Contacto = () => {


    return (
        <>
            <div id="contact">
                <h2>Contacto</h2>
                <div className="contacto">
                    <Mapa />

                    <InformacionContacto />
                    <Formulario />

                </div>
            </div>
        </>
    )
}