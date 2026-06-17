/* ============================================================
   FPVM BORDEAUX — main.js
   Traductions FR / MG / EN + interactions
   ============================================================ */

/* ——— TRANSLATIONS ——— */
const T = {
  fr: {
    /* NAV */
    nav_accueil:      "Accueil",
    nav_apropos:      "À propos",
    nav_activites:    "Activités",
    nav_predications: "Prédications",
    nav_agenda:       "Agenda",
    nav_contact:      "Contact",
    nav_don:          "♥ Soutenir",
    /* HERO */
    hero_verse:       "« Car là où deux ou trois sont assemblés en mon nom, je suis au milieu d'eux. » — Matthieu 18:20",
    hero_title1:      "Bienvenue à",
    hero_title2:      "l'Église FPVM",
    hero_title3:      "Bordeaux",
    hero_sub:         "Une communauté malgache vivante au cœur de Bordeaux-Pessac, unie dans la foi, la louange et le service.",
    hero_btn1:        "Nous rejoindre ce dimanche",
    hero_btn2:        "Écouter une prédication",
    hero_loc:         "73 av. Marc Desbats, Pessac",
    hero_when:        "Dimanches à 15h00",
    hero_tel:         "fpvmbordeaux@gmail.com",
    /* BAND */
    band_where:       "Où nous trouver",
    band_when:        "Culte chaque dimanche",
    band_time:        "À 15h (sauf dernier dim. du mois)",
    band_contact:     "Nous contacter",
    /* QUI SOMMES-NOUS */
    about_ey:         "Qui sommes-nous",
    about_title:      "Une famille en Christ",
    about_p1:         "La FPVM (Fiangonana Protestanta Vaovao eto Madagasikara) — Nouvelle Église Protestante de Madagascar — est née en 2002 à Antananarivo sous la direction du Pasteur Jean Joseph Randrianantoandro.",
    about_p2:         "Implantée à Bordeaux-Pessac, notre communauté réunit des frères et sœurs malgaches et francophones, des étudiants, des familles et des chercheurs de Dieu. Nous croyons en la puissance de la Parole, de la louange et de la communion fraternelle.",
    about_verse:      "« Vous êtes le corps de Christ, et vous êtes ses membres, chacun pour sa part. »",
    about_ref:        "1 Corinthiens 12:27",
    /* ACTIVITÉS */
    act_ey:           "Vie d'église",
    act_title:        "Nos activités",
    act_culte_t:      "Culte du dimanche",
    act_culte_p:      "Chaque dimanche à 15h, un temps de louange, de prière et de prédication de la Parole.",
    act_sekoly_t:     "Sekoly Alahady",
    act_sekoly_p:     "École du dimanche pour les enfants, enseignement biblique adapté à chaque âge.",
    act_jeunes_t:     "Groupe de jeunes",
    act_jeunes_p:     "Espace dédié aux jeunes adultes : études bibliques, activités, fraternité.",
    act_chorale_t:    "Chorale",
    act_chorale_p:    "La louange au cœur de notre culte. Répétitions hebdomadaires ouvertes à tous.",
    act_priere_t:     "Fifohazana",
    act_priere_p:     "Réunion de prière — intercession et réveil spirituel selon la tradition malgache.",
    act_cene_t:       "Sainte Cène",
    act_cene_p:       "Célébration du premier dimanche du mois, mémorial de l'amour du Christ.",
    /* PRÉDICATIONS */
    pred_ey:          "Ressources",
    pred_title:       "Prédications récentes",
    pred_sub:         "Réécoutez les messages et nourrissez-vous de la Parole même à distance.",
    pred_listen:      "Écouter",
    pred_more:        "Voir toutes les prédications",
    /* AGENDA */
    agenda_ey:        "Calendrier",
    agenda_title:     "Prochains événements",
    agenda_sub:       "Rejoignez-nous lors de nos temps forts !",
    /* ÉQUIPE */
    team_ey:          "Notre famille",
    team_title:       "L'équipe pastorale",
    team_sub:         "Des hommes et des femmes engagés à votre service.",
    /* ACCÈS */
    acces_ey:         "Venir nous voir",
    acces_title:      "Comment nous trouver",
    acces_addr_t:     "Adresse",
    acces_addr_p:     "73 Avenue Marc Desbats, 33600 Pessac — dans les locaux de l'Église Évangélique Libre.",
    acces_tram_t:     "Tramway",
    acces_tram_p:     "Ligne B — Arrêt « Doyen Brus »",
    acces_bus_t:      "Bus",
    acces_bus_p:      "Bus 44 & 87 arrêt « Desbats » · Bus 34 arrêt « Ausone » · Bus 35 arrêt « Collège G. Philipe »",
    acces_car_t:      "En voiture",
    acces_car_p:      "Rocade sortie 16, direction Université de Bordeaux.",
    /* DON */
    don_ey:           "Soutien",
    don_title:        "Soutenir l'Église",
    don_sub:          "Votre don permet à l'Église de grandir, de servir et d'annoncer l'Évangile. Merci pour votre générosité !",
    don_iban_title:   "Virement bancaire",
    /* CONTACT */
    contact_ey:       "Contact",
    contact_title:    "Nous contacter",
    contact_sub:      "Une question ? Envie de nous rejoindre ? Nous serons heureux de vous répondre.",
    contact_name:     "Votre nom",
    contact_email:    "Votre e-mail",
    contact_msg:      "Votre message",
    contact_send:     "Envoyer le message",
    /* FOOTER */
    footer_desc:      "Nouvelle Église Protestante de Madagascar · Bordeaux-Pessac depuis 2002.",
    footer_nav:       "Navigation",
    footer_contact:   "Contact",
  },
  mg: {
    nav_accueil:      "Fandraisana",
    nav_apropos:      "Momba anay",
    nav_activites:    "Hetsika",
    nav_predications: "Toriteny",
    nav_agenda:       "Fandaharana",
    nav_contact:      "Fifandraisan-tena",
    nav_don:          "♥ Fanampiana",
    hero_verse:       "« Fa na aiza no iangonana amin'ny anarako ny roa na telo dia eo afovoan'izy ireo Aho. » — Matio 18:20",
    hero_title1:      "Tonga soa ao amin'ny",
    hero_title2:      "Fiangonana FPVM",
    hero_title3:      "Bordeaux",
    hero_sub:         "Fiaraha-monina Malagasy velona ao an-tokan'ny Bordeaux-Pessac, mitambatra amin'ny finoana, fiderana ary fanompoana.",
    hero_btn1:        "Hanatrika Alahady",
    hero_btn2:        "Henoy ny toriteny",
    hero_loc:         "73 av. Marc Desbats, Pessac",
    hero_when:        "Alahady tsirairay — 15:00",
    hero_tel:         "fpvmbordeaux@gmail.com",
    band_where:       "Toerana",
    band_when:        "Fanompoam-pivavahana",
    band_time:        "15h isan'Alahady",
    band_contact:     "Mifandraisa aminay",
    about_ey:         "Momba anay",
    about_title:      "Fianakaviana ao amin'i Kristy",
    about_p1:         "Ny FPVM (Fiangonana Protestanta Vaovao eto Madagasikara) dia norenesina tamin'ny 2002 tany Antananarivo teo ambany fitarihana ny Pasteur Jean Joseph Randrianantoandro.",
    about_p2:         "Ao Bordeaux-Pessac, manangona rahalahy sy anabavy Malagasy sy frantsay izahay, mpianatra, fianakaviana ary mpitady an'Andriamanitra. Mino ny herin'ny Tenin'Andriamanitra, ny fiderana ary ny fiombonana izahay.",
    about_verse:      "« Ianareo no vatana'i Kristy, ary samy momba ny andraikiny avy ianareo. »",
    about_ref:        "1 Korintiana 12:27",
    act_ey:           "Fiainan'ny fiangonana",
    act_title:        "Ny hetsika",
    act_culte_t:      "Fanompoam-pivavahana",
    act_culte_p:      "Isan'Alahady 15:00 — fiderana, vavaka ary toriteny.",
    act_sekoly_t:     "Sekoly Alahady",
    act_sekoly_p:     "Fampianarana ara-baiboly ho an'ny ankizy, mifanaraka amin'ny taona.",
    act_jeunes_t:     "Vondrona Tanora",
    act_jeunes_p:     "Toerana ho an'ny tanora: fanadihadiana baiboly, hetsika, fiaraha-miaina.",
    act_chorale_t:    "Ihira",
    act_chorale_p:    "Ny fiderana ao an-tokan'ny fanompoam-pivavahana. Fihaonan'ny ihira misokatra ho an'ny rehetra.",
    act_priere_t:     "Fifohazana",
    act_priere_p:     "Fivavahana — fangatahana sy famelomana ara-panahy araka ny fomba Malagasy.",
    act_cene_t:       "Fanasan'ny Tompo",
    act_cene_p:       "Fanamasinana ny Alahady voalohany amin'ny volana.",
    pred_ey:          "Loharanon-kery",
    pred_title:       "Toriteny farany",
    pred_sub:         "Henoy indray ny hafatra ary mivelona amin'ny Tenin'Andriamanitra.",
    pred_listen:      "Henoy",
    pred_more:        "Jereo ny toriteny rehetra",
    agenda_ey:        "Fandaharana",
    agenda_title:     "Hetsika ho avy",
    agenda_sub:       "Miara-anao aminay amin'ireo vaninandro lehibe ireo!",
    team_ey:          "Ny fianakaviana",
    team_title:       "Ny ekipa pastoral",
    team_sub:         "Lehilahy sy vehivavy natokan-tena ho an'ny fanompoana.",
    acces_ey:         "Hahatonga anao",
    acces_title:      "Ahoana no hahita anay",
    acces_addr_t:     "Adiresy",
    acces_addr_p:     "73 Avenue Marc Desbats, 33600 Pessac",
    acces_tram_t:     "Tramway",
    acces_tram_p:     "Ligne B — Doyen Brus",
    acces_bus_t:      "Bus",
    acces_bus_p:      "Bus 44 & 87 · Bus 34 · Bus 35",
    acces_car_t:      "Fiara",
    acces_car_p:      "Rocade sortie 16, direction Université de Bordeaux.",
    don_ey:           "Fanampiana",
    don_title:        "Tohano ny Fiangonana",
    don_sub:          "Ny fanomezanao dia manampy ny fiangonana hitombo sy hanompo ary hitory ny Filazantsara.",
    don_iban_title:   "Fifindrana vola",
    contact_ey:       "Fifandraisan-tena",
    contact_title:    "Mifandraisa aminay",
    contact_sub:      "Manana fanontaniana? Te ho anisan'ny fianakaviana? Arahabaina ianao!",
    contact_name:     "Ny anaranao",
    contact_email:    "Ny mailao",
    contact_msg:      "Ny hafatrao",
    contact_send:     "Alefa ny hafatra",
    footer_desc:      "Fiangonana Protestanta Vaovao eto Madagasikara · Bordeaux-Pessac 2002.",
    footer_nav:       "Rohy",
    footer_contact:   "Fifandraisan-tena",
  },
  en: {
    nav_accueil:      "Home",
    nav_apropos:      "About",
    nav_activites:    "Activities",
    nav_predications: "Sermons",
    nav_agenda:       "Events",
    nav_contact:      "Contact",
    nav_don:          "♥ Give",
    hero_verse:       "\"For where two or three gather in my name, there am I with them.\" — Matthew 18:20",
    hero_title1:      "Welcome to",
    hero_title2:      "FPVM Church",
    hero_title3:      "Bordeaux",
    hero_sub:         "A vibrant Malagasy community at the heart of Bordeaux-Pessac, united in faith, praise and service.",
    hero_btn1:        "Join us this Sunday",
    hero_btn2:        "Listen to a sermon",
    hero_loc:         "73 av. Marc Desbats, Pessac",
    hero_when:        "Sundays at 3:00 PM",
    hero_tel:         "fpvmbordeaux@gmail.com",
    band_where:       "Find us",
    band_when:        "Sunday Service",
    band_time:        "3 PM every Sunday",
    band_contact:     "Get in touch",
    about_ey:         "Who we are",
    about_title:      "A family in Christ",
    about_p1:         "FPVM (Fiangonana Protestanta Vaovao eto Madagasikara) — New Protestant Church of Madagascar — was founded in 2002 in Antananarivo by Pastor Jean Joseph Randrianantoandro.",
    about_p2:         "Based in Bordeaux-Pessac, our community gathers Malagasy and French-speaking brothers and sisters, students, families and seekers of God. We believe in the power of the Word, praise and fellowship.",
    about_verse:      "\"Now you are the body of Christ, and each one of you is a part of it.\"",
    about_ref:        "1 Corinthians 12:27",
    act_ey:           "Church life",
    act_title:        "Our activities",
    act_culte_t:      "Sunday service",
    act_culte_p:      "Every Sunday at 3 PM — worship, prayer and preaching of the Word.",
    act_sekoly_t:     "Sunday school",
    act_sekoly_p:     "Biblical teaching for children, adapted to each age group.",
    act_jeunes_t:     "Youth group",
    act_jeunes_p:     "Dedicated space for young adults: Bible studies, activities, fellowship.",
    act_chorale_t:    "Choir",
    act_chorale_p:    "Praise at the heart of our worship. Weekly rehearsals open to all.",
    act_priere_t:     "Fifohazana",
    act_priere_p:     "Prayer meeting — intercession and spiritual revival following the Malagasy tradition.",
    act_cene_t:       "Communion",
    act_cene_p:       "Celebrated on the first Sunday of each month, a memorial of Christ's love.",
    pred_ey:          "Resources",
    pred_title:       "Recent sermons",
    pred_sub:         "Replay our messages and feed on the Word, wherever you are.",
    pred_listen:      "Listen",
    pred_more:        "View all sermons",
    agenda_ey:        "Calendar",
    agenda_title:     "Upcoming events",
    agenda_sub:       "Join us for our special moments!",
    team_ey:          "Our family",
    team_title:       "Pastoral team",
    team_sub:         "Men and women committed to serving you.",
    acces_ey:         "Visit us",
    acces_title:      "How to find us",
    acces_addr_t:     "Address",
    acces_addr_p:     "73 Avenue Marc Desbats, 33600 Pessac — at the Église Évangélique Libre.",
    acces_tram_t:     "Tram",
    acces_tram_p:     "Line B — Stop: Doyen Brus",
    acces_bus_t:      "Bus",
    acces_bus_p:      "Bus 44 & 87 stop Desbats · Bus 34 stop Ausone · Bus 35 stop Collège G. Philipe",
    acces_car_t:      "By car",
    acces_car_p:      "Ring road exit 16, direction Université de Bordeaux.",
    don_ey:           "Support",
    don_title:        "Support the Church",
    don_sub:          "Your gift helps the church grow, serve and proclaim the Gospel. Thank you for your generosity!",
    don_iban_title:   "Bank transfer",
    contact_ey:       "Contact",
    contact_title:    "Get in touch",
    contact_sub:      "Any question? Want to join us? We would love to hear from you.",
    contact_name:     "Your name",
    contact_email:    "Your email",
    contact_msg:      "Your message",
    contact_send:     "Send message",
    footer_desc:      "New Protestant Church of Madagascar · Bordeaux-Pessac since 2002.",
    footer_nav:       "Navigation",
    footer_contact:   "Contact",
  }
};

