import React, { useState } from "react"

function News() {
  const [activeFilter, setActiveFilter] = useState("Tous")

  const filters = [
    "Tous",
    "Mobilité urbaine",
    "Smart City",
    "Robotique",
    "Sécurité",
    "Environnement",
  ]

  const articles = [
    {
      category: "Mobilité urbaine",
      title: "Pourquoi les villes doivent repenser le stationnement",
      date: "Analyse SmartPark",
      text: "Les parkings classiques occupent une surface importante, ralentissent les flux et créent une circulation inutile. Les solutions automatisées permettent de mieux organiser la ville.",
    },
    {
      category: "Smart City",
      title: "Le parking devient une infrastructure intelligente",
      date: "Innovation urbaine",
      text: "Un parking moderne ne se limite plus à stocker des véhicules. Il doit être connecté, mesurable, sécurisé et intégré aux flux de mobilité.",
    },
    {
      category: "Robotique",
      title: "La robotique au service du stationnement haute densité",
      date: "Technologie",
      text: "Les plateformes automatisées permettent de déplacer les véhicules sans conducteur et d’optimiser chaque emplacement disponible.",
    },
    {
      category: "Sécurité",
      title: "Réduire les risques dans les parkings urbains",
      date: "Sécurité & contrôle",
      text: "En supprimant la circulation humaine dans les zones internes, un parking automatisé limite les risques de choc, de vol et de dégradation.",
    },
    {
      category: "Environnement",
      title: "Moins de recherche de place, moins de circulation inutile",
      date: "Mobilité durable",
      text: "La recherche de stationnement génère des trajets parasites. Un système automatisé réduit ce temps perdu et améliore la fluidité urbaine.",
    },
  ]

  const filteredArticles =
    activeFilter === "Tous"
      ? articles
      : articles.filter((article) => article.category === activeFilter)

  return (
    <main className="news-page">
      <section className="news-hero-clean">
        <div className="container">
          <p className="eyebrow">ACTUALITÉS</p>

          <h1>Regards sur le stationnement urbain intelligent</h1>

          <p className="news-intro-clean">
            Analyses, tendances et réflexions autour de la mobilité urbaine, de
            la robotique, de la sécurité et de l’optimisation des espaces en
            ville.
          </p>
        </div>
      </section>

      <section className="container news-featured-article">
        <div className="news-featured-box">
          <div>
            <p className="section-kicker">ARTICLE PRINCIPAL</p>
            <h2>Le parking classique atteint ses limites</h2>
            <p>
              Dans les zones urbaines denses, le stationnement traditionnel
              consomme beaucoup d’espace, impose des rampes, crée des
              circulations internes et augmente le stress des usagers.
            </p>
            <p>
              SmartPark propose une autre logique : déposer le véhicule, le
              scanner, le transporter automatiquement et le restituer sans que
              l’utilisateur ait à chercher une place.
            </p>
          </div>

          <div className="news-featured-data">
            <article>
              <strong>-60%</strong>
              <span>surface potentiellement optimisée</span>
            </article>

            <article>
              <strong>0</strong>
              <span>circulation utilisateur interne</span>
            </article>

            <article>
              <strong>24/7</strong>
              <span>service automatisé continu</span>
            </article>
          </div>
        </div>
      </section>

      <section className="container news-filter-clean-section">
        <div className="filter-row">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-pill ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="container news-list-section">
        <div className="news-list">
          {filteredArticles.map((article, index) => (
            <article className="news-list-card" key={index}>
              <div className="news-list-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="news-list-content">
                <p>{article.category}</p>
                <h3>{article.title}</h3>
                <span>{article.date}</span>
                <p>{article.text}</p>
              </div>

              <button className="news-read-button">Lire</button>
            </article>
          ))}
        </div>
      </section>

      <section className="container news-analysis-section">
        <div className="news-analysis-box">
          <div>
            <p className="section-kicker">ANALYSE SMARTPARK</p>

            <h2>La valeur du stationnement automatisé ne se limite pas au gain de place</h2>

            <p>
              Un parking automatisé permet aussi de mieux contrôler les flux, de
              sécuriser les véhicules, de réduire la circulation parasite et de
              transformer le stationnement en service urbain intelligent.
            </p>
          </div>

          <div className="news-analysis-list">
            <div>Optimisation foncière</div>
            <div>Réduction du stress utilisateur</div>
            <div>Contrôle intelligent des véhicules</div>
            <div>Meilleure intégration smart city</div>
          </div>
        </div>
      </section>

      <section className="container cta-section">
        <div className="cta-box">
          <p className="section-kicker">SMARTPARK INSIGHTS</p>

          <h2>Comprendre les enjeux du stationnement de demain</h2>

          <p>
            SmartPark analyse les limites du parking classique pour proposer une
            solution plus compacte, plus sûre et plus intelligente.
          </p>

          <div className="cta-actions">
            <button
              className="btn-primary"
              onClick={() => (window.location.href = "/products")}
            >
              Découvrir les produits
            </button>

            <button
              className="btn-secondary"
              onClick={() => (window.location.href = "/projects")}
            >
              Voir les projets
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default News