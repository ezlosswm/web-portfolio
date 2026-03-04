<script lang="ts">
	import './layout.css';
	import emoji from '$lib/assets/emoji.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={emoji} /></svelte:head>

<Header />
{@render children()}
<Footer />
