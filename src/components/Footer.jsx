export const Footer = () => {
    return (
        <footer className="footer">
            <div className="redesSociales">
                <a href="https://www.facebook.com/juancarlos.rivas.1650" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com/CarlosRivasLug1" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com/juan_carlos.rivas28/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="derechosReservados">
                <p>Todos los derechos reservados &#169; | { new Date().getFullYear() } </p>
            </div>
        </footer>
    )
}
