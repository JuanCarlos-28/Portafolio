import { useNavbarLinks } from "../hooks"

export const LogoNombre = () => {

    const { scrollToSection } = useNavbarLinks();

    return (
        <div className="logoNombre" onClick={ () => scrollToSection('home') } >
            <img src="/.img/letra-j.webp" alt="logo Juan" />
            <p>Juan Carlos Rivas</p>
        </div>
    )
}
