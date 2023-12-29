import { useNavbarLinks } from "../hooks/useNavbarLinks"

export const InformacionPersonal = () => {

    const { scrollToSection } = useNavbarLinks();
    return (
        <div className="contenedorInfo" id="home">

            <div className="contenedorInfo__imagen animate__animated animate__slideInLeft">
                <img src="/img/desarrollo-movil.png" alt="" />
            </div>

            <div className="contenedorInfo__texto animate__animated animate__slideInRight">
                <p className="titulo">Frontend Developer</p>
                <h3 className="nombre">Juan Carlos Rivas</h3>
                <p className="descripcion">
                    I am a creative and analytical person, with a great attention to detail and an ability to solve problems efficiently. I am passionate about learning and keeping up to date with the latest trends in web development, which allows me to always be at the forefront of best practices and innovative techniques.
                </p>
                <div className="contenedorInfo__botones">
                    <a href="/files/Juan_Carlos_Rivas_CV_Español.pdf" download="CV_Juan Rivas_Español" className="botones_contacto">CV</a>
                    <a className="botones_contacto" onClick={ () => scrollToSection("contact") }>Contact</a>
                </div>
            </div>

        </div>
    )
}
