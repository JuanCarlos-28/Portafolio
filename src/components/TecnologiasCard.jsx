export const TecnologiasCard = ({tecnologia}) => {

    const { url, urlImage, name, rate } = tecnologia;

    const colocarEstrellas = (estrellas) => {
        switch(estrellas) {
            case 1:
                return <p>&#9733;</p>
            case 2:
                return <p>&#9733;  &#9733;</p>
            case 3:
                return <p>&#9733;  &#9733;  &#9733;</p>
            case 4:
                return <p>&#9733;  &#9733;  &#9733;  &#9733;</p>
            case 5:
                return <p>&#9733;  &#9733;  &#9733;  &#9733;  &#9733;</p>
            default:
                break;
        }
    }


    return (
        <div className="tecnologiaCard">
            <img src={urlImage} ></img>

            <div className="tecnologiaCard__ContenedorInfo">
                <p>{ name }</p>
                {colocarEstrellas(rate)}
            </div>
        
            <div className="botonInfo">
                <a href={url} target="_blank">Más Información...</a>
                {/* <Link to={`/personaje/${id}`}>
                    Más Información...
                </Link> */}
            </div>
                
        </div>
    )
}
