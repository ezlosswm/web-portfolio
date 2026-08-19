<script lang="ts">
	import './layout.css';
	import emoji from '$lib/assets/emoji.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	const measurementId = 'G-R28MG0W6TE';
</script>

<svelte:head>
	<link rel="icon" href={emoji} />

	<script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></script>

	<script>
		{
			`
			window.dataLayer = window.dataLayer || [];

			function gtag() {
				window.dataLayer.push(arguments);
			}

			window.gtag = gtag;

			gtag('js', new Date());

			gtag('config', '${measurementId}');
		`;
		}
	</script>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
