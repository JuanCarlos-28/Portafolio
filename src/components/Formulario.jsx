import { useCustomForm, useScrollAnimation } from "../hooks";
import { Spinner } from "./Spinner";

export const Formulario = () => {

    const { state, onEnviar, handleSubmit, mostrarSpinner } = useCustomForm();
    const sectionRef = useScrollAnimation(0.05, 'animate__slideInRight');

    return (
        
        <form ref={sectionRef} className="formulario-contacto" onClick={onEnviar} onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Asunto"
                className="form-control"
                name="asunto"
                id="asunto"
                autoComplete="off"
                // value={ asunto }
                // onChange={ onInputChange }
            />
            <input 
                type="email"
                placeholder="Email"
                className="form-control"
                name="email"
                id="email"
                autoComplete="off"
                // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                // value={ correo }
                // onChange={ onInputChange }
            />
            <input 
                type="text"
                placeholder="Rol"
                className="form-control"
                name="rol"
                id="rol"
                autoComplete="off"
                // value={ rol }
                // onChange={ onInputChange }
            />
            <textarea
                placeholder="Mensaje"
                className="form-control"
                name="message"
                id="message"
                autoComplete="off"
                // value={ mensaje }
                // onChange={ onInputChange }
                cols="40"
                rows="5"
            > </textarea>
            
            <button type="submit" className="botones_contacto unbordered" disabled={state.submitting}>
                Enviar
            </button>

            {mostrarSpinner ? <Spinner /> : <></>}
        </form>
    )
}
