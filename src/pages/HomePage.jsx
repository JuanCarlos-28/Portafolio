import { InformacionPersonal, LogoNombre, Navbar } from "../components"

export const HomePage = () => {
    return (
        <>
            <header className="header animate__animated animate__fadeIn">
                <LogoNombre />
                <Navbar />
            </header>

            <main>
                <InformacionPersonal />
            </main>

        </>
    )
}
