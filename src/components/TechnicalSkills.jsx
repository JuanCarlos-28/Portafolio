import { tecnologias } from "../data"
import { useScrollAnimation } from "../hooks";
import { TecnologiasCard } from "./TecnologiasCard"

export const TechnicalSkills = () => {

    const sectionRef = useScrollAnimation();

    return (
        <>
            <div id="technicalSkills">
                <h2>Technical Skills</h2>
                    <div ref={sectionRef} className="contenedorTechnicalSkills">
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
