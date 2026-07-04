// ============================================================================
// CMU course reviews.
//
// This is a single flat list — the page automatically builds the category
// index at the top and groups the reviews by semester (most recent first).
//
// To add a review, copy one object below. Fields:
//   code       — course number, e.g. "15-445" (also used as the link anchor)
//   name       — course title
//   instructor — who taught it (optional, "" to hide)
//   semester   — when you took it, e.g. "Fall 2024" — used for grouping.
//                Format must be "<Season> <Year>" (Season: Spring/Summer/Fall).
//   category   — grouping shown in the category index at the top of the page
//   rating     — "" for none, otherwise the key ("star" / "heart") or the
//                matching label ("Top favorite" / "Really enjoyed") from
//                COURSE_RATINGS below. Both forms work (case-insensitive).
//   review     — the review itself; plain HTML allowed (links, <em>, etc.)
//
// NOTE: The instructors, semesters, ratings, and reviews below are placeholder
// dummy data — edit them with your real experiences.
// ============================================================================

const COURSE_RATINGS = {
  star: { symbol: "★", label: "Top favorite" },
  heart: { symbol: "♥", label: "Really enjoyed" },
};

// Optional. Controls the order categories appear in the index. Any category
// not listed here is appended afterward in order of first appearance.
const CATEGORY_ORDER = [
  "Machine Learning",
  "Systems",
  "Theory & Algorithms",
  "Computer Science Misc",
  "Math, Science, Engineering",
  "General Education, Other"
];

