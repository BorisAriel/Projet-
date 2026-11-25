# Projet- SaaS

Application SaaS Next.js pour vendre des abonnements en ligne aux particuliers et aux entreprises, avec Stripe.

## Offres actuelles

- Mensuel : 120 $ / mois, jusqu’à 20 utilisateurs
- Semestriel : 50 $ tous les 6 mois, jusqu’à 50 utilisateurs
- Annuel : 100 $ / an, utilisateurs illimités

## Démarrage

```bash
npm install
npm run dev
```

Ajouter les variables d’environnement suivantes :

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## Stripe

Configurer trois produits Stripe correspondant aux trois offres, puis renseigner leurs Price ID dans `src/config/plans.ts`.
