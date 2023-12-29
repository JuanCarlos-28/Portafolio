import { useForm } from "../hooks/useForm"

export const Contacto = () => {

    const { asunto, correo, rol, mensaje, onInputChange, onResetForm } = useForm({
        asunto: '',
        correo: '',
        rol: '',
        mensaje: '',
    });

    const onLimpiarFormulario = (e) => {
        e.preventDefault();
        onResetForm();
    }

    return (
        <>
            <div id="contact">
                <h2>Contacto</h2>
                <div className="contacto">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.5126146628527!2d-106.38518110000001!3d23.224426200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f52f88c34806b%3A0xe59d373f98de247d!2zSm9zw6kgTWFyw61hIFBpbm8gU3XDoXJleiA1QklTLCBVcsOtYXMsIDgyMDgwIFVyaWFzLCBTaW4u!5e0!3m2!1ses-419!2smx!4v1703814233996!5m2!1ses-419!2smx"
                        width="800"
                        height="600"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>

                    <div className="contacto_info">
                        <div className="contacto_info_1">
                            <img src="/img/celular_azul.png" alt="Celular" />
                            <div className="contacto_info_11">
                                <p className="text-bold">669 328 2833</p>
                                <p>Lorem ipsum dolor sit amet lorem xddd adipisicing elit lorem ipsum lorem xdd.</p>
                            </div>
                        </div>
                        <div className="contacto_info_1">
                            <img src="/img/ubicacion_azul.png" alt="Ubicación" />
                            <div className="contacto_info_11">
                                <p className="text-bold">José María pino suarez</p>
                                <p>Lorem ipsum dolor sit amet lorem xddd adipisicing elit lorem ipsum lorem xdd.</p>
                            </div>
                        </div>
                        <div className="contacto_info_1">
                            <img src="/img/correo_azul.png" alt="Correo" />
                            <div className="contacto_info_11">
                                <p className="text-bold">carlos223651555<span>@gmail.com</span></p>
                                <p>Lorem ipsum dolor sit amet lorem xddd adipisicing elit lorem ipsum lorem xdd.</p>
                            </div>
                        </div>
                    </div>

                    <form className="formulario-contacto">
                        <input 
                            type="text"
                            placeholder="Asunto"
                            className="form-control"
                            name="asunto"
                            autoComplete="off"
                            value={ asunto }
                            onChange={ onInputChange }
                        />
                        <input 
                            type="text"
                            placeholder="Email"
                            className="form-control"
                            name="correo"
                            autoComplete="off"
                            value={ correo }
                            onChange={ onInputChange }
                        />
                        <input 
                            type="text"
                            placeholder="Rol"
                            className="form-control"
                            name="rol"
                            autoComplete="off"
                            value={ rol }
                            onChange={ onInputChange }
                        />
                        <textarea
                            placeholder="Mensaje"
                            className="form-control"
                            name="mensaje"
                            autoComplete="off"
                            value={ mensaje }
                            onChange={ onInputChange }
                            cols="40"
                            rows="5"
                        > </textarea>

                        
                        <button className="botones_contacto unbordered" onClick={ onLimpiarFormulario }>
                            Enviar
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}
