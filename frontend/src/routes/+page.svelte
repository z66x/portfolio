<script lang="ts">
    import { featuredProjects, practiceProjects, skillsData } from '$lib';
    let practiceOpen = $state(false);
</script>

<main>
	<section id="bio">
		<h1 id="name">Aparajith S</h1>
		<div id="info">
			<p><i class="bi bi-geo-alt"></i> hyderabad, india</p>
            <p>
                <i class="bi bi-mortarboard"></i> Indian Institute of
                Technology Bhilai
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

    <div id="featured">
        {#each featuredProjects as project}
        <div class="featured-card">
            <div class="card-top">
            <p class="card-title">{project.title}</p>
            <div class="card-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">github</a>
                {#if project.live}
                <a href={project.live} target="_blank" rel="noopener noreferrer">live</a>
                {/if}
            </div>
            </div>
            <p class="card-desc">{project.description}</p>
            <div class="card-stack">
            {#each project.stack as tech}
                <span class="tag">{tech}</span>
            {/each}
            </div>
        </div>
        {/each}
    </div>

    <button class="practice-toggle" onclick={() => practiceOpen = !practiceOpen}>
        {practiceOpen ? 'v' : '>'} practice projects
    </button>

    {#if practiceOpen}
        <div id="project_container">
        {#each practiceProjects as project}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div class="project-tile">
                <p>{project.title}</p>
            </div>
            </a>
        {/each}
        </div>
    {/if}
    </section>
</main>

<style>
  main {
    margin-top: 3rem;
  }

  /* ── Bio ── */
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

  /* ── Skills ── */
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
    gap: 0.5rem;
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

  /* ── Projects ── */
  #projects h1 {
    font-size: 2rem;
    color: var(--accent-color);
  }

  #featured {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem 0;
  }

  .featured-card {
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    transition: border-color 200ms ease;
  }

  .featured-card:hover {
    border-color: var(--accent-color);
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  .card-title {
    font-size: 1rem;
    color: var(--accent-color);
    font-weight: 600;
  }

  .card-links {
    display: flex;
    gap: 0.8rem;
    flex-shrink: 0;
  }

  .card-links a {
    font-size: 0.8rem;
    color: var(--secondary-color);
    border-bottom: 1px solid var(--secondary-color);
  }

  .card-links a:hover {
    color: var(--accent-color);
    border-color: var(--accent-color);
  }

  .card-desc {
    font-size: 0.85rem;
    color: var(--secondary-color);
    line-height: 1.5;
  }

  .card-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .tag {
    font-size: 0.75rem;
    padding: 0.2rem 0.5rem;
    border: 1px solid rgba(0, 204, 221, 0.4);
    color: var(--accent-color);
  }

  .practice-toggle {
    background: none;
    border: none;
    color: var(--secondary-color);
    font-size: 0.9rem;
    cursor: pointer;
    padding: 0.5rem 0;
    font-family: inherit;
    margin-bottom: 0.5rem;
  }

  .practice-toggle:hover {
    color: var(--primary-color);
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

  /* ── Responsive ── */
  @media (max-width: 768px) {
    #skills {
      grid-template-columns: 1fr;
    }

    #featured {
      grid-template-columns: 1fr;
    }

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
  }
</style>
