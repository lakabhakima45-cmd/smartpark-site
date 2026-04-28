import React from "react"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">

      <div className="footer-cta">
        <p>COMMENCEZ</p>

        <h2>Réglons votre problème de stationnement</h2>

        <span>
          SmartPark accompagne les villes, entreprises et résidences avec des
          solutions de parking automatisées intelligentes.
        </span>

        <div className="footer-cta-actions">
          <a href="/contact">Contactez-nous ↗</a>

          <a href="tel:+330000000000">Appelez-nous</a>
        </div>
      </div>

      <div className="footer-bottom">

        <div className="footer-logo">
          <img src="/logo.png" alt="SmartPark" />
        </div>

        <p>
          © {year} SmartPark · Politique de confidentialité · Conditions
          d’utilisation
        </p>

        <div className="footer-socials">

          <a
            href="https://www.facebook.com/Smart-Parks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <a
            href="https://www.instagram.com/smartparkofficiel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://x.com/smart_park81181"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>

          <a
            href="https://youtu.be/wb4C72kKFGQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

        </div>
      </div>

    </footer>
  )
}

export default Footer