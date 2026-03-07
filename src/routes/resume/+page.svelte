<script lang="ts">
	import Education from '$lib/components/resume/Education.svelte';
	import Experience from '$lib/components/resume/Experience.svelte';
	import Hero from '$lib/components/resume/Hero.svelte';
	import TechStack from '$lib/components/resume/TechStack.svelte';
</script>

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
