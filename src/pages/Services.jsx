import React, { useState } from "react"

function Services() {
  const [openQuestion, setOpenQuestion] = useState(null)

  const questions = [
    {
      question: "Que comprend l’assistance SmartPark ?",
      answer:
        "Elle comprend la surveillance du système, le support technique, la gestion des incidents, le dépannage et l’orientation vers une intervention si nécessaire.",
    },
    {
      question: "Que faire si le système rencontre une panne ?",
      answer:
        "L’utilisateur peut envoyer une demande via le formulaire de service. Les problèmes critiques sont traités en priorité.",
    },
    {
      question: "SmartPark propose-t-il de la maintenance ?",
      answer:
        "Oui. La maintenance peut inclure des inspections, des contrôles mécaniques, électriques, logiciels et des vérifications de sécurité.",
    },
    {
      question: "Les services automobiles sont-ils obligatoires ?",
      answer:
        "Non. Les services comme lavage, recharge ou maintenance express peuvent être proposés en option selon le site.",
    },
  ]

  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="container services-hero-grid">
          <div className="services-copy">
            <p className="services-kicker">SERVICE & SUPPORT</p>
            <h1>Votre système est suivi, assisté et maintenu</h1>
            <p>
              SmartPark ne s’arrête pas au stationnement automatisé. Nous
              imaginons un service complet : supervision, assistance, maintenance
              et services automobiles pour garantir une expérience fiable.
            </p>

            <div className="services-actions">
              <button
                onClick={() =>
                  document
                    .getElementById("request")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Demander une intervention
              </button>

              <span>Assistance SmartPark 24/7</span>
            </div>
          </div>

          <div className="services-hero-media">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
              alt="Technicien service SmartPark"
            />
          </div>
        </div>
      </section>

      <section className="control-room">
        <div className="container control-grid">
          <div>
            <p className="services-kicker">CONTROL ROOM 24/7</p>
            <h2>Surveillance continue du système</h2>
          </div>

          <p>
            Les systèmes automatisés doivent rester fiables. SmartPark prévoit
            une logique de suivi permanent : alertes, diagnostic, assistance
            technique et intervention selon la gravité du problème.
          </p>
        </div>
      </section>

      <section className="response-section">
        <div className="container">
          <p className="services-kicker">HOW WE RESPOND</p>
          <h2>Trois niveaux de réponse. Un objectif : la disponibilité.</h2>

          <div className="response-grid">
            <article>
              <span>01</span>
              <h3>Diagnostic à distance</h3>
              <p>
                Les alertes sont analysées rapidement pour comprendre le problème
                et corriger les erreurs simples sans déplacement.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Intervention technique</h3>
              <p>
                Si le problème bloque le système, une intervention est prévue
                pour rétablir le fonctionnement du parking.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Maintenance préventive</h3>
              <p>
                Les contrôles réguliers réduisent les risques de panne et
                prolongent la durée de vie des équipements.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="maintenance-section">
        <div className="container maintenance-grid">
          <div className="maintenance-copy">
            <p className="services-kicker">MAINTENANCE AGREEMENTS</p>
            <h2>Ce que SmartPark peut couvrir</h2>
            <p>
              Une solution automatisée crédible doit prévoir l’après-installation :
              inspection, sécurité, logiciel, mécanique, assistance et suivi.
            </p>
          </div>

          <div className="maintenance-plans">
            <article>
              <h3>Système mécanique & robotisé</h3>
              <ul>
                <li>Contrôle structurel et mécanique</li>
                <li>Vérification des plateformes</li>
                <li>Contrôle capteurs et sécurité</li>
                <li>Rapport d’état du système</li>
              </ul>
            </article>

            <article>
              <h3>Système automatisé complet</h3>
              <ul>
                <li>Diagnostic logiciel</li>
                <li>Surveillance des alertes</li>
                <li>Mise à jour du système</li>
                <li>Support application et borne QR</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="service-team">
        <div className="container service-team-grid">
          <div className="team-image">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
              alt="Équipe technique SmartPark"
            />
          </div>

          <div className="team-copy">
            <p className="services-kicker">OUR SERVICE TEAM</p>
            <h2>Une équipe pensée pour le terrain</h2>
            <p>
              Le service SmartPark repose sur une logique claire : comprendre
              l’incident, intervenir efficacement, documenter le problème et
              maintenir le système dans un état fiable.
            </p>
          </div>
        </div>
      </section>

      <section id="request" className="service-request">
        <div className="container request-grid">
          <div>
            <p className="services-kicker">GET SUPPORT</p>
            <h2>Envoyer une demande de service</h2>
            <p>
              Formulaire de demande pour signaler un incident, demander une
              maintenance ou contacter l’équipe SmartPark.
            </p>
          </div>

          <form className="request-form">
            <select>
              <option>Type de système</option>
              <option>Parking automatisé</option>
              <option>Plateforme robotisée</option>
              <option>Borne QR / application</option>
              <option>Autre</option>
            </select>

            <input type="text" placeholder="Localisation / site" />

            <select>
              <option>Niveau d’urgence</option>
              <option>Critique : système bloqué</option>
              <option>Partiel : fonctionnement dégradé</option>
              <option>Mineur : anomalie simple</option>
              <option>Maintenance programmée</option>
            </select>

            <textarea placeholder="Nature du problème"></textarea>

            <div className="form-row">
              <input type="text" placeholder="Nom" />
              <input type="tel" placeholder="Téléphone" />
            </div>

            <input type="email" placeholder="Email" />

            <button type="submit">Soumettre la demande</button>
          </form>
        </div>
      </section>

      <section className="services-faq">
        <div className="container faq-grid">
          <div>
            <p className="services-kicker">FAQ</p>
            <h2>Questions fréquentes</h2>
          </div>

          <div className="faq-list">
            {questions.map((item, index) => (
              <article className="faq-item" key={item.question}>
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

      <section className="services-final">
        <div className="container services-final-card">
          <div>
            <p className="services-kicker">PROTECT YOUR SYSTEM</p>
            <h2>Protégez votre infrastructure SmartPark</h2>
            <p>
              Une maintenance bien pensée réduit les pannes, rassure les
              utilisateurs et donne de la crédibilité au projet.
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

export default Services