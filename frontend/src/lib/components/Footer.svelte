<script lang="ts">
	import {socialLinks} from '$lib';
</script>

<footer>
	<section id="connect">
		<h1>connect</h1>

		<div id="social_links">
			{#each socialLinks as link}
				<a
					href={link.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{link.name}
				</a>
			{/each}
		</div>
	</section>
</footer>

<style>
    #connect h1 {
        font-size: 2rem;
        color: var(--accent-color);
    }
    #social_links {
        display: flex;
        flex-wrap: wrap;
        padding: 1rem 0;
        gap: 1rem;
    }
</style>