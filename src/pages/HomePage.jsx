import { InformacionPersonal, LogoNombre, Navbar, TecnologiasCard } from "../components"
import { tecnologias } from "../data"

export const HomePage = () => {

    return (
        <>
            <header className="header animate__animated animate__fadeIn">
                <LogoNombre />
                <Navbar />
            </header>

            <main>
                <InformacionPersonal />
                <hr />
                <h2>Soft Skills</h2>
                <div className="contenedorSoftSkills">
                    {
                        tecnologias.map(tecnologia => (
                            <TecnologiasCard key={tecnologia.name} tecnologia={tecnologia}/>
                        ))
                    }
                </div>
            </main>

        </>
    )
}
