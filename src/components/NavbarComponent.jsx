import { NavLink } from 'react-router-dom';
import { Navbar } from "keep-react";
import { useNavbarLinks } from '../hooks';

export const NavbarComponent = () => {

    const { isLinkClicked, scrollToSection } = useNavbarLinks();

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
                            name="link-home"
                            onClick={() => scrollToSection('home')}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className={`navbar__link ${isLinkClicked.softSkills ? 'activo' : ''}`}
                            to="#"
                            name="link-softSkills"
                            onClick={() => scrollToSection('softSkills')}
                        >
                            Soft Skills
                        </NavLink>

                        <NavLink
                            className={`navbar__link ${isLinkClicked.technicalSkills ? 'activo' : ''}`}
                            to="#"
                            name="link-technicalSkills"
                            onClick={() => scrollToSection('technicalSkills')}
                        >
                            Technical Skills
                        </NavLink>

                        <NavLink
                            className={`navbar__link ${isLinkClicked.projects ? 'activo' : ''}`}
                            to="#"
                            name="link-projects"
                            onClick={() => scrollToSection('projects')}
                        >
                            Projects
                        </NavLink>

                        <NavLink
                            className={`navbar__link ${isLinkClicked.contact ? 'activo' : ''}`}
                            to="#"
                            name="link-contact"
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
                            className={`navbar__link ${isLinkClicked.home ? 'activo' : ''}`}
                            to="#"
                            name="link-home"
                            onClick={() => scrollToSection('home')}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className={`navbar__link ${isLinkClicked.softSkills ? 'activo' : ''}`}
                            to="#"
                            name="link-softSkills"
                            onClick={() => scrollToSection('softSkills')}
                        >
                            Soft Skills
                        </NavLink>

                        <NavLink
                            className={`navbar__link ${isLinkClicked.technicalSkills ? 'activo' : ''}`}
                            to="#"
                            name="link-technicalSkills"
                            onClick={() => scrollToSection('technicalSkills')}
                        >
                            Technical Skills
                        </NavLink>

                        <NavLink
                            className={`navbar__link ${isLinkClicked.projects ? 'activo' : ''}`}
                            to="#"
                            name="link-projects"
                            onClick={() => scrollToSection('projects')}
                        >
                            Projects
                        </NavLink>

                        <NavLink
                            className={`navbar__link ${isLinkClicked.contact ? 'activo' : ''}`}
                            to="#"
                            name="link-contact"
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
