import React, { useState } from "react"

function Products() {
  const [openQuestion, setOpenQuestion] = useState(null)

  const systems = [
    {
      number: "01",
      title: "Parking automatisé complet",
      text: "Solution intelligente de dépôt, transport, stockage et restitution des véhicules sans circulation interne.",
    },
    {
      number: "02",
      title: "Plateforme robotisée",
      text: "Déplacement précis des véhicules entre zone de dépôt, ascenseur central et emplacement final.",
    },
    {
      number: "03",
      title: "Stockage vertical",
      text: "Capacité maximale sur faible emprise au sol grâce à une organisation multi-niveaux haute densité.",
    },
    {
      number: "04",
      title: "Application & QR Code",
      text: "Réservation, accès rapide, suivi véhicule et récupération depuis smartphone.",
    },
  ]

  const sectors = [
    "Centres-villes",
    "Résidences premium",
    "Bureaux & entreprises",
    "Centres commerciaux",
    "Aéroports",
    "Hôtels",
    "Hôpitaux",
    "Collectivités",
  ]

  const faq = [
    {
      question: "Quelle différence avec un parking classique ?",
      answer:
        "Le conducteur ne cherche plus de place. Le véhicule est pris en charge automatiquement après dépôt.",
    },
    {
      question: "Le système est-il sécurisé ?",
      answer:
        "Oui. Capteurs intelligents, contrôles d’accès, zones fermées et suppression de circulation interne.",
    },
    {
      question: "SmartPark convient-il aux zones urbaines denses ?",
      answer:
        "Oui. Le système a été pensé pour maximiser la capacité sur peu de surface disponible.",
    },
    {
      question: "Peut-on gérer le parking depuis mobile ?",
      answer:
        "Oui. Réservation, QR code, suivi, récupération et notifications via application.",
    },
  ]

  return (
    <main className="products-page">
      <section className="products-hero-clean">
        <div className="container">
          <p className="eyebrow">PRODUITS SMARTPARK</p>

          <h1>Une gamme pensée pour le stationnement du futur</h1>

          <p className="products-intro">
            SmartPark propose des systèmes automatisés conçus pour optimiser
            l’espace urbain, fluidifier les flux et moderniser l’expérience de
            stationnement.
          </p>
        </div>
      </section>

      <section className="container products-main-block">
        <div className="products-main-grid">
          <div>
            <p className="section-kicker">SYSTÈME PRINCIPAL</p>

            <h2>Le parking automatisé haute densité</h2>

            <p>
              Une infrastructure verticale qui remplace rampes, circulation
              interne et recherche de place par un processus intelligent :
              dépôt, scan, transport robotisé, stockage et restitution.
            </p>
          </div>

          <div className="products-stats-box">
            <article>
              <strong>-60%</strong>
              <span>surface potentiellement optimisée</span>
            </article>

            <article>
              <strong>24/7</strong>
              <span>service automatisé</span>
            </article>

            <article>
              <strong>0</strong>
              <span>circulation conducteur interne</span>
            </article>
          </div>
        </div>
      </section>

      <section className="container products-systems-section">
        <div className="products-systems-grid">
          {systems.map((item) => (
            <article className="product-system-card" key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container sectors-section">
        <div className="sectors-box">
          <div>
            <p className="section-kicker">APPLICATIONS</p>
            <h2>Où installer SmartPark ?</h2>

            <p>
              SmartPark peut s’adapter à plusieurs environnements publics ou
              privés où l’espace devient stratégique.
            </p>
          </div>

          <div className="sector-list">
            {sectors.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="container products-faq-section">
        <div className="faq-layout">
          <div>
            <p className="section-kicker">QUESTIONS FRÉQUENTES</p>
            <h2>Comprendre nos produits</h2>
          </div>

          <div className="faq-list-products">
            {faq.map((item, index) => (
              <article className="faq-product-item" key={index}>
                <button
                  onClick={() =>
                    setOpenQuestion(openQuestion === index ? null : index)
                  }
                >
                  <span>{item.question}</span>
                  <strong>{openQuestion === index ? "−" : "+"}</strong>
                </button>

                {openQuestion === index && <p>{item.answer}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container cta-section">
        <div className="cta-box">
          <p className="section-kicker">SMARTPARK PRODUCTS</p>

          <h2>Des solutions conçues pour les villes modernes</h2>

          <p>
            SmartPark transforme le stationnement en infrastructure premium,
            automatisée et rentable.
          </p>

          <div className="cta-actions">
            <button
              className="btn-primary"
              onClick={() => (window.location.href = "/projects")}
            >
              Voir les projets
            </button>

            <button
              className="btn-secondary"
              onClick={() => (window.location.href = "/contact")}
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Products