// ============================================================================
// Projects. To add a project, copy one of the objects below.
// Fields:
//   name        — project title
//   date        — e.g. "Dec 2025" (optional, "" to hide)
//   tech        — comma-separated stack shown under the title ("" to hide)
//   description — one short paragraph; plain HTML allowed
//   links       — array of { label, href } shown as small links under the
//                 description, e.g. Paper, Code, Demo. Omit or use [] for none.
// Projects are displayed in the order they appear here.
//
// NOTE: the Paper/Code links below are dummy placeholders (href "#") — point
// them at your real repos and write-ups.
// ============================================================================

const PROJECTS = [
  {
    name: "Generative Diffusion Models for fMRI Image Reconstruction",
    date: "Apr 2026",
    tech: "PyTorch",
    description: `Led team architecting Generative AI Latent Diffusion to reconstruct images from human fMRI brain scans.
    Pretrained and evaluated 150k image to fMRI pairs and conducted ablation studies in parallel with AWS.`,
    links: [
      { label: "Paper", href: "https://github.com/KyleleeSea/monkey-see-monkey-diffuse/blob/main/Generative_AI_Final_Report.pdf" },
      { label: "Code", href: "https://github.com/KyleleeSea/monkey-see-monkey-diffuse" },
    ],
  },
  {
    name: "Feynman: Knowledge-Infused Diagramming Agent for Visual Designs",
    date: "Mar 2026",
    tech: "",
    description: `Built diagram generation agent pipeline and a visual-language benchmark with 100k
    well-aligned diagram-caption pairs. Submitted to ICLR.`,
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2603.12597" },
    ],
  },
  {
    name: "Multi-node Parallel Monte Carlo Option Pricing",
    date: "Dec 2025",
    tech: "CUDA, MPI, C++, Thrust, cuRAND",
    description: `Parallelized Adaptive Multilevel Monte Carlo with Milstein
      discretization for option pricing. Achieved a 178x speedup on an RTX 2080
      and 5,430x on four Tesla V100s through thread-block memory tuning, CUDA
      Thrust, and cuRAND optimization.`,
    links: [
      { label: "Paper", href: "https://kyleleesea.github.io/CUDA-AdaptiveMultiLevelMonteCarlo/" },
      { label: "Code", href: "https://github.com/KyleleeSea/CUDA-AdaptiveMultiLevelMonteCarlo/tree/master" },
    ],
  },
  {
    name: "C Compiler",
    date: "Dec 2023",
    tech: "Rust, x86-64",
    description: `A compiler from C to x86-64 assembly, written from scratch in
      Rust: lexing, parsing, ASTs, and code generation with support for
      functions, loops, conditionals, variables, and operators.`,
    links: [
      { label: "Code", href: "https://github.com/KyleleeSea/ccir" },
    ],
  },
  {
    name: "Slash n Bash",
    date: "Nov 2022",
    tech: "Python, OpenCV",
    description: `Computer-vision street-fighter type game that won 1st place out of
      200 competitors at CMU's Hack112`,
    links: [
      { label: "Code", href: "https://github.com/KyleleeSea/slashnbash" },
    ],
  },
];
