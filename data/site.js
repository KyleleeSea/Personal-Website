// ============================================================================
// Site-wide configuration: name, nav tabs, contact links, footer.
// To add a new page: create the HTML file (copy an existing one), then add
// an entry to `nav` below.
// ============================================================================

const SITE = {
  name: "Kyle Lee",

  nav: [
    { label: "About", href: "index.html" },
    { label: "CMU Course Reviews", href: "courses.html" },
    { label: "Projects", href: "projects.html" },
  ],

  // Shown under the intro on the About page.
  links: [
    { label: "Email", href: "mailto:kylel@alumni.cmu.edu" },
    { label: "GitHub", href: "https://github.com/KyleleeSea" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kyle-lee-8712a6222" },
    { label: "Resume", href: "#" }, // drop a resume.pdf in the repo root and point this at "resume.pdf"
  ],

  footer: "© 2026 Kyle Lee",
};
