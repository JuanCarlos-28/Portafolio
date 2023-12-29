import { useState } from 'react';

// Hook personalizado para gestionar el estado de los enlaces y la lógica de desplazamiento
export const useNavbarLinks = () => {
    const [isLinkClicked, setIsLinkClicked] = useState({
        home: false,
        softSkills: false,
        technicalSkills: false,
        projects: false,
        contact: false,
    });

    const scrollToSection = (sectionId) => {
        const targetSection = document.getElementById(sectionId);
        // Al Comienzo
        if (targetSection.id === 'home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        } else {
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth',
            });
        }
        

        // Actualiza el estado para indicar que se ha pulsado el enlace específico
        setIsLinkClicked(() => ({
            home: sectionId === 'home',
            softSkills: sectionId === 'softSkills',
            technicalSkills: sectionId === 'technicalSkills',
            projects: sectionId === 'projects',
            contact: sectionId === 'contact',
        }));
    };

    return { 
        isLinkClicked, 
        scrollToSection 
    };
};
