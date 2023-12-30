import { Carousel } from 'antd';
import { proyectos } from '../data';
import { useScrollAnimation } from '../hooks';

export const Carrusel = () => {

    const sectionRef = useScrollAnimation(0.05, 'animate__slideInUp');

    return (
        <>
            <div id="projects" ref={sectionRef}>
                <h2>Projects</h2>
                <Carousel autoplay autoplaySpeed={3000}>

                    {
                        proyectos.map(proyecto => (
                            <div key={ proyecto.name } className='carrusel'>
                                <a href={ proyecto.url } target="_blank" rel="noopener noreferrer"> 
                                    <img src={ proyecto.urlImage } alt={ proyecto.name } /> 
                                </a>
                                <p className='text-bold'>{ proyecto.name }</p>
                                <span>{ proyecto.description }</span>
                            </div>
                        ))
                    }
                    
                </Carousel>
            </div>
        </>
    )
};