/* ============ Icon helpers ============ */
const icon = (paths) =>
  `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

const ICONS = {
  attractions: icon(
    '<path d="m12 2 2.4 6.9L21 9l-5.3 4.6L17.5 21 12 17l-5.5 4 1.8-7.4L3 9l6.6-.1z"/>'
  ),
  museums: icon(
    '<path d="M3 21h18M4 10h16M5 21V10m14 11V10M4 10l8-6 8 6M9 21v-6h6v6"/>'
  ),
  restaurants: icon(
    '<path d="M4 3v7a2 2 0 0 0 4 0V3M6 10v11M15 3c-1.5 1-2 3-2 5s.5 3 2 3h1v10"/>'
  ),
  cafes: icon(
    '<path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM17 9h2a2 2 0 0 1 0 4h-2M4 21h13"/>'
  ),
  parks: icon(
    '<path d="M12 22v-6m0 0 4-4m-4 4-4-4m4-8a4 4 0 0 1 4 4c0 1-.3 1.7-.8 2.4A4 4 0 0 1 12 16a4 4 0 0 1-3.2-5.6A4 4 0 0 1 12 4z"/>'
  ),
  entertainment: icon(
    '<rect x="2" y="4" width="20" height="14" rx="2"/><path d="M10 9l5 3-5 3z"/>'
  ),
  events: icon(
    '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'
  ),
  tours: icon(
    '<circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8z"/>'
  ),
  hotels: icon(
    '<path d="M3 21V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14M3 13h18M7 9h.01"/>'
  ),
  car: icon(
    '<path d="M5 17h14l-1.5-5.5A2 2 0 0 0 15.6 10H8.4a2 2 0 0 0-1.9 1.5L5 17z"/><path d="M5 17v2m14-2v2M7 17a2 2 0 1 1-4 0m18 0a2 2 0 1 1-4 0"/>'
  ),
  guides: icon(
    '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
  ),
  shopping: icon(
    '<path d="M6 2 3 6v13a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>'
  ),
  heart:
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
};

/* ============ Data ============ */
const categories = [
  ["ატრაქციონები", "ღირსშესანიშნაობები და ხედები", "attractions"],
  ["მუზეუმები", "ხელოვნება და ისტორია", "museums"],
  ["რესტორნები", "ქართული და მსოფლიო სამზარეულო", "restaurants"],
  ["კაფეები", "ყავა და საცხობები", "cafes"],
  ["პარკები", "მწვანე სივრცეები", "parks"],
  ["გართობა", "ღამის ცხოვრება და დასვენება", "entertainment"],
  ["ღონისძიებები", "რა ხდება ახლა", "events"],
  ["ტურები", "გიდიანი ტურები", "tours"],
  ["სასტუმროები", "დასარჩენი ადგილები", "hotels"],
  ["შოპინგი", "ბაზრები და მოლები", "shopping"],
];

const places = [
  {
    img: "place-restaurant.png",
    cat: "რესტორანი",
    rating: "4.8",
    name: "Rooms Garden Kitchen",
    price: "₾60",
    unit: "ერთ ადამიანზე",
    desc: "მყუდრო ქართული რესტორანი მწვანე ეზოთი და ლეგენდარული ხინკალით.",
  },
  {
    img: "place-museum.png",
    cat: "მუზეუმი",
    rating: "4.9",
    name: "National Art Gallery",
    price: "₾15",
    unit: "შესვლა",
    desc: "შთამბეჭდავი კოლექცია კლასიკური და თანამედროვე ქართული ხელოვნებით.",
  },
  {
    img: "place-park.png",
    cat: "ხედის წერტილი",
    rating: "5.0",
    name: "ნარიყალას მზის ჩასვლის ადგილი",
    price: "უფასო",
    unit: "ყოველთვის ღია",
    desc: "ძველი ქალაქისა და მდინარის საუკეთესო პანორამული ხედი ოქროს საათზე.",
  },
];

const booking = [
  ["რესტორნის მაგიდები", "restaurants"],
  ["მუზეუმის ბილეთები", "museums"],
  ["ტურები", "tours"],
  ["გიდები", "guides"],
  ["მანქანის გაქირავება", "car"],
];

const reviews = [
  {
    avatar: "avatar-1.png",
    name: "ნინო კ.",
    role: "ადგილობრივი",
    stars: 5,
    text: "ბოლოს და ბოლოს ერთი აპლიკაცია, სადაც ყველაფერი არის. შაბათ-კვირა რამდენიმე წუთში დავგეგმე.",
    photos: ["place-restaurant.png", "place-park.png", "place-museum.png"],
  },
  {
    avatar: "avatar-2.png",
    name: "დავით მ.",
    role: "მოგზაური",
    stars: 5,
    text: "AI-მ იდეალური ერთდღიანი ტური გამიკეთა. ყველაფერი ზუსტად იყო დაგეგმილი და საჭმელიც საოცარი.",
    photos: ["event-market.png", "place-restaurant.png"],
  },
  {
    avatar: "avatar-3.png",
    name: "ლუკა თ.",
    role: "მკვლევარი",
    stars: 4,
    text: "მუზეუმი და მანქანა ერთ სესიაში დავჯავშნე. ეკო ქულებიც მივიღე მეტროთი სარგებლობისთვის.",
    photos: ["event-exhibition.png", "place-museum.png", "event-concert.png"],
  },
];

const events = [
  {
    img: "event-concert.png",
    date: "პარ · 20:00",
    name: "მდინარის ზაფხულის კონცერტი",
    tag: "კონცერტი",
    desc: "ღია ცის ქვეშ მუსიკა მტკვრის პირას.",
  },
  {
    img: "event-market.png",
    date: "შაბ · 10:00",
    name: "დეზერტირების ბაზარი",
    tag: "ბაზარი",
    desc: "ხელნაკეთი ნივთები, ყვავილები და ქუჩის საჭმელი.",
  },
  {
    img: "event-exhibition.png",
    date: "კვი · 12:00",
    name: "თანამედროვე ხელოვნების გამოფენა",
    tag: "გამოფენა",
    desc: "ახალი ქართველი მხატვრების ნამუშევრები.",
  },
  {
    img: "event-concert.png",
    date: "ოთხ · 19:30",
    name: "თბილისის ჯაზ ფესტივალი",
    tag: "ფესტივალი",
    desc: "სამი სცენა, ერთი დაუვიწყარი საღამო.",
  },
  {
    img: "event-exhibition.png",
    date: "ხუთ · 18:00",
    name: "მარჯანიშვილის თეატრი",
    tag: "თეატრი",
    desc: "თანამედროვე ინტერპრეტაცია ქართული კლასიკის.",
  },
];

const starRow = (n) => "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n);

/* ============ Render ============ */
function render() {
  document.getElementById("catGrid").innerHTML = categories
    .map(
      ([name, sub, key]) => `
      <button class="cat-card reveal">
        <span class="cat-card__icon">${ICONS[key]}</span>
        <div><h3>${name}</h3><p>${sub}</p></div>
      </button>`
    )
    .join("");

  document.getElementById("discoverGrid").innerHTML = places
    .map(
      (p) => `
      <article class="place-card reveal">
        <div class="place-card__media">
          <span class="place-card__cat">${p.cat}</span>
          <button class="place-card__save" aria-label="შენახვა ${p.name}">${ICONS.heart}</button>
          <img src="images/${p.img}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="place-card__body">
          <div class="place-card__top">
            <h3>${p.name}</h3>
            <span class="rating"><span class="star">★</span>${p.rating}</span>
          </div>
          <p class="place-card__desc">${p.desc}</p>
          <div class="place-card__foot">
            <span class="price">${p.price} <small>/ ${p.unit}</small></span>
            <a href="#cta" class="btn btn--primary">აღმოაჩინე</a>
          </div>
        </div>
      </article>`
    )
    .join("");

  document.getElementById("bookingGrid").innerHTML = booking
    .map(
      ([name, key]) => `
      <div class="booking-card reveal">
        <span class="booking-card__icon">${ICONS[key]}</span>
        <h3>${name}</h3>
      </div>`
    )
    .join("");

  document.getElementById("reviewsGrid").innerHTML = reviews
    .map(
      (r) => `
      <article class="review-card reveal">
        <div class="review-card__head">
          <img src="images/${r.avatar}" alt="${r.name}" loading="lazy" />
          <div><strong>${r.name}</strong><span class="stars">${starRow(
        r.stars
      )}</span> <span class="muted" style="font-size:12px">· ${
        r.role
      }</span></div>
        </div>
        <p>${r.text}</p>
        <div class="review-photos">${r.photos
          .map(
            (ph) =>
              `<img src="images/${ph}" alt="${r.name}-ის ფოტო" loading="lazy" />`
          )
          .join("")}</div>
      </article>`
    )
    .join("");

  document.getElementById("eventsScroller").innerHTML = events
    .map(
      (e) => `
      <article class="event-card reveal">
        <div class="event-card__img"><img src="images/${e.img}" alt="${e.name}" loading="lazy" /></div>
        <div class="event-card__body">
          <span class="event-card__date">${e.date}</span>
          <h3>${e.name}</h3>
          <p>${e.desc}</p>
          <span class="event-tag">${e.tag}</span>
        </div>
      </article>`
    )
    .join("");
}

/* ============ Interactions ============ */
function initInteractions() {
  document.addEventListener("click", (e) => {
    const save = e.target.closest(".place-card__save");
    if (save) save.classList.toggle("saved");

    const chip = e.target.closest(".chip-toggle");
    if (chip) chip.classList.toggle("active");
  });

  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const toggle = document.getElementById("navToggle");
  const mobile = document.getElementById("navMobile");

  toggle.addEventListener("click", () => {
    const open = mobile.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  mobile.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobile.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  const form = document.getElementById("newsForm");
  const msg = document.getElementById("newsMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "მადლობა! თქვენ სიაში ხართ 🎉";
    form.reset();
  });

  document.getElementById("year").textContent = new Date().getFullYear();
}

/* ============ Reveal on scroll ============ */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach((el) => io.observe(el));
}

/* ============ Animated counters ============ */
function initCounters() {
  const nums = document.querySelectorAll(".stat__num");

  const run = (el) => {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || "";
    const dur = 1600;
    const start = performance.now();

    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  nums.forEach((n) => io.observe(n));
}

/* ============ AI chat reveal ============ */
function initChat() {
  const bubbles = document.querySelectorAll("#chatBody .bubble");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          bubbles.forEach((b, i) =>
            setTimeout(() => b.classList.add("show"), i * 700)
          );
          io.disconnect();
        }
      });
    },
    { threshold: 0.4 }
  );

  if (bubbles.length) io.observe(bubbles[0]);
}

/* ============ Boot ============ */
document.addEventListener("DOMContentLoaded", () => {
  render();
  initInteractions();
  initReveal();
  initCounters();
  initChat();
});
