'use client'
import NavItem from "./NavItem";

const NavBar = () => {
    const navItems = {
        "/": {
          name: "inicio",
        },
        "/proyectos": {
          name: "proyectos",
        },
        "/contacto": {
          name: "contacto",
        },
      };
  return (
    <nav className="flex justify-start mb-16 mt-8">
      {Object.entries(navItems).map(([path, { name }]) => {
        return <NavItem key={path} path={path} name={name} />;
      })}
    </nav>
  );
};

export default NavBar;
