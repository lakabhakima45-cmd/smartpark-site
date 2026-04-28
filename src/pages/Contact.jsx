import React, { useState } from "react"

function Contact() {
  const [activeRequest, setActiveRequest] = useState("Consultation")

  const requestTypes = [
    "Consultation",
    "Projet urbain",
    "Support technique",
    "Partenariat",
  ]

  return (
    <main className="contact-page">
      <section className="contact-hero-premium">
        <div className="container contact-hero-card">
          <div className="contact-hero-copy">
            <p className="eyebrow">CONTACT</p>

            <h1>Parlons de votre projet SmartPark</h1>

            <span className="contact-green-line"></span>

            <p>
              Vous avez un besoin de stationnement automatisé, une idée
              d’implantation ou une question technique ? Présentez-nous votre
              projet afin d’identifier la solution la plus adaptée.
            </p>

            <div className="contact-hero-actions">
              <button
                className="btn-primary"
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Demander une consultation
              </button>

              <button
                className="btn-secondary"
                onClick={() => (window.location.href = "/service")}
              >
                Service & support
              </button>
            </div>
          </div>

          <div className="contact-direct-panel">
            <div className="contact-direct-left">
              <article>
                <div className="contact-icon">✉</div>
                <div>
                  <span>Email</span>
                  <strong>smartpark265@gmail.com</strong>
                </div>
              </article>

              <article>
                <div className="contact-icon">☎</div>
                <div>
                  <span>Téléphone</span>
                  <strong>+33 6 02 53 45 16 </strong>
                </div>
              </article>

              <article>
                <div className="contact-icon">⌖</div>
                <div>
                  <span>Localisation</span>
                  <strong>France</strong>
                </div>
              </article>
            </div>

            <div className="contact-direct-right">
              <span className="contact-green-line"></span>
              <h2>Contact direct</h2>
              <p>
                Consultation, projet urbain, support technique ou partenariat.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Nous écrire
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="container contact-form-premium">
        <div className="contact-form-title">
          <p className="section-kicker">FORMULAIRE PROJET</p>
          <h2>Envoyer une demande</h2>
          <p>
            Remplissez les informations essentielles pour mieux qualifier votre
            demande.
          </p>
        </div>

        <div className="contact-form-layout">
          <aside className="contact-sidebar">
            <h3>Type de demande</h3>

            <div className="contact-request-types">
              {requestTypes.map((type) => (
                <button
                  key={type}
                  className={activeRequest === type ? "active" : ""}
                  onClick={() => setActiveRequest(type)}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="contact-sidebar-note">
              <span>Demande sélectionnée</span>
              <strong>{activeRequest}</strong>
            </div>
          </aside>

          <form className="contact-form">
            <div className="form-grid">
              <label>
                Nom complet
                <input type="text" placeholder="Votre nom" />
              </label>

              <label>
                Email
                <input type="email" placeholder="votre@email.com" />
              </label>
            </div>

            <div className="form-grid">
              <label>
                Organisation
                <input type="text" placeholder="Ville, entreprise, école..." />
              </label>

              <label>
                Téléphone
                <input type="tel" placeholder="+33 ..." />
              </label>
            </div>

            <div className="form-grid">
              <label>
                Nombre de places visées
                <input type="number" placeholder="Ex : 500" />
              </label>

              <label>
                Étape du projet
                <select>
                  <option>Idée / concept</option>
                  <option>Étude en cours</option>
                  <option>Prototype</option>
                  <option>Support technique</option>
                </select>
              </label>
            </div>

            <label>
              Type de demande
              <input type="text" value={activeRequest} readOnly />
            </label>

            <label>
              Message
              <textarea
                rows="7"
                placeholder="Décrivez votre besoin, le lieu, la capacité souhaitée ou le problème rencontré..."
              ></textarea>
            </label>

            <button type="button" className="btn-primary">
              Envoyer la demande
            </button>
          </form>
        </div>
      </section>

      <section className="container contact-map-section">
        <div className="contact-map-heading">
          <p className="section-kicker">LOCALISATION</p>
          <h2>Nous situer</h2>
          <p>
            SmartPark est pensé pour répondre aux enjeux de stationnement dans
            les villes européennes et les zones urbaines denses.
          </p>
        </div>

        <div className="contact-map-box">
          <iframe
            title="Carte SmartPark"
            src="https://www.google.com/maps?q=Montb%C3%A9liard%2C%20France&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="contact-map-card">
            <h3>SmartPark</h3>
            <p>Montbéliard, France</p>
            <span>Projet de stationnement automatisé intelligent</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact