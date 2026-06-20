<script lang="ts">
    import { featuredProjects, practiceProjects, skillsData } from '$lib';
    let practiceOpen = $state(false);
    const glyphs = 'ABCDEFGHIJKLMNOUPQRSTUVXYZabcdefghijklmnoupqrstuvxyz0123456789@#$%&';

    function scrambleText(event: MouseEvent) {
      const target = event.currentTarget as HTMLElement;
      const originalText = target.dataset.value || target.innerText;
      if (!target.dataset.value) {
          target.dataset.value = originalText;
      }
      let iteration = 0;
      clearInterval((target as any).scrambleInterval);

      (target as any).scrambleInterval = setInterval(() => {
          target.innerText = originalText
              .split("")
              .map((letter, index) => {
                  if (index < iteration) {
                      return originalText[index];
                  }
                  return glyphs[Math.floor(Math.random() * glyphs.length)];
              }).join("");
          if (iteration >= originalText.length) {
              clearInterval((target as any).scrambleInterval);
          }
          iteration += 0.2; 
      }, 30);
    }
</script>

<main>
	<section id="bio">
		<h1 id="name" onmouseenter={scrambleText}>Aparajith S</h1>
		<div id="info">
			<p><i class="bi bi-geo-alt"></i> hyderabad, india</p>
            <p>
                <i class="bi bi-mortarboard"></i> Indian Institute of
                Technology Bhilai
            </p>
		</div>
		<p id="about_me">
			hey there! i'm a 20 y/o data science & ai undergrad student.
      i like building cool stuff from scratch — ml models, backend systems and whatever sits in between.
			also yeah, i do competitive programming!
		</p>
		<p id="skills-title">skills acquired,</p>
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
    position: relative;
    z-index: 1;
  }
  section {
    padding: 1rem;
    border-bottom: 1px solid transparent;
    border-image: linear-gradient(
        to right, 
        transparent, 
        var(--secondary-color) 20%, 
        var(--secondary-color) 80%, 
        transparent
    ) 1;
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
    gap: 0.5rem;
    padding: 0;
    margin: 0;
  }

  .skill-items li {
    list-style: none;
    font-size: 0.8rem;
    padding: 0.35rem 0.7rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: var(--secondary-color);
    width: max-content; 
    transition: all 200ms ease;
  }

  .skill-items li:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.25);
    color: var(--primary-color);
  }

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
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-top: 1px solid rgba(255, 255, 255, 0.16);
    border-left: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    transition: 
      background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
      border-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
    
    will-change: transform;
  }

  .featured-card:hover {
    transform: scale(1.01);
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.24);
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
    font-size: 0.72rem;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.03); 
    border: 1px solid rgba(255, 255, 255, 0.08);
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
  
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;

  transition: all 300ms ease;
}

.project-tile:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.01);
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