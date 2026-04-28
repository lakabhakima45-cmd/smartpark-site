import React from "react"

function Home() {
  return (
    <main className="home-page">

      {/* HERO */}
      <section className="hero-home">
        <div className="container hero-grid">

          <div className="hero-left">
            <p className="hero-kicker">SMARTPARK DELIVERY</p>

            <h1>
              Le parking intelligent nouvelle génération
            </h1>

            <p className="hero-text">
              SmartPark combine stationnement automatisé, services automobiles
              premium et assistance intelligente pour offrir une expérience
              urbaine moderne, rapide et sécurisée.
            </p>

            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() =>
                  document
                    .getElementById("solutions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Découvrir
              </button>

              <button
                className="btn-outline"
                onClick={() =>
                  document
                    .getElementById("video")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Voir la vidéo
              </button>
            </div>
          </div>

          <div className="hero-right">
            <img
             src="/images/hero-smartpark.jpg"
              alt="Parking SmartPark"
            />
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="stats-home">
        <div className="container stats-grid">

          <article>
            <strong>24/7</strong>
            <span>Accès automatisé</span>
          </article>

          <article>
            <strong>QR</strong>
            <span>Identification rapide</span>
          </article>

          <article>
            <strong>0</strong>
            <span>Stress parking</span>
          </article>

          <article>
            <strong>+ Services</strong>
            <span>Écosystème mobilité</span>
          </article>

        </div>
      </section>

      {/* ABOUT */}
      <section className="section-home container">
        <div className="section-head">
          <p className="section-kicker">VISION</p>
          <h2>Bien plus qu’un parking classique</h2>
          <p>
            SmartPark transforme le stationnement urbain en intégrant
            automatisation, sécurité, gain de temps et services automobiles
            premium dans une seule plateforme.
          </p>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="solutions-home">
        <div className="container">

          <div className="section-head left">
            <p className="section-kicker">SOLUTIONS</p>
            <h2>Technologie au service de la mobilité</h2>
          </div>

          <div className="solutions-grid">

            <article className="solution-card">
             <img src="/images/solution-1.jpg" alt="Application SmartPark" />
              <div>
                <h3>Application mobile</h3>
                <p>
                  Réservation, QR code, paiement et récupération du véhicule.
                </p>
              </div>
            </article>

            <article className="solution-card">
              <img src="/images/solution-2.jpg" alt="Capteurs SmartPark" />
              <div>
                <h3>Capteurs intelligents</h3>
                <p>
                  Contrôle automatique du véhicule avant la prise en charge.
                </p>
              </div>
            </article>

            <article className="solution-card">
             <img src="/images/solution-3.jpg" alt="Robotisation SmartPark" />
              <div>
                <h3>Robotisation</h3>
                <p>
                  Déplacement vertical et stockage intelligent automatisé.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* SERVICES PREMIUM */}
      <section className="premium-home">
        <div className="container">

          <div className="section-head left">
            <p className="section-kicker">SERVICES PREMIUM</p>
            <h2>Un véritable hub automobile</h2>
          </div>

          <div className="premium-grid">

            <article>
              <h3>Assistance 24/7</h3>
              <p>Batterie, dépannage, remorquage.</p>
            </article>

            <article>
              <h3>Lavage Auto</h3>
              <p>Récupérez votre véhicule propre.</p>
            </article>

            <article>
              <h3>Recharge Électrique</h3>
              <p>Bornes EV pendant stationnement.</p>
            </article>

            <article>
              <h3>Maintenance Express</h3>
              <p>Check rapide pneus, niveaux, batterie.</p>
            </article>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="section-home container">
        <div className="section-head">
          <p className="section-kicker">FONCTIONNEMENT</p>
          <h2>Simple pour l’utilisateur</h2>
        </div>

        <div className="steps-grid">

          <article>
            <span>01</span>
            <h3>Arrivée</h3>
            <p>Dépôt à la borne SmartPark.</p>
          </article>

          <article>
            <span>02</span>
            <h3>Scan QR</h3>
            <p>Identification immédiate.</p>
          </article>

          <article>
            <span>03</span>
            <h3>Prise en charge</h3>
            <p>Robotisation complète.</p>
          </article>

          <article>
            <span>04</span>
            <h3>Restitution</h3>
            <p>Véhicule prêt au départ.</p>
          </article>

        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="video-home">
        <div className="container">

          <div className="section-head left">
            <p className="section-kicker">DÉMONSTRATION</p>
            <h2>Voir SmartPark en action</h2>
          </div>

          <div className="video-box">
            <iframe
  width="100%"
  height="520"
  src="https://www.youtube.com/embed/wb4C72kKFGQ"
  title="SmartPark vidéo démonstration"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="closing-home">
        <div className="container closing-card">

          <div className="closing-left">
            <p className="section-kicker">SMARTPARK</p>
            <h2>Le futur du stationnement commence ici</h2>
            <p>
              Parking automatisé, services premium et mobilité intelligente.
            </p>
          </div>

          <button
            className="btn-primary"
            onClick={() => (window.location.href = "/contact")}
          >
            Contactez-nous
          </button>

        </div>
      </section>

    </main>
  )
}

export default Home