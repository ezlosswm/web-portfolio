<script>
	import Contact from '$lib/components/Contact.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<svelte:head>
	<title>Web Developer Portfolio | Carlos Gomez</title>
	<meta
		name="description"
		content="Portfolio website of Carlos Gomez, a web developer specializing in SvelteKit, Tailwind CSS, Supabase, and modern web technologies. Explore projects, skills, and contact information."
	/>
	<meta
		name="keywords"
		content="Carlos Gomez, Web Developer, Portfolio, SvelteKit, Tailwind CSS, Supabase, JavaScript, TypeScript, Frontend, Projects, Programmer, Developer, Software Engineer"
	/>
	<meta name="author" content="Carlos Gomez" />
	<meta property="og:title" content="Web Developer Portfolio | Carlos Gomez" />
	<meta
		property="og:description"
		content="Explore the portfolio of Carlos Gomez, web developer with expertise in SvelteKit, Tailwind CSS, and cutting-edge web solutions. View past projects and get in touch."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="carlos-gomez.vercel.app" />
	<meta name="twitter:title" content="Web Developer Portfolio | Carlos Gomez" />
	<meta
		name="twitter:description"
		content="Discover the work and projects of Carlos Gomez, web developer and UI/UX enthusiast."
	/>
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
