export type PlanId = "monthly" | "semiannual" | "annual";

export type Plan = {
  id: PlanId;
  name: string;
  price: number;
  priceLabel: string;
  period: string;
  usersLabel: string;
  description: string;
  stripePriceId: string;
};

export const plans: Plan[] = [
  {
    id: "monthly",
    name: "Mensuel",
    price: 120,
    priceLabel: "120 $",
    period: "par mois",
    usersLabel: "20 utilisateurs",
    description: "Flexibilité maximale avec facturation mensuelle.",
    stripePriceId: process.env.STRIPE_PRICE_MONTHLY ?? "",
  },
  {
    id: "semiannual",
    name: "Semestriel",
    price: 50,
    priceLabel: "50 $",
    period: "tous les 6 mois",
    usersLabel: "50 utilisateurs",
    description: "Un pack adapté aux équipes en croissance.",
    stripePriceId: process.env.STRIPE_PRICE_SEMIANNUAL ?? "",
  },
  {
    id: "annual",
    name: "Annuel",
    price: 100,
    priceLabel: "100 $",
    period: "par an",
    usersLabel: "Utilisateurs illimités",
    description: "Une formule complète pour les organisations.",
    stripePriceId: process.env.STRIPE_PRICE_ANNUAL ?? "",
  },
];
