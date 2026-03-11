export type SkillGroup = {
	category: string;
	items: string[];
};

const skillsData: SkillGroup[] = [
	{
		category: "Programming Languages",
		items: ["C", "C++", "Python", "JavaScript", "Go"]
	},
	{
		category: "Backend & Systems",
		items: [
			"Flask",
			"Node.js",
			"Express.js",
			"SvelteKit",
			"Go Chi"
		]
	},
	{
		category: "Frontend",
		items: [
			"HTML5",
			"CSS3",
			"Bootstrap",
			"React.js",
			"Svelte",
			"TypeScript"
		]
	},
	{
		category: "CS Foundations",
		items: [
			"Data Structures & Algorithms",
			"Computer Organization & Architecture"
		]
	},
	{
		category: "Data Science",
		items: [
			"NumPy",
			"Pandas",
			"Matplotlib",
			"Scikit",
			"Seaborn",
			"NetworkX",
			"Linear Algebra",
			"Probability & Statistics"
		]
	},
	{
		category: "Databases & Tools",
		items: [
			"SQL",
			"PostgreSQL",
			"Git",
			"Linux CLI",
			"Docker"
		]
	}
];

export default skillsData;
