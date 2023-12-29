import { Carrusel, Contacto, Footer, InformacionPersonal, LogoNombre, NavbarComponent, TechnicalSkills } from "../components"

export const HomePage = () => {

    return (
        <>
            <header className="header animate__animated animate__fadeIn">
                <LogoNombre />
                <NavbarComponent />
            </header>

            {/* <NavbarComponent /> */}


            <main>
                <div className="centrarContenedores">
                    <InformacionPersonal />
                    <hr />
                    <TechnicalSkills />
                    <hr />
                    <Carrusel />
                    <hr />
                    <Contacto />
                </div>
            </main>

            <Footer />

        </>
    )
}
