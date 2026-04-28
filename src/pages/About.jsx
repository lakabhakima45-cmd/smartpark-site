import React from "react"

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-copy">
            <p className="about-kicker">À PROPOS DE SMARTPARK</p>

            <h1>Repenser le stationnement pour les villes de demain</h1>

            <p>
              SmartPark est un concept de parking intelligent et automatisé
              conçu pour répondre aux limites des parkings traditionnels :
              manque d’espace, circulation inutile, perte de temps, stress et
              faible optimisation urbaine.
            </p>
          </div>

          <div className="about-hero-media">
           <img src="/images/about-hero.jpg" alt="SmartPark vision urbaine" />
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story-grid">
          <div>
            <p className="about-kicker">NOTRE MISSION</p>
            <h2>Transformer chaque mètre carré en espace utile</h2>
          </div>

          <p>
            Dans de nombreuses villes, les parkings occupent énormément
            d’espace au sol tout en générant embouteillages, manœuvres lentes et
            frustration. SmartPark propose une alternative verticale, compacte,
            connectée et plus fluide.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="about-head">
            <p className="about-kicker">NOS PILIERS</p>
            <h2>Une vision basée sur 4 priorités</h2>
          </div>

          <div className="about-values-grid">
            <article>
              <strong>01</strong>
              <h3>Optimisation</h3>
              <p>
                Plus de véhicules sur moins de surface grâce au stockage
                vertical automatisé.
              </p>
            </article>

            <article>
              <strong>02</strong>
              <h3>Sécurité</h3>
              <p>
                Moins de circulation humaine dans le parking, moins de risques
                de choc ou de dégradation.
              </p>
            </article>

            <article>
              <strong>03</strong>
              <h3>Fluidité</h3>
              <p>
                Dépôt rapide, QR code, récupération simplifiée et attente
                réduite.
              </p>
            </article>

            <article>
              <strong>04</strong>
              <h3>Innovation</h3>
              <p>
                Application mobile, robotisation, capteurs intelligents et
                services premium.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-system">
        <div className="container about-system-grid">
          <div className="about-system-image">
            <img src="/about-system.jpg" alt="Structure SmartPark" />
          </div>

          <div className="about-system-copy">
            <p className="about-kicker">LE CONCEPT</p>
            <h2>Un parcours simple pour l’utilisateur</h2>

            <div className="about-steps">
              <article>
                <span>01</span>
                <p>Réservation ou arrivée directe sur site</p>
              </article>

              <article>
                <span>02</span>
                <p>Identification via application ou QR code</p>
              </article>

              <article>
                <span>03</span>
                <p>Prise en charge robotisée du véhicule</p>
              </article>

              <article>
                <span>04</span>
                <p>Stockage sécurisé puis restitution rapide</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="about-results">
        <div className="container about-results-grid">
          <article>
            <strong>-60%</strong>
            <span>surface au sol</span>
          </article>

          <article>
            <strong>24/7</strong>
            <span>disponibilité</span>
          </article>

          <article>
            <strong>100%</strong>
            <span>automatisé</span>
          </article>

          <article>
            <strong>Smart</strong>
            <span>ville durable</span>
          </article>
        </div>
      </section>

      <section className="about-final">
        <div className="container about-final-card">
          <div>
            <p className="about-kicker">SMARTPARK</p>
            <h2>Plus qu’un parking : une nouvelle logique urbaine</h2>
            <p>
              SmartPark transforme le stationnement en infrastructure moderne,
              intelligente et rentable pour les villes.
            </p>
          </div>

          <button onClick={() => (window.location.href = "/contact")}>
            Contactez-nous
          </button>
        </div>
      </section>
    </main>
  )
}

export default About