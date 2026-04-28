import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand brand-logo">
          <img src="/images/logo-smartpark.png" alt="SmartPark" />
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/products">Produits</NavLink>
          <NavLink to="/projects">Projets</NavLink>
          <NavLink to="/about">À propos</NavLink>
          <NavLink to="/services">Service</NavLink>
          <NavLink to="/news">Actualités</NavLink>
        </nav>

        <NavLink to="/contact" className="contact-btn">
          Contactez-nous
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar