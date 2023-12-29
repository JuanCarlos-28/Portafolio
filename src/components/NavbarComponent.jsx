import { NavLink } from 'react-router-dom';
import { Navbar } from "keep-react";
import { useNavbarLinks } from '../hooks/useNavbarLinks';

export const NavbarComponent = () => {

    const { isLinkClicked, scrollToSection } = useNavbarLinks()

    return (
        <Navbar fluid={true}>
            <Navbar.Container className="flex items-center justify-between">
                
                <Navbar.Brand>
                
                </Navbar.Brand>

                <Navbar.Collapse collapseType="sidebar">
                    <Navbar.Container tag="ul" className="flex flex-col gap-5">
                        {/* Utiliza el componente NavLink de React Router */}
                        <NavLink
                            className={`navbar__link ${isLinkClicked.home ? 'activo' : ''}`}
                            to="#"
                            onClick={() => scrollToSection('home')}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className={`navbar__link ${isLinkClicked.softSkills ? 'activo' : ''}`}
                            to="#"
                            onClick={() => scrollToSection('softSkills')}
                        >
                            Soft Skills
                        </NavLink>

                        <NavLink
                            className={`navbar__link ${isLinkClicked.technicalSkills ? 'activo' : ''}`}
                            to="#"
                            onClick={() => scrollToSection('technicalSkills')}
                        >
                            Technical Skills
                        </NavLink>

                        <NavLink
                            className={`navbar__link ${isLinkClicked.projects ? 'activo' : ''}`}
                            to="#"
                            onClick={() => scrollToSection('projects')}
                        >
                            Projects
                        </NavLink>

                        <NavLink
                            className={`navbar__link ${isLinkClicked.contact ? 'activo' : ''}`}
                            to="#"
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact
                        </NavLink>
                    </Navbar.Container>
                </Navbar.Collapse>

                <Navbar.Container className="flex items-center gap-3">
                    <Navbar.Container
                        tag="ul"
                        className="lg:flex hidden items-center justify-between gap-5"
                    >
                        {/* Utiliza el componente NavLink de React Router */}
                        <NavLink
                            className={`navbar__link ${isLinkClicked.home ? 'activo' : 'navbar__link'}`}
                            to="#"
                            onClick={() => scrollToSection('home')}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className={`navbar__link ${isLinkClicked.softSkills ? 'activo' : ''}`}
                            to="#"
                            onClick={() => scrollToSection('softSkills')}
                        >
                            Soft Skills
                        </NavLink>

                        <NavLink
                            className={`navbar__link ${isLinkClicked.technicalSkills ? 'activo' : ''}`}
                            to="#"
                            onClick={() => scrollToSection('technicalSkills')}
                        >
                            Technical Skills
                        </NavLink>

                        <NavLink
                            className={`navbar__link ${isLinkClicked.projects ? 'activo' : ''}`}
                            to="#"
                            onClick={() => scrollToSection('projects')}
                        >
                            Projects
                        </NavLink>

                        <NavLink
                            className={`navbar__link ${isLinkClicked.contact ? 'activo' : ''}`}
                            to="#"
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact
                        </NavLink>
                    </Navbar.Container>
                    
                    <Navbar.Toggle />
                </Navbar.Container>
            </Navbar.Container>
        </Navbar>
    );
};
