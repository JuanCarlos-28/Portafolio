import { tecnologias } from "../data"
import { TecnologiasCard } from "./TecnologiasCard"

export const TechnicalSkills = () => {
    return (
        <>
            <div id="technicalSkills">
                <h2>Technical Skills</h2>
                    <div className="contenedorTechnicalSkills">
                        {
                            tecnologias.map(tecnologia => (
                                <TecnologiasCard key={tecnologia.name} tecnologia={tecnologia}/>
                            ))
                        }
                    </div>
            </div>
        </>
    )
}
