<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import {Navbar, Footer} from '$lib';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>zwix</title>
</svelte:head>

<Navbar />
{@render children()}
<Footer />