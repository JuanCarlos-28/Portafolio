import { Carousel } from 'antd';
import { proyectos } from '../data';

export const Carrusel = () => {

    return (
        <>
            <h2>Projects</h2>
            <Carousel  autoplaySpeed={3000}>

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
        </>
    )
};