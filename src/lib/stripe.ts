import type Stripe from "stripe";

export function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }

  return new (require("stripe"))(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-09-30.acacia",
  }) as Stripe;
}
