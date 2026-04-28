import React from "react"

function Projects() {
  const projects = [
    {
      image: "/project-city1.jpg",
      type: "Ville dense",
      title: "SmartPark Centre-ville",
      text: "Une solution compacte pensée pour les zones urbaines où l’espace est limité et la demande de stationnement élevée.",
      details: ["Stockage vertical", "Accès QR code", "Réduction circulation interne"],
    },
    {
      image: "/project-business.jpg",
      type: "Entreprise",
      title: "SmartPark Business Hub",
      text: "Un parking automatisé adapté aux bureaux, sièges d’entreprise et espaces professionnels avec accès rapide pour employés et visiteurs.",
      details: ["Abonnements", "Accès 24/7", "Assistance intégrée"],
    },
    {
      image: "/project-residence.jpg",
      type: "Résidence",
      title: "SmartPark Résidentiel",
      text: "Une solution pour augmenter la capacité de stationnement sans agrandir fortement l’emprise au sol du bâtiment.",
      details: ["Gain d’espace", "Sécurité véhicule", "Gestion via application"],
    },
  ]

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <p className="projects-kicker">PROJETS SMARTPARK</p>
          <h1>Des solutions adaptées aux villes, bâtiments et usages réels</h1>
          <p>
            SmartPark peut s’intégrer dans plusieurs contextes : centre-ville,
            entreprises, résidences, pôles de mobilité ou parkings publics.
          </p>
        </div>
      </section>

      <section className="projects-intro">
        <div className="container projects-intro-grid">
          <div>
            <p className="projects-kicker">VISION PROJET</p>
            <h2>Chaque implantation répond à un problème concret</h2>
          </div>

          <p>
            Le but n’est pas seulement de construire un parking automatisé, mais
            de proposer une infrastructure capable de réduire la perte d’espace,
            améliorer la sécurité, fluidifier les arrivées et simplifier
            l’expérience utilisateur.
          </p>
        </div>
      </section>

      <section className="projects-showcase">
        <div className="container projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} />

              <div className="project-content">
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>

                <ul>
                  {project.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-method">
        <div className="container projects-method-grid">
          <div className="method-copy">
            <p className="projects-kicker">DÉMARCHE</p>
            <h2>Une approche basée sur l’usage, la technique et la communication</h2>
            <p>
              Le projet SmartPark ne se limite pas à une idée technique. Il
              repose aussi sur une démarche UX, des tests utilisateurs, une
              identité visuelle, un site vitrine, une application mobile et une
              démonstration vidéo.
            </p>
          </div>

          <div className="method-list">
            <article>
              <strong>01</strong>
              <h3>Analyse du besoin</h3>
              <p>Compréhension des problèmes des parkings classiques.</p>
            </article>

            <article>
              <strong>02</strong>
              <h3>Prototype UX</h3>
              <p>Maquettes application, parcours utilisateur et QR code.</p>
            </article>

            <article>
              <strong>03</strong>
              <h3>Tests utilisateurs</h3>
              <p>Évaluations itératives et retours sur la compréhension.</p>
            </article>

            <article>
              <strong>04</strong>
              <h3>Communication</h3>
              <p>Site web, réseaux sociaux, vidéo et identité visuelle.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="projects-results">
        <div className="container results-grid">
          <article>
            <strong>3</strong>
            <span>types d’implantation</span>
          </article>

          <article>
            <strong>UX</strong>
            <span>tests utilisateurs</span>
          </article>

          <article>
            <strong>Web</strong>
            <span>site vitrine</span>
          </article>

          <article>
            <strong>3D</strong>
            <span>vidéo démonstrative</span>
          </article>
        </div>
      </section>

      <section className="projects-final">
        <div className="container projects-final-card">
          <div>
            <p className="projects-kicker">SMARTPARK</p>
            <h2>Un projet conçu pour être compris, testé et présenté</h2>
            <p>
              Cette page montre SmartPark comme un projet complet : solution
              technique, expérience utilisateur, communication digitale et
              démonstration visuelle.
            </p>
          </div>

          <button onClick={() => (window.location.href = "/contact")}>
            Nous contacter
          </button>
        </div>
      </section>
    </main>
  )
}

export default Projects