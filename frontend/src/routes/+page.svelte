<script lang="ts">
    import { projects, skillsData } from '$lib';
</script>

<main>
	<section id="bio">
		<h1 id="name">Aparajith S</h1>
		<div id="info">
			<p><i class="bi bi-geo-alt"></i> hyderabad, india</p>
            <p>
                <i class="bi bi-mortarboard"></i> Indian Institute of
                Technology, Bhilai
            </p>
		</div>
		<p id="about_me">
			hey there! i'm a 20 y/o data science & ai undergrad student.
			i like building cool stuff with code — backend, web/app
			dev, competitive programming and tricking computers
			into thinking.
		</p>
		<p id="skills-title">current skills,</p>
		<div id="skills">
			{#each skillsData as group}
				<div class="skill-group">
					<p class="skill-category">&gt; {group.category}</p>
					<ul class="skill-items">
						{#each group.items as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>

	<section id="projects">
		<h1>projects</h1>
		<div id="project_container">
			{#each projects as project}
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="project-tile">
						<p>{project.title}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
</main>

<style>
    main {
        margin-top: 3rem;
    }
    #bio {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    #name {
        font-size: 3rem;
        margin-bottom: 0.5rem;
        color: var(--accent-color);
    }
    #info {
        color: var(--secondary-color);
        margin-bottom: 1rem;
    }
    #about_me {
        margin-bottom: 1rem;
    }
    #skills {
        display: grid;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
    .skill-group {
        display: flex;
        flex-direction: column;
    }
    .skill-category {
        font-size: 1rem;
        text-transform: lowercase;
        color: var(--accent-color);
        margin-bottom: 0.5rem;
    }
    .skill-items {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem 0.5rem;
        padding: 0;
    }
    .skill-items li {
        list-style: none;
        font-size: 0.8rem;
        padding: 0.25rem 0.5rem;
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: var(--secondary-color);
        transition: all 200ms ease;
    }
    #projects h1 {
        font-size: 2rem;
        color: var(--accent-color);
    }
    #project_container {
        padding: 1rem 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }
    .project-tile {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.3);
    }
    .project-tile:hover {
        border-color: rgba(255, 255, 255, 1);
    }
    @media (max-width: 768px) {
        #project_container {
            grid-template-columns: 1fr;
            gap: 0;
        }
        .project-tile {
            height: 3rem;
            border: none;
            justify-content: left;
            text-align: left;
        }
        #skills {
            grid-template-columns: 1fr;
        }
    }
</style>
