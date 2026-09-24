/* BOUTIQUE EMNAY — Stripe Checkout frontend */
const STRIPE_CHECKOUT_ENDPOINT = ""; // Pega aquí la URL HTTPS de tu API de Stripe.

function obtenerProductosDelCarritoEmnay() {
  if (Array.isArray(window.cart)) return window.cart;
  try { return JSON.parse(localStorage.getItem("cart") || "[]"); } catch (_) { return []; }
}

async function iniciarStripeCheckout() {
  const items = obtenerProductosDelCarritoEmnay();
  if (!items.length) { alert("Tu carrito está vacío."); return; }
  if (!STRIPE_CHECKOUT_ENDPOINT) {
    alert("Stripe está preparado. Falta configurar la URL segura de Checkout en js/stripe-checkout.js.");
    return;
  }
  const buttons = document.querySelectorAll("#stripeCheckoutButton, [data-stripe-checkout]");
  buttons.forEach(b => { b.disabled=true; b.textContent="Procesando…"; });
  try {
    const response = await fetch(STRIPE_CHECKOUT_ENDPOINT, {
      method:"POST", headers:{"Content-Type":"application/json"},
      body:JSON.stringify({items:items.map(i=>({id:i.id, quantity:i.quantity}))})
    });
    const data = await response.json();
    if (!response.ok || !data.url) throw new Error(data.error || "No se pudo crear Checkout.");
    window.location.href = data.url;
  } catch(e) {
    console.error(e); alert("No se pudo iniciar el pago con Stripe. Intenta nuevamente.");
    buttons.forEach(b=>{b.disabled=false;b.textContent="Pagar con Stripe";});
  }
}

document.addEventListener("DOMContentLoaded",()=>{
  const btn=document.getElementById("stripeCheckoutButton");
  if(btn) btn.addEventListener("click", iniciarStripeCheckout);
});
