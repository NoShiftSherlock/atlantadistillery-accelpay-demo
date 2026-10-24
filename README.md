# Atlanta Distillery on Shopify with the AccelPay app (sales demo)

**Private sales demo.** This site uses Atlanta Distillery's name, marks, product imagery and copy
(from atlantadistillery.com) to show their Shopify store with the AccelPay Shopify app installed. It is
not affiliated with or endorsed by Atlanta Distillery, it is not a store, and no order is ever placed
or charged. Shopify, Gopuff and ReserveBar marks belong to their owners. Keep the link
unlisted; share it 1:1 only.

Live: https://noshiftsherlock.github.io/atlantadistillery-accelpay-demo/

## The pitch it shows

atlantadistillery.com runs on Shopify, but each product page loads a third-party buy
button that opens its own sidebar cart. The demo replaces that button with the native
Shopify cart and checkout plus the AccelPay Shopify app.

Platform checked 2026-10-24: `Shopify.shop` is set on the page and `/products.json`
serves the catalog. The demo keeps the theme look, the native Shopify cart drawer and the
Shopify one-page checkout. The AccelPay Shopify app takes over payments, taxes and order
routing to licensed retailers, so there is no third-party cart and the order and customer
record stay in the brand's Shopify admin. Small callouts at checkout mark what AccelPay does.

Express checkout (Shop Pay, Apple Pay, Google Pay) is supported by the AccelPay Shopify
integration and appears at the top of checkout and in the cart drawer. In the demo the
buttons fill a sample contact and address and continue.

| Page | What it shows |
| --- | --- |
| `index.html` | Home, collection, story, "How this works", team panel, reordering note |
| `product.html?p=<handle>` | Product page (Shopify theme style) |
| `checkout.html` | Shopify one-page checkout: express checkout plus card payment, shipping rate by address, AccelPay callouts |

## Real vs illustrative

Real:
- Products, images, copy and prices: atlantadistillery.com Shopify products.json, 2026-10-24.

Illustrative:
- The fulfilling retailer. No retailer in the ReserveBar/AccelPay network has the brand in
  stock today (checked 2026-10-24), so checkout shows a licensed retailer "assigned at launch".
- Shipping ($14.99), tax (8%), payment fields. Nothing is charged.
- No Gopuff option: the brand is not on Gopuff today (live check 2026-10-24).

Deploy: GitHub Pages serves `main`; a push is a deploy. Bump `?v=` on `styles.css` and
`app.js` when they change. Built by `build_demo.py` in the session scratchpad from the
leportier-accelpay-demo files.
