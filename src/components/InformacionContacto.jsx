import { useScrollAnimation } from "../hooks";

export const InformacionContacto = () => {

    const sectionRef = useScrollAnimation(0.05, 'animate__slideInLeft');

    return (
        <div ref={sectionRef} className="contacto_info">
            <div className="contacto_info_1">
                <img src="./img/celular_azul.png" alt="Celular" />
                <div className="contacto_info_11">
                    <p className="text-bold">669 328 2833</p>
                    <p>Lorem ipsum dolor sit amet lorem xddd adipisicing elit lorem ipsum lorem xdd.</p>
                </div>
            </div>
            <div className="contacto_info_1">
                <img src="./img/ubicacion_azul.png" alt="Ubicación" />
                <div className="contacto_info_11">
                    <p className="text-bold">Mazatlán, Sinaloa</p>
                    <p>Lorem ipsum dolor sit amet lorem xddd adipisicing elit lorem ipsum lorem xdd.</p>
                </div>
            </div>
            <div className="contacto_info_1">
                <img src="./img/correo_azul.png" alt="Correo" />
                <div className="contacto_info_11">
                    <p className="text-bold">juanrivasdev<span>@gmail.com</span></p>
                    <p>Lorem ipsum dolor sit amet lorem xddd adipisicing elit lorem ipsum lorem xdd.</p>
                </div>
            </div>
        </div>
    )
}
