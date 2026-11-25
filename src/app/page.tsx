import { plans } from "@/src/config/plans";

export default function HomePage() {
  return (
    <main>
      <nav className="nav">
        <strong>Outils Pro</strong>
        <a href="#tarifs">Voir les tarifs</a>
      </nav>

      <section className="hero">
        <p className="eyebrow">Solution professionnelle</p>
        <h1>Les bons outils pour développer votre activité</h1>
        <p>Choisissez la formule adaptée à votre organisation et démarrez immédiatement.</p>
        <a className="primary" href="#tarifs">Choisir mon abonnement</a>
      </section>

      <section className="plans" id="tarifs">
        {plans.map((plan) => (
          <article className="card" key={plan.id}>
            {plan.id === "annual" && <span className="badge">Recommandé</span>}
            <h2>{plan.name}</h2>
            <div className="price"><span>{plan.priceLabel}</span> <small>{plan.period}</small></div>
            <p className="users">{plan.usersLabel}</p>
            <p>{plan.description}</p>
            <form action="/api/checkout" method="POST">
              <input type="hidden" name="planId" value={plan.id} />
              <button type="submit">Commencer</button>
            </form>
          </article>
        ))}
      </section>

      <style>{`
        .nav { max-width: 1120px; margin: auto; padding: 24px 20px; display:flex; justify-content:space-between; }
        .hero { max-width: 800px; margin: 70px auto; padding: 0 20px; text-align:center; }
        .hero h1 { font-size: clamp(42px, 7vw, 72px); letter-spacing:-3px; line-height:1; margin:16px 0; }
        .hero p { color:var(--muted); font-size:20px; }
        .eyebrow { color:var(--blue)!important; font-weight:700; text-transform:uppercase; }
        .primary, button { border:0; border-radius:10px; background:var(--blue); color:white; padding:14px 18px; font-weight:700; display:inline-block; cursor:pointer; }
        .plans { max-width:1120px; margin:0 auto 80px; padding:0 20px; display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .card { position:relative; background:white; border:1px solid var(--line); border-radius:16px; padding:28px; box-shadow:0 8px 24px rgba(16,24,40,.05); }
        .card h2 { margin-top:0; }
        .price { display:flex; align-items:baseline; gap:8px; }
        .price span { font-size:38px; font-weight:800; }
        .price small, .users { color:var(--muted); }
        .users { border-top:1px solid var(--line); border-bottom:1px solid var(--line); padding:14px 0; font-weight:700; }
        .card form { margin-top:24px; }
        .card button { width:100%; }
        .badge { position:absolute; right:16px; top:16px; background:#d1fadf; color:#067647; border-radius:999px; padding:6px 10px; font-size:12px; font-weight:700; }
        @media(max-width:800px){ .plans{grid-template-columns:1fr}.hero{margin:40px auto}.hero h1{letter-spacing:-2px} }
      `}</style>
    </main>
  );
}
