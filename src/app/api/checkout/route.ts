import { NextResponse } from "next/server";
import { plans } from "@/src/config/plans";
import { getStripe } from "@/src/lib/stripe";

export async function POST(request: Request) {
  const form = await request.formData();
  const planId = String(form.get("planId") ?? "");
  const plan = plans.find((item) => item.id === planId);

  if (!plan) return NextResponse.json({ error: "Formule introuvable" }, { status: 400 });
  if (!plan.stripePriceId) return NextResponse.json({ error: "Price ID Stripe non configuré" }, { status: 503 });

  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: plan.stripePriceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/#tarifs`,
  });

  if (!session.url) return NextResponse.json({ error: "Impossible de créer le paiement" }, { status: 500 });
  return NextResponse.redirect(session.url, 303);
}
