import { tecnologias } from "../data"
import { TecnologiasCard } from "./TecnologiasCard"

export const SoftSkills = () => {
    return (
        <>
            <div id="softSkills">
                <h2>Soft Skills</h2>
                    <div className="contenedorSoftSkills">
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
