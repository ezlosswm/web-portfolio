<script>
	import Contact from '$lib/components/Contact.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<svelte:head>
	<title>Web Developer Portfolio | Carlos Gomez</title>
</svelte:head>

<main class="px-6 lg:px-12">
	<div id="hero" class="flex min-h-[calc(100vh-6rem)] scroll-mt-20 items-center">
		<HeroSection />
	</div>

	<div class="py-24">
		<Projects />
	</div>

	<div class="py-24">
		<Contact />
	</div>
</main>