/* ——— LANGUAGE ENGINE ——— */
let currentLang = localStorage.getItem('fpvm-lang') || 'fr';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('fpvm-lang', lang);
  const dict = T[lang];
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-t-ph]').forEach(el => {
    const key = el.getAttribute('data-t-ph');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

/* ——— NAV SCROLL ——— */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ——— HAMBURGER ——— */
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (links) links.classList.toggle('open');
}

/* ——— ACTIVE NAV ——— */
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  let found = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) found = s.id;
  });
  links.forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === '#' + found || (found === '' && href === '#hero'));
  });
}
window.addEventListener('scroll', updateActiveNav);

/* ——— SMOOTH SCROLL ——— */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const target = document.querySelector(a.getAttribute('href'));
  if (!target) return;
  e.preventDefault();
  const links = document.querySelector('.nav-links');
  if (links) links.classList.remove('open');
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* ——— PREDICATION PLAYER (simple) ——— */
function playSermon(btn) {
  const item = btn.closest('.predication-item');
  const title = item.querySelector('h4').textContent;
  const existing = document.getElementById('audio-player-bar');
  if (existing) existing.remove();

  const bar = document.createElement('div');
  bar.id = 'audio-player-bar';
  bar.style.cssText = `
    position:fixed; bottom:0; left:0; right:0; z-index:9999;
    background:var(--violet); color:white; padding:0.85rem 1.5rem;
    display:flex; align-items:center; gap:1rem; box-shadow:0 -4px 24px rgba(0,0,0,0.25);
    font-family:'DM Sans',sans-serif; font-size:0.88rem;
  `;
  bar.innerHTML = `
    <span style="flex:1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
      ▶ <strong style="color:var(--or-l)">${title}</strong>
    </span>
    <span style="opacity:.65; font-size:0.78rem">Lien audio à renseigner dans le fichier HTML</span>
    <button onclick="this.parentNode.remove()" style="
      background:rgba(255,255,255,.15); border:none; color:white;
      border-radius:50%; width:28px; height:28px; cursor:pointer; font-size:1rem;
    ">×</button>
  `;
  document.body.appendChild(bar);
}

/* ——— DON CARD SELECT ——— */
function selectDon(card) {
  document.querySelectorAll('.don-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
}

/* ——— CONTACT FORM ——— */
function submitContact(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  const original = btn.textContent;
  btn.textContent = '✓ Message envoyé !';
  btn.style.background = 'var(--vert)';
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

/* ——— INIT ——— */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  const hamburger = document.querySelector('.nav-hamburger');
  if (hamburger) hamburger.addEventListener('click', toggleMenu);

  const form = document.querySelector('.contact-form');
  if (form) form.addEventListener('submit', submitContact);
});
