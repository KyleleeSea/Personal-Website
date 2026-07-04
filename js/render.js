// ============================================================================
// Rendering logic. You shouldn't need to touch this file to edit content —
// content lives in data/*.js. Edit here only to change page structure.
// ============================================================================

// --- Shared header/footer ---------------------------------------------------

function renderHeader() {
  const current = location.pathname.split("/").pop() || "index.html";
  const links = SITE.nav
    .map(
      (item) =>
        `<a href="${item.href}" class="${item.href === current ? "active" : ""}">${item.label}</a>`
    )
    .join("");

  document.querySelector("header.site-header").innerHTML = `
    <nav class="site-nav">${links}</nav>
  `;
}

function renderFooter() {
  document.querySelector("footer.site-footer").innerHTML = SITE.footer;
}

// --- Small helpers ----------------------------------------------------------

function entryHTML(e) {
  return `
    <div class="entry">
      <div class="entry-header">
        <span><span class="entry-title">${e.title}</span>
          <span class="entry-org">· ${e.org}</span></span>
        <span class="entry-date">${e.date}</span>
      </div>
      <p class="entry-details small">${e.details}</p>
    </div>
  `;
}

// --- Page renderers ---------------------------------------------------------

function renderAbout() {
  const el = document.getElementById("about-content");
  if (!el) return;

  const intro = ABOUT.intro.map((p) => `<p>${p}</p>`).join("");

  const photo =
    ABOUT.photo && ABOUT.photo.src
      ? `<figure class="about-photo">
           <img src="${ABOUT.photo.src}" alt="${ABOUT.photo.alt || ""}">
           ${ABOUT.photo.caption ? `<figcaption>${ABOUT.photo.caption}</figcaption>` : ""}
         </figure>`
      : "";

  const links = SITE.links
    .map((l) => `<a href="${l.href}">${l.label}</a>`)
    .join(`<span class="sep">·</span>`);

  const education = ABOUT.education.map(entryHTML).join("");
  const experience = ABOUT.experience.map(entryHTML).join("");

  const skills = ABOUT.skills
    .map(
      (s) =>
        `<li class="small"><strong>${s.label}:</strong> <span class="muted">${s.items}</span></li>`
    )
    .join("");

  el.innerHTML = `
    <h1>${SITE.name}</h1>
    <div class="about-intro">
      ${photo}
      <div class="about-intro-text">
        ${intro}
        <div class="contact-links">${links}</div>
      </div>
    </div>
    <h2>Education</h2>
    ${education}
    <h2>Experience</h2>
    ${experience}
    <h2>Skills</h2>
    <ul>${skills}</ul>
  `;
}

// Turn "Fall 2024" into a sortable number so semesters order chronologically.
function semesterRank(semester) {
  const seasons = { spring: 0, summer: 1, fall: 2 };
  const [season, year] = String(semester).toLowerCase().split(/\s+/);
  return (parseInt(year, 10) || 0) * 10 + (seasons[season] ?? 0);
}

// Resolve a course rating to its COURSE_RATINGS entry. Accepts either the key
// ("star" / "heart") or the label ("Top favorite" / "Really enjoyed"),
// case-insensitively, so the data can use whichever is more natural.
function resolveRating(value) {
  if (!value) return null;
  const v = String(value).trim().toLowerCase();
  for (const [key, r] of Object.entries(COURSE_RATINGS)) {
    if (key.toLowerCase() === v || r.label.toLowerCase() === v) return r;
  }
  return null;
}

// Render the ★ / ♥ badge for a rating (returns "" when none/unrecognized).
function ratingBadge(value) {
  const r = resolveRating(value);
  if (!r) return "";
  return `<span class="course-rating" title="${r.label}">${r.symbol}</span>`;
}

