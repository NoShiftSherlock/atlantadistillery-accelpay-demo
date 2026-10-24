/* Atlanta Distillery demo: their Shopify store with the AccelPay Shopify app.
 *
 * Same pattern as leportier-accelpay-demo: the storefront, cart drawer and one-page
 * checkout imitate Shopify. What AccelPay adds is shown as small callouts at checkout:
 * payments, taxes and routing each order to a licensed retailer by the shipping address.
 * Express checkout (Shop Pay, Apple Pay, Google Pay) is supported by the AccelPay Shopify
 * integration and appears at the top of checkout and in the cart drawer.
 *
 * WHAT IS REAL AND WHAT IS NOT
 *   Real:  products, images, copy and prices from atlantadistillery.com (Shopify products.json,
 *          2026-10-24).
 *   Not:   the fulfilling retailer (no network retailer stocks the brand today, so the
 *          route reads "assigned at launch"), shipping rate, tax rate, the payment step.
 *          No order is ever placed.
 */
(function () {
  'use strict';

  const CATALOG = {
 "atlanta-distillery-vodka": {
  "name": "Atlanta Distillery Vodka",
  "short": "Atlanta Distillery Vodka",
  "size": "750ML",
  "tag": "Apple vodka",
  "price": 2999,
  "connected": true,
  "image": "assets/p-atlanta-distillery-vodka-0.webp",
  "gallery": [
   "assets/p-atlanta-distillery-vodka-0.webp"
  ],
  "lead": "Crafted from apples. Defined by quality.",
  "specs": "750ML",
  "desc": [
   "Atlanta Distillery Vodka is handcrafted in small batches with all-natural ingredients, embodying the belief that true craftsmanship creates a spirit of unmatched clarity and smoothness. Unlike conventional grain-based vodka, ours begins with a distinctive blend of hand-picked apples and pure cane sugar, delivering a crisp, clean character that sets it apart.",
   "We don’t cut corners for economy. Each bottle is born from a meticulous process: fresh, carefully selected apples are fermented and distilled to capture their essence. Every bottle contains the flavor of 20-30 whole apples, resulting in a vodka with authentic orchard sweetness and remarkable depth."
  ]
 },
 "american-dry-gin": {
  "name": "American Dry Gin",
  "short": "American Dry Gin",
  "size": "750ML",
  "tag": "Gin",
  "price": 2999,
  "connected": true,
  "image": "assets/p-american-dry-gin-0.webp",
  "gallery": [
   "assets/p-american-dry-gin-0.webp"
  ],
  "lead": "Pure. Authentic. Exceptionally Crafted.",
  "specs": "750ML",
  "desc": [
   "Our American Dry Gin is born from a devotion to clarity, balance, and excellence. Starting with a base of 100% Grain Neutral Spirit, distilled six times for unmatched smoothness, we create a spirit that is as refined as it is distinctive.",
   "The heart of our gin lies in its botanicals. Nearly 100 pounds of seven carefully chosen organic botanicals are steeped for up to 48 hours, then re-distilled to capture their full character. This meticulous process yields a flavor profile that celebrates the timeless notes of juniper, coriander, and angelica root, lifted by bright citrus and delicate floral accents."
  ]
 },
 "navy-strength-gin": {
  "name": "Navy Strength Gin",
  "short": "Navy Strength Gin",
  "size": "750ML",
  "tag": "Gin",
  "price": 2999,
  "connected": true,
  "image": "assets/p-navy-strength-gin-0.webp",
  "gallery": [
   "assets/p-navy-strength-gin-0.webp"
  ],
  "lead": "Powerful. Precise. Unapologetically Bold.",
  "specs": "750ML",
  "desc": [
   "Our Navy Strength Gin is crafted with the same devotion to purity and excellence as our American Dry Gin, but with an intensity designed to command attention. Beginning with a base of 100% Grain Neutral Spirit, distilled six times for remarkable clarity, we build a spirit that is both robust and refined.",
   "Nearly 100 pounds of seven carefully selected organic botanicals are steeped for up to 48 hours, then re-distilled to unlock their full character. The result is a gin that amplifies the timeless notes of juniper, coriander, and angelica root, while bright citrus and delicate florals cut through with striking clarity."
  ]
 },
 "eau-de-vie-american-apple-brandy": {
  "name": "Eau De Vie American Apple Brandy",
  "short": "Eau De Vie American Apple Brandy",
  "size": "750ML",
  "tag": "American apple brandy",
  "price": 2999,
  "connected": true,
  "image": "assets/p-eau-de-vie-american-apple-brandy-0.webp",
  "gallery": [
   "assets/p-eau-de-vie-american-apple-brandy-0.webp"
  ],
  "lead": "Pure orchard character. Crafted with tradition.",
  "specs": "750ML",
  "desc": [
   "Discover the essence of the apple in our Eau De Vie American Apple Brandy, created in the time-honored European style through a meticulous double-pot distillation. This slow, deliberate process preserves the vibrant natural flavors of our fresh cider, capturing the orchard in every drop.",
   "The result is a spirit that shines with the bright, tart character of green apples, gracefully balanced by soft notes of vanilla and a silky-smooth finish. Each sip is a celebration of freshness, complexity, and craftsmanship, making it a true standout among apple brandies."
  ]
 },
 "toasted-barrel-american-apple-brandy": {
  "name": "Toasted Barrel American Apple Brandy",
  "short": "Toasted Barrel American Apple Brandy",
  "size": "750ML",
  "tag": "American apple brandy",
  "price": 2999,
  "connected": true,
  "image": "assets/p-toasted-barrel-american-apple-brandy-0.webp",
  "gallery": [
   "assets/p-toasted-barrel-american-apple-brandy-0.webp"
  ],
  "lead": "Pure. Bold. Unapologetically Apple.",
  "specs": "750ML",
  "desc": [
   "Our Toasted Barrel American Apple Brandy is where old-world tradition meets new-world innovation. Distilled slowly in a double pot still - the European gold standard - we begin with fresh-pressed cider to capture the orchard’s true essence.",
   "This award-winning spirit starts as our crystal-clear Eau De Vie Apple Brandy, then undergoes a proprietary rapid-aging process in toasted American oak barrels. The transformation yields a rich, amber-hued brandy that bursts with ripe apple character, layered with warm vanilla, caramelized spice, and a subtle whisper of smoke."
  ]
 },
 "charred-barrel-american-apple-brandy": {
  "name": "Charred Barrel American Apple Brandy",
  "short": "Charred Barrel American Apple Brandy",
  "size": "750ML",
  "tag": "American apple brandy",
  "price": 2999,
  "connected": true,
  "image": "assets/p-charred-barrel-american-apple-brandy-0.webp",
  "gallery": [
   "assets/p-charred-barrel-american-apple-brandy-0.webp"
  ],
  "lead": "Bold. Complex. Unapologetically Pure.",
  "specs": "750ML",
  "desc": [
   "Our Charred Barrel American Apple Brandy is crafted in the timeless European tradition, using a meticulous double-pot distillation that begins with fresh-pressed cider. This slow, deliberate process preserves the vibrant essence of the apple - nothing added, nothing artificial.",
   "Starting as our delicate Eau De Vie Apple Brandy, the spirit is then aged with a proprietary technique in deeply charred #3 American oak barrels. The transformation yields a bold, sophisticated brandy bursting with ripe apple flavor, layered with subtle smoke, toasted oak, and rich undertones of dark chocolate."
  ]
 },
 "port-barrel-american-applejack": {
  "name": "Port Barrel American Applejack",
  "short": "Port Barrel American Applejack",
  "size": "750ML",
  "tag": "American applejack",
  "price": 2999,
  "connected": true,
  "image": "assets/p-port-barrel-american-applejack-0.webp",
  "gallery": [
   "assets/p-port-barrel-american-applejack-0.webp"
  ],
  "lead": "Rich. Refined. Orchard to Glass.",
  "specs": "750ML",
  "desc": [
   "Our Port Barrel American Applejack is a spirit that honors tradition while embracing innovation. Crafted through a meticulous double-pot distillation, we begin with fresh cider to capture the pure, natural character of the apple.",
   "This award-winning Applejack first takes shape as our delicate Eau De Vie, then matures in Tawny Port barrels imported from Portugal. The aging process infuses the spirit with remarkable depth, yielding vibrant notes of ripe apple skins, luscious stone fruit, and subtle layers of dark chocolate, all wrapped in a velvety finish."
  ]
 },
 "rye-barrel-american-applejack": {
  "name": "Rye Barrel American Applejack",
  "short": "Rye Barrel American Applejack",
  "size": "750ML",
  "tag": "American applejack",
  "price": 2999,
  "connected": true,
  "image": "assets/p-rye-barrel-american-applejack-0.webp",
  "gallery": [
   "assets/p-rye-barrel-american-applejack-0.webp"
  ],
  "lead": "Robust. Spicy. Orchard-Driven.",
  "specs": "750ML",
  "desc": [
   "Our Rye Barrel American Applejack is a spirit that bridges old-world tradition with bold new character. Crafted through a meticulous double-pot distillation, we begin with fresh cider to preserve the pure, natural essence of the apple.",
   "This award-winning Applejack first takes shape as our delicate Eau De Vie, then matures in freshly emptied rye whiskey barrels. The aging process imparts a distinctive depth, weaving together vibrant notes of ripe apple skins with the warm spice of rye, complemented by hints of toasted oak and a touch of dark chocolate."
  ]
 },
 "dragon-con-vodka": {
  "name": "Dragon Con Vodka",
  "short": "Dragon Con Vodka",
  "size": "750ML",
  "tag": "2026 limited release",
  "price": 2999,
  "connected": true,
  "image": "assets/p-dragon-con-vodka-0.webp",
  "gallery": [
   "assets/p-dragon-con-vodka-0.webp"
  ],
  "lead": "2026 Limited Release Collector’s Edition!",
  "specs": "750ML",
  "desc": [
   "We’ve taken Science Fiction, Fantasy, Comics, Gaming, Literature, Art, Music, and Film, mixed them with the passion and creativity of seventy-five thousand enthusiastic fans, stirred in a healthy dose of philanthropy, poured over a diversified and inclusive community, then distilled that unique concoction into the pure deliciousness that is Dragon Con. Please enjoy this handcrafted vodka and Dragon Con responsible! 40% abv | 80 Proof | $29.99"
  ]
 }
};
  const ORDER = ["atlanta-distillery-vodka", "american-dry-gin", "navy-strength-gin", "eau-de-vie-american-apple-brandy", "toasted-barrel-american-apple-brandy", "charred-barrel-american-apple-brandy", "port-barrel-american-applejack", "rye-barrel-american-applejack", "dragon-con-vodka"];
  const FIRST = ORDER[0];

  // ILLUSTRATIVE rates and tax.
  const RATES = { shipping: 1499 };
  const TAX_RATE = 0.08;
  const STATE_NAMES = { AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',CT:'Connecticut',DE:'Delaware',DC:'District of Columbia',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',IL:'Illinois',IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',MN:'Minnesota',MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',OH:'Ohio',OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',SD:'South Dakota',TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',WA:'Washington',WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming' };
  const ZIP3 = [[5,5,'NY'],[10,27,'MA'],[28,29,'RI'],[30,38,'NH'],[39,49,'ME'],[50,59,'VT'],[60,69,'CT'],[70,89,'NJ'],[100,149,'NY'],[150,196,'PA'],[197,199,'DE'],[200,200,'DC'],[201,201,'VA'],[202,205,'DC'],[206,219,'MD'],[220,246,'VA'],[247,268,'WV'],[270,289,'NC'],[290,299,'SC'],[300,319,'GA'],[320,349,'FL'],[350,369,'AL'],[370,385,'TN'],[386,397,'MS'],[398,399,'GA'],[400,427,'KY'],[430,459,'OH'],[460,479,'IN'],[480,499,'MI'],[500,528,'IA'],[530,549,'WI'],[550,567,'MN'],[569,569,'DC'],[570,577,'SD'],[580,588,'ND'],[590,599,'MT'],[600,629,'IL'],[630,658,'MO'],[660,679,'KS'],[680,693,'NE'],[700,715,'LA'],[716,729,'AR'],[730,749,'OK'],[750,799,'TX'],[800,816,'CO'],[820,831,'WY'],[832,838,'ID'],[840,847,'UT'],[850,865,'AZ'],[870,884,'NM'],[885,885,'TX'],[889,898,'NV'],[900,961,'CA'],[967,968,'HI'],[970,979,'OR'],[980,994,'WA'],[995,999,'AK']];
  function stateForZip(zip) {
    if (!/^\d{5}$/.test(zip)) return null;
    const n = parseInt(zip.slice(0, 3), 10);
    for (const [a, b, s] of ZIP3) if (n >= a && n <= b) return s;
    return null;
  }

  // Shipping rate the AccelPay app returns for a ZIP. No network retailer stocks the
  // brand today, so the route is illustrative: a licensed retailer assigned at launch.
  function ratesFor(zip) {
    const st = stateForZip(zip); if (!st) return null;
    return { st: st, rates: [{ id: 'ship-' + st, kind: 'shipping', title: 'Standard shipping, 2 to 5 business days',
      sub: 'Ships from a licensed retailer in ' + (STATE_NAMES[st] || st) + ' · assigned at launch', price: RATES.shipping, by: 'a licensed retailer in ' + (STATE_NAMES[st] || st) }] };
  }

  // ---------------------------------------------------------------- cart (Shopify AJAX cart stand-in)
  const LS = 'atldist-shopify-demo-v1';
  const state = load() || { items: [] };
  function load() { try { return JSON.parse(localStorage.getItem(LS)); } catch (e) { return null; } }
  function save() { try { localStorage.setItem(LS, JSON.stringify(state)); } catch (e) {} }
  const money = c => '$' + (c / 100).toFixed(2);
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  function subtotal() { return state.items.reduce((a, i) => a + CATALOG[i.h].price * i.qty, 0); }
  function count() { return state.items.reduce((a, i) => a + i.qty, 0); }
  function add(h, qty) {
    const ex = state.items.filter(i => i.h === h)[0];
    if (ex) ex.qty = Math.min(12, ex.qty + qty); else state.items.push({ h: h, qty: qty });
    save(); renderAll(); openDrawer();
  }
  function setQty(h, q) { const it = state.items.filter(i => i.h === h)[0]; if (!it) return; it.qty = Math.max(0, Math.min(12, q)); if (!it.qty) state.items = state.items.filter(i => i.h !== h); save(); renderAll(); }

  function openDrawer() { const d = $('#drawer'); if (!d) return; d.classList.add('on'); $('#scrim').classList.add('on'); document.body.style.overflow = 'hidden'; }
  function closeDrawer() { const d = $('#drawer'); if (!d) return; d.classList.remove('on'); $('#scrim').classList.remove('on'); document.body.style.overflow = ''; }

  function renderHeader() { $$('[data-cart-count]').forEach(el => { el.textContent = count(); el.hidden = !count(); }); }

  function renderDrawer() {
    const box = $('#drawer-items'); if (!box) return;
    box.innerHTML = state.items.length ? state.items.map(i => {
      const p = CATALOG[i.h];
      return '<div class="cline"><div class="im"><img src="' + p.image + '" alt=""></div><div>' +
        '<div class="nm">' + esc(p.name) + '</div><div class="pr">' + money(p.price) + '</div>' +
        '<div class="qrow"><div class="qty"><button data-q="' + (i.qty - 1) + '" data-h="' + i.h + '" aria-label="Decrease quantity">−</button><span>' + i.qty + '</span><button data-q="' + (i.qty + 1) + '" data-h="' + i.h + '" aria-label="Increase quantity">+</button></div>' +
        '<button class="rm" data-q="0" data-h="' + i.h + '" aria-label="Remove">\u{1F5D1}︎</button></div></div>' +
        '<div class="tot">' + money(p.price * i.qty) + '</div></div>';
    }).join('') : '<div class="empty">Your cart is empty</div>';
    const f = $('#drawer-foot');
    if (f) f.innerHTML = '<div class="est"><span>Estimated total</span><span>' + money(subtotal()) + ' USD</span></div>' +
      '<div class="small">Taxes and shipping calculated at checkout. Orders ship from a licensed retailer in your state.</div>' +
      '<a class="btn block" href="checkout.html"' + (state.items.length ? '' : ' style="opacity:.4;pointer-events:none"') + '>Check out</a>' +
      (state.items.length ? '<div class="xpay">' +
        '<button type="button" class="xb shop" data-xpay="Shop Pay" aria-label="Shop Pay"><b>shop</b><span>Pay</span></button>' +
        '<button type="button" class="xb apple" data-xpay="Apple Pay" aria-label="Apple Pay"><svg width="17" height="20" viewBox="0 0 17 20" aria-hidden="true" fill="#fff"><path d="M14.1 10.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9C3.6 4.8 2 5.8 1 7.4c-1.9 3.3-.5 8.2 1.4 10.9.9 1.3 2 2.8 3.4 2.7 1.4-.1 1.9-.9 3.5-.9s2.1.9 3.5.9c1.5 0 2.4-1.3 3.3-2.7 1-1.5 1.5-3 1.5-3.1 0 0-2.9-1.1-3-4.6zM11.5 2.9c.7-.9 1.2-2.1 1.1-3.3-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.2 1.2.1 2.3-.6 3-1.5z"/></svg><span>Pay</span></button>' +
        '<button type="button" class="xb google" data-xpay="Google Pay" aria-label="Google Pay"><b class="g">G</b><span>Pay</span></button>' +
      '</div>' : '');
    $$('[data-xpay]', f).forEach(b => b.addEventListener('click', () => { location.href = 'checkout.html?express=' + encodeURIComponent(b.getAttribute('data-xpay')); }));
    $$('[data-q]', box).forEach(b => b.addEventListener('click', () => setQty(b.getAttribute('data-h'), +b.getAttribute('data-q'))));
  }

  // ---------------------------------------------------------------- product page
  const pd = { img: 0, qty: 1 };
  function renderProduct() {
    const host = $('#pdp'); if (!host) return;
    const h0 = host.getAttribute('data-handle'); const h = h0 in CATALOG ? h0 : FIRST; const p = CATALOG[h];
    document.title = p.name + ' | Atlanta Distillery';
    host.innerHTML = [
      '<div class="gallery"><div class="main"><img src="', p.gallery[pd.img], '" alt="', esc(p.short), '"></div>',
        p.gallery.length > 1 ? '<div class="thumbs">' + p.gallery.map((g, i) => '<button data-img="' + i + '" aria-selected="' + (i === pd.img) + '"><img src="' + g + '" alt=""></button>').join('') + '</div>' : '',
      '</div>',
      '<div class="info">',
        '<h1>', esc(p.name), '</h1>',
        '<div class="price">', money(p.price), ' USD</div>',
        '<div class="small"><a href="#">Shipping</a> calculated at checkout.</div>', '<div class="small" style="text-transform:uppercase;letter-spacing:.12em;color:var(--gold-hi)">' + esc(p.tag) + '</div>',
        '<div class="qty-wrap">Quantity<div class="qty"><button id="qm" aria-label="Decrease quantity">−</button><span>', pd.qty, '</span><button id="qp" aria-label="Increase quantity">+</button></div></div>',
        p.connected
          ? '<button class="btn atc" id="atc">Add to cart</button>' +
            '<div class="fulfil-line"><img src="assets/logo.webp" alt=""><span>Ships from a licensed retailer in your state. Rates show at checkout once you enter your address.</span></div>'
          : '<button class="btn atc" disabled>Coming soon</button><div class="notice">Not yet stocked by a retailer in the network. It goes live here once it is connected to licensed retailers during onboarding.</div>',
        '<div class="desc"><p><b>', esc(p.lead), '</b><br>', esc(p.specs), '</p>', p.desc.map(d => '<p>' + esc(d) + '</p>').join(''), '</div>',
      '</div>'].join('');
    $$('[data-img]', host).forEach(b => b.addEventListener('click', () => { pd.img = +b.getAttribute('data-img'); renderProduct(); }));
    $('#qm', host).addEventListener('click', () => { if (pd.qty > 1) { pd.qty--; renderProduct(); } });
    $('#qp', host).addEventListener('click', () => { if (pd.qty < 12) { pd.qty++; renderProduct(); } });
    const atc = $('#atc', host); if (atc) atc.addEventListener('click', () => add(h, pd.qty));
  }

  // ---------------------------------------------------------------- checkout
  const co = { rate: null };
  function renderCheckout() {
    const side = $('#os'); if (!side) return;
    const zipEl = $('#zip'), stEl = $('#state');
    const zip = (zipEl.value || '').trim();
    const r = ratesFor(zip);
    if (r && stEl.value !== r.st) stEl.value = r.st;
    const box = $('#rates');
    let rate = null;
    if (!state.items.length) box.innerHTML = '<div class="co-empty">Your cart is empty. <a href="index.html#shop">Continue shopping</a></div>';
    else if (!r) box.innerHTML = '<div class="co-empty">Enter your shipping address to view available shipping methods.</div>';
    else {
      if (!r.rates.filter(x => x.id === co.rate)[0]) co.rate = r.rates[0].id;
      rate = r.rates.filter(x => x.id === co.rate)[0];
      box.innerHTML = '<div class="rates">' + r.rates.map(x => '<label class="rate' + (x.id === co.rate ? ' on' : '') + '"><input type="radio" name="rate" value="' + x.id + '"' + (x.id === co.rate ? ' checked' : '') + '>' +
        (x.icon ? '<img class="ic" src="' + x.icon + '" alt="">' : '') + '<span class="t">' + esc(x.title) + '<span>' + esc(x.sub) + '</span></span><span class="p">' + money(x.price) + '</span></label>').join('') + '</div>' +
        '<div class="callout"><span class="dot"></span><span><b>Retailer routing by AccelPay.</b> Your address decides which licensed retailer sells and ships the order. The order still lands in Atlanta Distillery’s Shopify admin with the full customer record.</span></div>';
      $$('input[name=rate]', box).forEach(i => i.addEventListener('change', () => { co.rate = i.value; renderCheckout(); }));
    }
    const sub = subtotal(), ship = rate ? rate.price : null, tax = rate ? Math.round(sub * TAX_RATE) : null;
    side.innerHTML = state.items.map(i => { const p = CATALOG[i.h];
        return '<div class="os-item"><div class="im"><img src="' + p.image + '" alt=""><span class="q">' + i.qty + '</span></div><div class="nm">' + esc(p.name) + '<span>' + p.size + '</span></div><div class="pr">' + money(p.price * i.qty) + '</div></div>'; }).join('') +
      '<div class="os-disc"><input placeholder="Discount code or gift card" aria-label="Discount code"><button type="button">Apply</button></div>' +
      '<div class="os-line"><span class="m">Subtotal · ' + count() + ' item' + (count() === 1 ? '' : 's') + '</span><span>' + money(sub) + '</span></div>' +
      '<div class="os-line"><span class="m">' + (rate && rate.kind === 'delivery' ? 'Delivery' : 'Shipping') + '</span><span>' + (ship === null ? '<span class="m">Enter shipping address</span>' : money(ship)) + '</span></div>' +
      '<div class="os-line"><span class="m">Estimated taxes</span><span>' + (tax === null ? '<span class="m">-</span>' : money(tax)) + '</span></div>' +
      '<div class="os-line total"><span>Total</span><span><small>USD</small>' + money(sub + (ship || 0) + (tax || 0)) + '</span></div>' +
      '<div class="callout"><span class="dot"></span><span><b>Taxes by AccelPay.</b> Sales tax calculated for the ship-to address.</span></div>' +
      (rate ? '<div class="callout"><span class="dot"></span><span>' + (rate.kind === 'delivery' ? 'Delivered by ' : 'Sold and shipped by ') + '<b>' + esc(rate.by) + '</b>, a licensed retailer. Adult signature (21+) required.</span></div>' : '');
    const pay = $('#pay');
    if (pay) { pay.disabled = !rate; pay.textContent = 'Pay now'; }
    co.current = rate; co.total = sub + (ship || 0) + (tax || 0);
  }
  function wireCheckout() {
    const form = $('#co-form'); if (!form) return;
    ['#zip', '#state'].forEach(s => $(s).addEventListener('input', () => { co.rate = null; renderCheckout(); }));
    $('#zip').addEventListener('change', renderCheckout);
    $$('[data-fill]').forEach(b => b.addEventListener('click', () => {
      const v = b.getAttribute('data-fill').split('|');
      form.address1.value = v[0]; form.city.value = v[1]; $('#zip').value = v[2]; co.rate = null; renderCheckout();
    }));
    const xp = $('#xpay-top');
    if (xp) { xp.innerHTML = '<div class="xpay big">' +
        '<button type="button" class="xb shop" data-xpay="Shop Pay" aria-label="Shop Pay"><b>shop</b><span>Pay</span></button>' +
        '<button type="button" class="xb apple" data-xpay="Apple Pay" aria-label="Apple Pay"><svg width="17" height="20" viewBox="0 0 17 20" aria-hidden="true" fill="#fff"><path d="M14.1 10.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9C3.6 4.8 2 5.8 1 7.4c-1.9 3.3-.5 8.2 1.4 10.9.9 1.3 2 2.8 3.4 2.7 1.4-.1 1.9-.9 3.5-.9s2.1.9 3.5.9c1.5 0 2.4-1.3 3.3-2.7 1-1.5 1.5-3 1.5-3.1 0 0-2.9-1.1-3-4.6zM11.5 2.9c.7-.9 1.2-2.1 1.1-3.3-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.2 1.2.1 2.3-.6 3-1.5z"/></svg><span>Pay</span></button>' +
        '<button type="button" class="xb google" data-xpay="Google Pay" aria-label="Google Pay"><b class="g">G</b><span>Pay</span></button>' +
      '</div>';
      $$('[data-xpay]', xp).forEach(b => b.addEventListener('click', () => expressFill(b.getAttribute('data-xpay')))); }
    const q = new URLSearchParams(location.search).get('express'); if (q) expressFill(q);
    function expressFill(method) {
      // Demo: the wallet hands back a saved contact and address, then checkout continues.
      form.email.value = form.email.value || 'shopper@example.com';
      form.first.value = form.first.value || 'Jordan'; form.last.value = form.last.value || 'Lee';
      form.address1.value = '350 E 13th St'; form.city.value = 'New York'; $('#zip').value = '10009'; co.rate = null; renderCheckout();
      const n = $('#xpay-note'); if (n) { n.hidden = false; n.textContent = method + ' filled your contact and address. Pick a shipping method below, then pay.'; }
      const r = $('#rates'); if (r && r.scrollIntoView) r.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    form.addEventListener('submit', e => {
      e.preventDefault(); if (!co.current) return;
      const n = 'AP-DEMO-' + (1000 + Math.floor(Math.random() * 9000));
      try { sessionStorage.setItem('ap-order', JSON.stringify({ n: n, total: co.total, by: co.current.by, kind: co.current.kind })); } catch (err) {}
      state.items = []; save();
      location.href = 'checkout.html?confirmed=1';
    });
  }

  function renderAll() { renderHeader(); renderDrawer(); renderProduct(); renderCheckout(); }
  function boot() {
    $$('[data-cart-toggle]').forEach(b => b.addEventListener('click', openDrawer));
    const x = $('#drawer-close'); if (x) x.addEventListener('click', closeDrawer);
    const s = $('#scrim'); if (s) s.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
    const burger = $('#burger'); if (burger) burger.addEventListener('click', () => $('nav.main').classList.toggle('open'));
    wireCheckout(); renderAll();
  }
  window.APDemo = { catalog: CATALOG, order: ORDER, money: money, add: add };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
