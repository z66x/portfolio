export type Project = {
  title: string;
  link: string;
  category: string;
};

export type FeaturedProject = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Graph Algorithm Visualiser",
    description: "Interactive step-by-step visualisation of BFS, DFS, and Dijkstra. Build custom graphs, drag nodes, animate execution.",
    stack: ["Go", "SvelteKit", "TypeScript", "D3.js"],
    github: "https://github.com/z66x/graph-visualizer",
    live: "https://graph-visualizer-zwix.vercel.app"
  },
  {
    title: "URL Shortener",
    description: "Full-stack URL shortener with a Go backend, REST API, schema versioning, and containerised PostgreSQL.",
    stack: ["Go", "Svelte", "PostgreSQL", "Docker"],
    github: "https://github.com/z66x/learn-backend/tree/main/url-shortener",
    live: "https://zwix-url.up.railway.app"
  }
];

export const practiceProjects: Project[] = [
  { title: "RPG Search", link: "https://z66x.github.io/javascript-algorithms-and-data-structures/rpg-search", category: "JavaScript" },
  { title: "Palindrome Checker", link: "https://z66x.github.io/javascript-algorithms-and-data-structures/palindrome-checker", category: "JavaScript" },
  { title: "Roman Converter", link: "https://z66x.github.io/javascript-algorithms-and-data-structures/roman-converter", category: "JavaScript" },
  { title: "Number Validator", link: "https://z66x.github.io/javascript-algorithms-and-data-structures/number-validator", category: "JavaScript" },
  { title: "Cash Register", link: "https://z66x.github.io/javascript-algorithms-and-data-structures/cash-register", category: "JavaScript" },
  { title: "Landing Page", link: "https://z66x.github.io/responsive-web-design/landing-page", category: "Web Design" },
  { title: "Technical Documentation", link: "https://z66x.github.io/responsive-web-design/tech-doc", category: "Web Design" },
  { title: "Tribute Page", link: "https://z66x.github.io/responsive-web-design/tribute-page", category: "Web Design" },
  { title: "Survey Form", link: "https://z66x.github.io/responsive-web-design/survey-form", category: "Web Design" },
];