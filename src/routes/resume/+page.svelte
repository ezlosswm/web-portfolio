<script lang="ts">
	import Education from '$lib/components/resume/Education.svelte';
	import Experience from '$lib/components/resume/Experience.svelte';
	import Hero from '$lib/components/resume/Hero.svelte';
	import TechStack from '$lib/components/resume/TechStack.svelte';
</script>

<svelte:head>
	<title>Resume | Web Developer Portfolio - Carlos Gomez</title>
	<meta
		name="description"
		content="View the resume of Carlos Gomez, a full stack web developer. Explore skills, experience, and education. Available for hire."
	/>
	<meta property="og:title" content="Resume | Web Developer Portfolio - Carlos Gomez" />
	<meta
		property="og:description"
		content="Explore the full stack developer resume of Carlos Gomez, including technical skills, work experience, and education."
	/>
	<meta
		name="keywords"
		content="web developer, resume, portfolio, Carlos Gomez, software engineer, full stack, skills, experience, education"
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<main id="pdf-content" class="px-6 lg:px-12">
	<section id="hero" class="flex min-h-[calc(100vh-5rem)] scroll-mt-20 items-center">
		<Hero />
	</section>

	<section class="border-y border-bg-muted py-24">
		<TechStack />
	</section>

	<section class="border-b border-bg-muted py-24">
		<Experience />
	</section>

	<section class="border-b border-bg-muted py-24">
		<Education />
	</section>
</main>

<style>
	@media print {
		:global(section) {
			padding-block: 5rem;
			border: none;
		}
		:global(section:last-child) {
			padding-block: 3rem;
		}
	}
</style>
