export type SkillGroup = {
    category: string;
    items: string[];
};

const skillsData: SkillGroup[] = [
    {
        category: "Programming Languages",
        items: ["C++", "Python", "JavaScript", "TypeScript", "Go"]
    },
    {
        category: "ML / AI",
        items: ["PyTorch", "scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn", "SentencePiece", "Hugging Face Transformers", "OpenCV"]
    },
    {
        category: "Backend & Systems",
        items: ["FastAPI", "Flask", "Node.js", "Go Chi"]
    },
    {
        category: "Frontend",
        items: ["React.js", "Svelte", "SvelteKit", "D3.js", "HTML5", "CSS3"]
    },
    {
        category: "Databases & Tools",
        items: ["PostgreSQL", "MySQL", "Git", "Docker", "Linux CLI", "Streamlit"]
    },
    {
        category: "CS Foundations",
        items: ["Data Structures & Algorithms", "Linear Algebra", "Probability & Statistics", "Computer Architecture"]
    }
];

export default skillsData;