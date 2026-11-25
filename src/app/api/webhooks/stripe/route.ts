import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe } from "@/src/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  if (!signature) return NextResponse.json({ error: "Signature manquante" }, { status: 400 });

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) return NextResponse.json({ error: "Webhook Stripe non configuré" }, { status: 503 });

  const stripe = getStripe();
  const body = await request.text();

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Signature invalide";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      console.log(`Stripe event received: ${event.type}`);
      break;
  }

  return NextResponse.json({ received: true });
}
