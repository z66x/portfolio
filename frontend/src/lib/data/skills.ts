export type SkillGroup = {
	category: string;
	items: string[];
};

const skillsData: SkillGroup[] = [
	{
		category: "Programming Languages",
		items: ["C", "C++", "Python", "JavaScript", "TypeScript", "Go"]
	},
	{
		category: "Backend & Systems",
		items: [
			"Flask",
			"Node.js",
			"Express.js",
			"SvelteKit"
		]
	},
	{
		category: "Frontend",
		items: [
			"HTML5",
			"CSS3",
			"Bootstrap",
			"React.js",
			"Svelte"
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
			"Linear Algebra",
			"Probability & Statistics"
		]
	},
	{
		category: "Databases & Tools",
		items: [
			"SQL",
			"Git",
			"Linux CLI",
			"Docker"
		]
	}
];

export default skillsData;