const COURSES = [
  {
    code: "15-112",
    name: "Fundamentals of Programming",
    instructor: "Michael Taylor & Patrick Virtue",
    semester: "Fall 2022",
    category: "Computer Science Misc",
    rating: "",
    review: `Great introduction to programming at Carnegie Mellon, fast-paced and
    rewarding course. I think it's a valid ease-in to the workload at CMU before
    students take 15-122 if they don't have much prior computing experience. Made a 3D horror game featuring <a href="https://en.wikipedia.org/wiki/BonziBuddy">Bonzi Buddy</a>
    for the open-ended term project which was a lot of fun.
    Students of this class also have the opportunity to participate in a hackathon
    which I enjoyed a lot.`,
  },
  {
    code: "36-200",
    name: "Reasoning with Data",
    instructor: "Gordon Weinberg",
    semester: "Fall 2022",
    category: "General Education, Other",
    rating: "",
    review: `Basic statistics class with an engaging instructor and light workload.`,
  },
  {
    code: "48-095",
    name: "Spatial Concepts for Non-Architecture Majors",
    instructor: "Nina Marie Barbuto",
    semester: "Fall 2022",
    category: "General Education, Other",
    rating: "",
    review: `I had a beginning-of-life crisis and wanted to learn about architecture.
    Creative open-ended class where you're given general project themes and you
    design spaces within that theme. Hands-on and exploratory, I had a good time.`,
  },
  {
    code: "70-104",
    name: "Business Leadership Endeavor I",
    instructor: "Rubab Jafry O'Connor",
    semester: "Fall 2022",
    category: "General Education, Other",
    rating: "",
    review: `I started as a business major at CMU before transfering into computer science.
    Class focused on presentation skills and we watched some motivational videos about LeBron.
    For my final presentation I gave a spoken-word version of the first few bars from Dwayne Johnson's verse in <a href="https://youtu.be/E9T78bT26sk?si=uSaP8K8xCG5QRn08&t=203">Face Off</a>.`,
  },
  {
    code: "70-106",
    name: "Business Science",
    instructor: "Bryan Routledge",
    semester: "Fall 2022",
    category: "General Education, Other",
    rating: "",
    review: `Met my good friend Andrew Zhou in this class. Also Professor Routledge is
    very supportive and helped me find research opportunities.`,
  },
  {
    code: "76-107",
    name: "Writing about Data",
    instructor: "Barbara George",
    semester: "Fall 2022",
    category: "General Education, Other",
    rating: "",
    review: `Wrote about data.`,
  },
  {
    code: "76-108",
    name: "Writing about Public Problems",
    instructor: "Courtney Novosat",
    semester: "Fall 2022",
    category: "General Education, Other",
    rating: "",
    review: `Public problems can consider themselves written.`,
  },
  {
    code: "15-122",
    name: "Principles of Imperative Computation",
    instructor: "Iliano Cervesato",
    semester: "Spring 2023",
    category: "Computer Science Misc",
    rating: "",
    review: `This course set the foundation for thinking mathematically about
    correctness and code invariants. Tests intricacies with the C standard and
    helped me get a feel for some quirks in computing. Time-consuming but overall
    a great class.`,
  },
  {
    code: "21-127",
    name: "Concepts of Mathematics",
    instructor: "Gregory Johnson",
    semester: "Spring 2023",
    category: "Math, Science, Engineering",
    rating: "Really enjoyed",
    review: `My first foray into discrete mathematics. Challenging and
    had to devote a lot of studying to this class, but taking the time to
    work hard and really understand all the concepts in this class made the
    rest of my CMU journey much smoother sailing. Great class to take and
    worth while putting in the work to struggle through all the problems yourself.`,
  },
  {
    code: "21-241",
    name: "Matrices and Linear Transformations",
    instructor: "Jeffrey Zhang",
    semester: "Spring 2023",
    category: "Math, Science, Engineering",
    rating: "",
    review: `Professor was very generous in office hours. Sadly, he is no longer
    at CMU.`,
  },
  {
    code: "51-262",
    name: "Communication and Digital Design Fundamentals",
    instructor: "Kelsey Dusenka",
    semester: "Spring 2023",
    category: "General Education, Other",
    rating: "",
    review: `Learned about design principles and used Adobe Illustrator to
    make a few projects. Structured around projects and it was really fun
    getting to see my fellow students came up with!`,
  },
  {
    code: "88-120",
    name: "Reason, Passion, and Cognition",
    instructor: "Linda Moya",
    semester: "Spring 2023",
    category: "General Education, Other",
    rating: "",
    review: `To be entirely honest all I really remember is there was one
    lecture where the conclusion was that people are born with genetic levels of
    happiness that don't really change.`,
  },
  {
    code: "15-150",
    name: "Principles of Functional Programming",
    instructor: "Brandon Wu",
    semester: "Summer 2023",
    category: "Theory & Algorithms",
    rating: "Really enjoyed",
    review: `I stayed the summer because in the spring I decided to transfer
    to computer science from business. <a href="https://brandonspark.github.io/">Brandon Wu</a> is
    an amazing amazing amazing instructor and I loved this class. Historically this class has significantly higher grades
    on the first midterm compared to the second, likely due to challenging content in the second half like
    higher order functions and continuation-passing style. Helped me think recursively and understand
    functions as values which helped me with interviews a lot.`,
  },
  {
    code: "15-213",
    name: "Introduction to Computer Systems",
    instructor: "Brian Railing",
    semester: "Summer 2023",
    category: "Systems",
    rating: "",
    review: `Some challenging labs. The first one, Data Lab, features binary operation
    coding puzzles which were quite fun. I personally found the matrix optimization part of
    Cache Lab challenging. Learned to debug some tricky issues.`,
  },
  {
    code: "15-210",
    name: "Parallel and Sequential Data Structures and Algorithms",
    instructor: "Charles Garrod, Guy Belloch",
    semester: "Fall 2023",
    category: "Theory & Algorithms",
    rating: "",
    review: `I personally found this to be the hardest of the CS core classes because
    some of the algorithms you need to solve the homework require multiple connections
    and creative steps for you to come up with them. In hindsight this class helped me the most with
    technical interview prep. I think this class is a major part of why I've been able to solve 
    technical interview questions without having to grind leetcode.`,
  },
  {
    code: "15-251",
    name: "Great Ideas in Theoretical Computer Science",
    instructor: "Anil Ada",
    semester: "Fall 2023",
    category: "Theory & Algorithms",
    rating: "Top favorite",
    review: `I LOVED this class!!! Collaborating with my group was maybe the most fun I had
    at CMU (shoutout Ryan Song, Derek Lu, and Josh Nam). Whiteboarding together working on some of these
    problems was definitely the highlight of this semester and some of my favorite memories of all of college.
    Professor Ada is incredibly supportive and one of the best (if not the best) lecturer I've had.
    Some problems in this class were quite challenging (Minimum-Spanning-Tree Cut problem...) and
    taking it alongside 15-210 to finish my transfer to the CS department was definitely a push.`,
  },
  {
    code: "21-259",
    name: "Calculus in Three Dimensions",
    instructor: "Timothy Flaherty",
    semester: "Fall 2023",
    category: "Math, Science, Engineering",
    rating: "",
    review: `Exam medians were in the 90s which is generally unheard of except for
    in Gen Eds at CMU. I should've brushed up on my Calc 1 and 2 before taking the course.`,
  },
  {
    code: "60-105",
    name: "Cultural History of the Visual Arts",
    instructor: "Maria Elena Versari",
    semester: "Fall 2023",
    category: "General Education, Other",
    rating: "",
    review: `Required attendance but very little work outside of class time.
    Very kind and understanding professor, I had to miss a class due to CMU
    Street Styles performance and Professor Versari was very accomodating.`,
  },
  {
    code: "15-259",
    name: "Probability and Computing",
    instructor: "Mor Harchol-Balter, Weina Wang",
    semester: "Spring 2024",
    category: "Math, Science, Engineering",
    rating: "Really enjoyed",
    review: `How does CMU have so many engaging and entertaining professors!?
    Giant (I mean GIANT) dice were brought to class and thrown around, I got a
    green monkey stuffed animal because it had something to do with tail bounds,
    and prizes were awarded for answering questions. Beyond that type of fun, this
    class proposed challenging probability problems that engaged me in a way I really
    enjoyed. It covered many different concepts and I strongly recommend this class
    for anyone who needs to fulfill a probability requirement at CMU.`,
  },
  {
    code: "15-330",
    name: "Introduction to Computer Security",
    instructor: "David Brumley, Riad Wahby",
    semester: "Spring 2024",
    category: "Computer Science Misc",
    rating: "",
    review: `Workload was more than FCEs indicated in previous years because they
    added CTF problems. In hindsight the CTF problems were interesting to solve and
    added hands-on value to the course, but in the moment the unexpected work caught me
    off-guard.`,
  },
  {
    code: "16-385",
    name: "Computer Vision",
    instructor: "Matthew O'Toole",
    semester: "Spring 2024",
    category: "Machine Learning",
    rating: "",
    review: `Course consists of CV projects. Lecture content and projects were a bit
    disconnected although I enjoyed the class overall.`,
  },
  {
    code: "33-104",
    name: "Experimental Physics",
    instructor: "David Anderson",
    semester: "Spring 2024",
    category: "Math, Science, Engineering",
    rating: "",
    review: `David Anderson is very entertaining, if you take this course I'd recommend taking it with him.`,
  },
  {
    code: "15-440",
    name: "Distributed Systems",
    instructor: "Heather Miller, Wenting Zheng",
    semester: "Fall 2024",
    category: "Systems",
    rating: "",
    review: `The course is run differently between the fall and spring. In the fall the class is in Go and in
    the spring it's taught in Java. In hindsight now that I've been reading more literature on system design I can
    appreciate more how this course gave a broad overview of distributed systems while teaching and testing some 
    challenging algorithms in depth. However when taking the course I felt that it fell slightly short of the
    high praise I'd heard from friends about it. I'm still not quite able to place my finger on why.`,
  },
  {
    code: "15-451",
    name: "Algorithm Design and Analysis",
    instructor: "Daniel Anderson, Jason Li",
    semester: "Fall 2024",
    category: "Theory & Algorithms",
    rating: "Really enjoyed",
    review: `Daniel Anderson is another amazing CMU professor because of how clearly
    he explained challenging algorithms. Jason Li was also very supportive and gave me
    extra time in his office hours to ask about potentially pursuing a PhD in theoretical
    computer science. I found the algorithms interesting and enjoyed collaborating with a group again.`,
  },
  {
    code: "18-095",
    name: "Getting Started in Electronics: An Experiential Approach",
    instructor: "Tom Zajdel",
    semester: "Fall 2024",
    category: "Math, Science, Engineering",
    rating: "",
    review: `Hands-on course where you build circuits. I enjoyed it and the open-ended projects.`,
  },
  {
    code: "76-270",
    name: "Writing for the Professions (SCS)",
    instructor: "Jeremy Rosselot-Merritt",
    semester: "Fall 2024",
    category: "General Education, Other",
    rating: "",
    review: `Very practical writing assignments (like writing a resume and cover letter).
    Professor invited some guest speakers.`,
  },
  {
    code: "10-301",
    name: "Introduction to Machine Learning",
    instructor: "Henry Chai, Matt Gormley",
    semester: "Spring 2025",
    category: "Machine Learning",
    rating: "",
    review: `Broad overview of machine learning concepts. Both professors are very clear and engaging.`,
  },
  {
    code: "15-311",
    name: "Logic and Mechanized Reasoning",
    instructor: "Marijn Heule",
    semester: "Spring 2025",
    category: "Computer Science Misc",
    rating: "",
    review: `Learned Lean and used it in proof writing. Another fun class where I got
    to think about proofs.`,
  },
  {
    code: "15-319",
    name: "Cloud Computing",
    instructor: "Majd Sakr",
    semester: "Spring 2025",
    category: "Systems",
    rating: "Really enjoyed",
    review: `Fully remote class focused on projects covering a wide range of 
    technologies like Docker, Apache Spark, and all the major cloud providers (AWS, GCP, Azure).
    A lot of reading docs and learning to quickly understand new technologies. I personally
    enjoyed this class and feel like I gained a broad overview of technologies used in industry,
    but I have mixed thoughts on whether I'd suggest this class to someone now. Because of the
    advent of coding agents, learning to manually parse through docs may no longer be that
    valuable of a skill. Therefore I'd now recommend someone to take a systems class that focuses
    on a more foundational understanding rather than this which is more implementation focused.
    I'd like to publicly apologize to my friend Matt Wei for making him take this class.`,
  },
  {
    code: "98-046",
    name: "Stuco: Intro to Stardew Valley",
    instructor: "Irene Hong, Charvi Hoysal",
    semester: "Spring 2025",
    category: "General Education, Other",
    rating: "",
    review: `Took this with a few friends from Asian Christian Fellowship. Set my username to
    'busy w 15319' and sat in a chair in game while doing my 15319 homework. Apologies to Ryan Kim,
    April Gong, and Kevin Wang for making you guys miss an in game event because the game couldn't progress
    until all players were there and I was busy sitting in a chair in game while doing 15319 homework.`,
  },
  {
    code: "15-418",
    name: "Parallel Computer Architecture and Programming",
    instructor: "Nathan Beckmann, Dimitrios Skarlatos",
    semester: "Fall 2025",
    category: "Systems",
    rating: "Top favorite",
    review: `Loved this class! Out of all the systems classes I took this one went the deepest
    into the hardware. Makes me wish I took some ECE so I could take computer architecture.
    It's structured so that lectures are front loaded in the first 2/3rds of the semester so the last 1/3rd
    can be spent on a final project. You're given a significant amount of compute to design some parallel system
    which I had a ton of fun with. Also learned to program in CUDA which was a challenging but
    rewarding lab. Shoutout to my lab partner Matt Wei for bringing so much joy into this class.`,
  },
  {
    code: "15-445",
    name: "Database Systems",
    instructor: "Andy Pavlo",
    semester: "Fall 2025",
    category: "Systems",
    rating: "",
    review: `Great class! Goes over most database concepts you'd need to know and Pavlo
    is a very passionate and unique lecturer. The first lecture he went on an exposition
    about making the class available to inmate in prison. Cool guy.`,
  },
  {
    code: "33-120",
    name: "Science and Science Fiction",
    instructor: "Barry Lukoka",
    semester: "Fall 2025",
    category: "General Education, Other",
    rating: "",
    review: `Very low workload and I got to learn of some fun sci fi movies. Professor
    Lukoka is a man of the people, in the first lecture he explained how some CMU board has been wanting
    to remove his course from the accepted science gen ed requirement fulfilling courses list but he
    keeps finding new ways to defend it. Truly a CMU hero.`,
  },
  {
    code: "05-391",
    name: "Designing Human Centered Software",
    instructor: "Christopher Harrison",
    semester: "Fall 2025",
    category: "Computer Science Misc",
    rating: "",
    review: `Light workload and a nice overview of design principles for user interaction with software.`,
  },
  {
    code: "10-623",
    name: "Generative AI",
    instructor: "Matt Gormley, Aran Nayebi",
    semester: "Spring 2026",
    category: "Machine Learning",
    rating: "",
    review: `In depth teaching on transformers and then explores many techniques ranging from
    diffusion models to mixture of experts. Overall seems to prioritize breadth over depth.
    Teaches foundational concepts that have helped me better understand what's going on behind the scene
    with modern coding agent tooling.`,
  },
  {
    code: "15-459",
    name: "Undergraduate Quantum Computation",
    instructor: "Ryan O'Donnell",
    semester: "Spring 2026",
    category: "Theory & Algorithms",
    rating: "",
    review: `I took this course because I wanted to take a class with the legendary
    Ryan O'Donnell before I graduated. He did not disappoint. Class is focused on the
    theoretical aspects of quantum computing, very CMU-esque. We didn't touch any
    quantum programming frameworks, but I actually preferred this approach. Professor
    O'Donnell adopts some unconventional notation for ease of learning but he points
    out where he does this.`,
  },
  {
    code: "12-201",
    name: "Geology",
    instructor: "Kelvin Gregory",
    semester: "Spring 2026",
    category: "Math, Science, Engineering",
    rating: "",
    review: `I like rocks.`,
  },
  {
    code: "66-221",
    name: "Topics of Law: Introduction to Intellectual Property Law",
    instructor: "Bill Passodelis, Bridget Kane",
    semester: "Spring 2026",
    category: "General Education, Other",
    rating: "",
    review: `I wanted to pursue patent law before I became a software engineer so this was mostly review.
    For anyone without any exposure to patent law I could see this class as a valuable introduction.`,
  },
];
