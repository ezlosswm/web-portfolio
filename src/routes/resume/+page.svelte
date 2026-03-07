<script lang="ts">
	import Education from '$lib/components/resume/Education.svelte';
	import Experience from '$lib/components/resume/Experience.svelte';
	import Hero from '$lib/components/resume/Hero.svelte';
	import TechStack from '$lib/components/resume/TechStack.svelte';
</script>

<main class="px-6 lg:px-12">
	<div id="hero" class="flex min-h-[calc(100vh-5rem)] scroll-mt-20 items-center">
		<Hero />
	</div>

	<div class="border-y border-bg-muted py-24">
		<TechStack />
	</div>

	<div class="border-b border-bg-muted py-24">
		<Experience />
	</div>

	<div class="border-b border-bg-muted py-24">
		<Education />
	</div>
</main>