function renderCourses() {
  const el = document.getElementById("courses-content");
  if (!el) return;

  // --- Category index (top of page) ---------------------------------------
  const categoriesSeen = [];
  const byCategory = {};
  COURSES.forEach((c) => {
    const cat = c.category || "Other";
    if (!byCategory[cat]) {
      byCategory[cat] = [];
      categoriesSeen.push(cat);
    }
    byCategory[cat].push(c);
  });

  const orderedCategories = [
    ...CATEGORY_ORDER.filter((c) => byCategory[c]),
    ...categoriesSeen.filter((c) => !CATEGORY_ORDER.includes(c)),
  ];

  const categoryIndex = orderedCategories
    .map((cat) => {
      const codes = byCategory[cat]
        .map((c) => `<a href="#${c.code}">${c.code}</a>`)
        .join("");
      return `
        <div class="category">
          <div class="category-name">${cat}</div>
          <div class="category-codes">${codes}</div>
        </div>
      `;
    })
    .join("");

  // --- Reviews grouped by semester (most recent first) --------------------
  const semestersSeen = [];
  const bySemester = {};
  COURSES.forEach((c) => {
    const term = c.semester || "Other";
    if (!bySemester[term]) {
      bySemester[term] = [];
      semestersSeen.push(term);
    }
    bySemester[term].push(c);
  });

  const orderedSemesters = semestersSeen.sort(
    (a, b) => semesterRank(b) - semesterRank(a)
  );

  const reviews = orderedSemesters
    .map((term) => {
      const courses = bySemester[term]
        .map(
          (c) => `
          <div class="course" id="${c.code}">
            <div class="course-header">
              <span class="course-title">
                ${ratingBadge(c.rating)}
                <span class="course-code">${c.code}</span>
                <span class="course-name">${c.name}</span>
              </span>
              ${c.instructor ? `<span class="course-instructor">${c.instructor}</span>` : ""}
            </div>
            <p class="course-review">${c.review}</p>
          </div>
        `
        )
        .join("");
      return `
        <section class="semester">
          <h2 class="semester-heading">${term}</h2>
          ${courses}
        </section>
      `;
    })
    .join("");

  // --- Legend --------------------------------------------------------------
  const legend = Object.values(COURSE_RATINGS)
    .map((r) => `<span class="course-rating">${r.symbol}</span> ${r.label}`)
    .join('<span class="sep">·</span>');

  el.innerHTML = `
    <h1>CMU Course Reviews</h1>
    <p class="muted">Some reflections on classes I've taken at CMU! My path was
    a bit untraditional because I started as a business major and transferred
    into computer science at the beginning of my sophomore year. Inspired by
    <a href="https://fanpu.io/courses/">this page</a> by Fan Pu Zeng.</p>
    <p class="small muted legend">${legend}</p>
    <div class="category-index">${categoryIndex}</div>
    ${reviews}
  `;
}

function renderProjects() {
  const el = document.getElementById("projects-content");
  if (!el) return;

  const projects = PROJECTS.map((p) => {
    const links = (p.links || [])
      .map((l) => `<a href="${l.href}">${l.label}</a>`)
      .join("");

    return `
      <div class="project">
        <div class="project-header">
          <span class="project-name">${p.name}</span>
          ${p.date ? `<span class="entry-date">${p.date}</span>` : ""}
        </div>
        ${p.tech ? `<div class="project-tech">${p.tech}</div>` : ""}
        <p class="project-description">${p.description}</p>
        ${links ? `<div class="project-links">${links}</div>` : ""}
      </div>
    `;
  }).join("");

  el.innerHTML = `
    <h1>Projects</h1>
    ${projects}
  `;
}

// Make every external link open in a new tab. Runs once after all content is
// rendered, so links added in the data/*.js files are handled automatically.
// Skips the top nav and in-page "#" anchors (e.g. the course index jump links),
// which should stay in the current tab.
function openExternalLinksInNewTab() {
  const internalPages = new Set(SITE.nav.map((n) => n.href));

  document.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;
    if (href.startsWith("#")) return; // same-page anchor
    if (href.startsWith("mailto:")) return; // opens mail client, not a tab
    if (internalPages.has(href)) return; // site navigation

    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });
}

// --- Boot -------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderAbout();
  renderCourses();
  renderProjects();
  openExternalLinksInNewTab();
});
