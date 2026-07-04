// ============================================================================
// About page content. Edit the strings below — plain HTML is allowed inside
// `intro` paragraphs (e.g. <a href="...">links</a>).
// ============================================================================

const ABOUT = {
  // Photo shown at the top of the About page. Set to "" to hide it.
  photo: {
    src: "assets/kyle.jpg",
    alt: "Kyle Lee",
    caption: "Figure 1. Me doing one of the only breaking moves I know (2026)", // optional line under the photo, e.g. "Pittsburgh, 2025"
  },

  // Each string is one paragraph.
  intro: [
    `Hi! I'm Kyle, I'm a software engineer at <a href="https://www.databricks.com/">Databricks</a> where I work on 
    distributed systems for the Databricks Notebooks. I graduated from <a href="https://www.cmu.edu">Carnegie Mellon University</a>'s 
    School of Computer Science class of 2026.`,

    `My passion is designing performant systems that operate reliably at 
    scale with resilience to anomalous events. Prior to my work at Databricks I 
    interned at <a href="https://stripe.com/">Stripe</a> where I designed an AWS EBS autoscaling framework and 
    developed tooling to automate EC2 capacity requests.`,

    `Outside of work I enjoy reading, gym, and guitar. 
    In college I was part of CMU Street Styles where I choreographed performance 
    pieces for the crew and competed in a few dance battles. Fun fact, my 
    favorite book is East of Eden by John Steinbeck. `,

    `Feel free to reach out! My email is kylel@alumni[dot]cmu[dot]edu.`
  ],

  education: [
    {
      title: "B.S. Computer Science",
      org: "Carnegie Mellon University",
      date: "2022 – 2026",
      details:
        "Concentration in Computer Systems. SCS GPA: 4.0/4.0.",
    },
  ],

  experience: [
    {
      title: "Software Engineer",
      org: "Databricks",
      date: "Present",
      details:
      "Distributed systems for the Databricks Notebook"
    },
    {
      title: "Software Engineer Intern",
      org: "Stripe",
      date: "Summer 2025",
      details:
        "Automated database vertical scaling for first-of-month subscription renewals, reducing operational toil by 75%. Built a Go primitive for reliably scheduling scaling operations and tooling that cut manual EC2 capacity requests from 2,000+ to 1.",
    },
    {
      title: "Software Engineer Intern",
      org: "Penrose (CMU)",
      date: "Summer 2024",
      details:
        "Cut storage costs 12x by architecting a cloud storage system on Firebase. Built a mobile-first React code editor with context-sensitive autocomplete, linting, and syntax highlighting, backed by 130+ unit tests.",
    },
    {
      title: "Founder",
      org: "Conclusive Edge",
      date: "2020 – 2024",
      details:
        "Coached 300+ students nationwide in communication and logic for competitive speech & debate. Hosted a podcast on effective communication (5 stars on Apple Podcasts).",
    },
    {
      title: "Software Research Assistant",
      org: "Carnegie Mellon University",
      date: "2022 – 2023",
      details:
        "NLP research in R on how discussion of inflation in earnings calls affects abnormal stock returns: topic models, fixed-effects OLS regression, and data cleaning.",
    },
  ],

  // Rendered as a compact list at the bottom of the About page.
  skills: [
    { label: "Languages", items: "C++, Rust, Go, Python, C, Java, SQL, TypeScript/JavaScript" },
    { label: "Technologies", items: "AWS, GCP, Kubernetes, Docker, CUDA, OpenMP, MPI, Spark, React, Node.js" },
  ],
};
