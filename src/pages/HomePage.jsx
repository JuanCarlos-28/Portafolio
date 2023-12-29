import { Carrusel, Contacto, InformacionPersonal, LogoNombre, Navbar, SoftSkills } from "../components"

export const HomePage = () => {

    return (
        <>
            <header className="header animate__animated animate__fadeIn">
                <LogoNombre />
                <Navbar />
            </header>

            <main>
                <div className="centrarContenedores">
                    <InformacionPersonal />
                    <hr />
                    <SoftSkills />
                    <hr />
                    <Carrusel />
                    <hr />
                    <Contacto />
                    <hr />
                </div>


            </main>
            

        </>
    )
}
