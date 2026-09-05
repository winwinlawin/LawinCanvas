/* ==========================================================
   LAWIN CANVAS — Configuration
   Update these links any time your stores or socials change.
   No other file needs to be touched.
   ========================================================== */
const LINKS = {
  GUMROAD_URL: "https://hustler150.gumroad.com",
  PAYHIP_URL: "https://payhip.com/LawinCanvas",
  FACEBOOK_URL: "https://www.facebook.com/share/1LXg52cuwr/",
  TIKTOK_URL: "https://www.tiktok.com/@lawincanvas",
  INSTAGRAM_URL: "https://www.instagram.com/lawincanvas/"
};

/* ==========================================================
   Apply links to every matching element on the page
   ========================================================== */
function applyLinks() {
  const map = {
    gumroadLink: LINKS.GUMROAD_URL,
    gumroadLinkFooter: LINKS.GUMROAD_URL,
    payhipLink: LINKS.PAYHIP_URL,
    payhipLinkFooter: LINKS.PAYHIP_URL,
    facebookLink: LINKS.FACEBOOK_URL,
    facebookLinkFooter: LINKS.FACEBOOK_URL,
    tiktokLink: LINKS.TIKTOK_URL,
    tiktokLinkFooter: LINKS.TIKTOK_URL,
    instagramLink: LINKS.INSTAGRAM_URL,
    instagramLinkFooter: LINKS.INSTAGRAM_URL
  };

  Object.keys(map).forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", map[id]);
  });
}

/* ==========================================================
   Mobile navigation toggle
   ========================================================== */
function setupNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==========================================================
   Init
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  applyLinks();
  setupNavToggle();
});
