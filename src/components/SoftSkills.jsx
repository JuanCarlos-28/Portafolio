import { useScrollAnimation } from "../hooks";

export const SoftSkills = () => {

    const sectionRef = useScrollAnimation(0.05, 'animate__bounce');

    return (
        <>
            <div id="softSkills">
                <h2>Soft Skills</h2>
                <div ref={sectionRef} className="contenedorSoftSkills">

                    <div className="softSkillCard">
                        <img src="/img/competencia (2).png" alt="" />
                        <p className="text-bold">High resolution capacity.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam placeat illo molestias architecto consectetur tempore nisi, sit quis magni ipsum asperiores culpa eum neque commodi nostrum aliquid enim non.</p>
                    </div>

                    <div className="softSkillCard">
                        <img src="/img/apoyar.png" alt="" />
                        <p className="text-bold">Team work</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam placeat illo molestias architecto consectetur tempore nisi, sit quis magni ipsum asperiores culpa eum neque commodi nostrum aliquid enim non.</p>
                    </div>

                    <div className="softSkillCard">
                        <img src="/img/adaptar.png" alt="" />
                        <p className="text-bold">Flexibility and adaptability</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam placeat illo molestias architecto consectetur tempore nisi, sit quis magni ipsum asperiores culpa eum neque commodi nostrum aliquid enim non.</p>
                    </div>

                    <div className="softSkillCard">
                        <img src="/img/comunicacion-efectiva.png" alt="" />
                        <p className="text-bold">Effective communication</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam placeat illo molestias architecto consectetur tempore nisi, sit quis magni ipsum asperiores culpa eum neque commodi nostrum aliquid enim non.</p>
                    </div>

                    <div className="softSkillCard">
                        <img src="/img/paso-del-tiempo.png" alt="" />
                        <p className="text-bold">Time management</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam placeat illo molestias architecto consectetur tempore nisi, sit quis magni ipsum asperiores culpa eum neque commodi nostrum aliquid enim non.</p>
                    </div>

                    <div className="softSkillCard">
                        <img src="/img/miedo.png" alt="" />
                        <p className="text-bold">Working under pressure</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam placeat illo molestias architecto consectetur tempore nisi, sit quis magni ipsum asperiores culpa eum neque commodi nostrum aliquid enim non.</p>
                    </div>

                </div>
            </div>
        </>
    )
}
