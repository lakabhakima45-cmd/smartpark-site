function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="section-header">
        <p className="section-tag">WHY SMARTPARK</p>
        <h2>Pourquoi adopter un parking robotisé intelligent ?</h2>
      </div>

      <div className="benefits-grid">
        <article className="benefit-card">
          <h3>Gain de place</h3>
          <p>
            Suppression des rampes, des voies internes et des zones mortes
            pour maximiser la densité de stockage.
          </p>
        </article>

        <article className="benefit-card">
          <h3>Sécurité totale</h3>
          <p>
            Aucun conducteur à l’intérieur du système, capsules individuelles
            et réduction des risques d’accrochage.
          </p>
        </article>

        <article className="benefit-card">
          <h3>Expérience fluide</h3>
          <p>
            Dépôt rapide, récupération automatisée et interaction simplifiée
            via application mobile et QR code.
          </p>
        </article>

        <article className="benefit-card">
          <h3>Ville intelligente</h3>
          <p>
            Une infrastructure pensée pour les centres urbains denses,
            la réduction des émissions et l’optimisation foncière.
          </p>
        </article>
      </div>
    </section>
  )
}

export default BenefitsSection