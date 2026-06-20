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
  live?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Rapformer",
    description: "14M parameter autoregressive transformer trained from scratch on 500K words of rap lyrics. Custom SentencePiece BPE tokenizer, FastAPI inference backend, deployed on Hugging Face Spaces.",
    stack: ["PyTorch", "SentencePiece", "FastAPI", "Docker"],
    github: "https://github.com/z66x/rapformer",
    live: "https://huggingface.co/spaces/zwwixx/rapformer"
  },
  {
    title: "NSE Stock Technical Analysis Dashboard",
    description: "End-to-end analytics pipeline for 15 NSE equities across 5 sectors. 25 technical indicators engineered from scratch, 15 logistic regression classifiers, live Streamlit dashboard with real-time signals.",
    stack: ["Python", "Pandas", "scikit-learn", "Plotly", "Streamlit"],
    github: "https://github.com/z66x/nse-stock-analysis",
    live: "https://nse-stock-signal.streamlit.app/"
  },
  {
    title: "Graph Algorithm Visualiser",
    description: "Interactive step-by-step visualisation of BFS, DFS, and Dijkstra. Build custom graphs, drag nodes, animate execution.",
    stack: ["Go", "SvelteKit", "TypeScript", "D3.js"],
    github: "https://github.com/z66x/graph-visualizer",
    live: "https://graph-visualizer-zwix.vercel.app"
  },
  {
    title: "zwixGPT",
    description: "Character-level decoder-only transformer built from scratch in PyTorch. Trained on TinyShakespeare and a custom Kanye West lyrics corpus across 6+ experimental runs. Predecessor to Rapformer.",
    stack: ["PyTorch", "Python", "NumPy"],
    github: "https://github.com/z66x/zwixGPT"
  }
];

export const practiceProjects: Project[] = [
  { title: "URL Shortener", link: "https://github.com/z66x/learn-backend/tree/main/url-shortener", category: "Go" },
  { title: "CLI Task Tracker", link: "https://github.com/z66x/learn-backend/tree/main/cli-task-tracker", category: "Go" },
  { title: "hack-slack", link: "https://github.com/z66x/hack-slack", category: "Python" },
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