<script>
	import Contact from '$lib/components/Contact.svelte';
	import CaseStudy from '$lib/components/project/CaseStudy.svelte';
	import Hero from '$lib/components/project/Hero.svelte';
	import TechnicalHighlights from '$lib/components/project/TechnicalHighlights.svelte';

	const { data } = $props();
	const projectMetaData = $derived(data.project);
</script>

<svelte:head>
	<title>{projectMetaData.name} | Carlos Gomez</title>
	<meta
		name="description"
		content={projectMetaData.description ?? 'Project details and case study.'}
	/>
	<meta property="og:title" content={projectMetaData.name ?? "Carlos Gomez's Portfolio Project"} />
	<meta
		property="og:description"
		content={projectMetaData.description ?? 'Project details and case study.'}
	/>
	<meta property="og:image" content={projectMetaData.imageMetaData.src} />
	<meta property="og:url" content={projectMetaData.url} />
</svelte:head>

<main id="pdf-content" class="px-6 lg:px-12">
	<section id="hero" class="flex min-h-[calc(100vh-5rem)] scroll-mt-20 items-center">
		<Hero details={projectMetaData.projectDetails} name={projectMetaData.name} />
	</section>

	<section class="py-12">
		<div class="group aspect-21/9 w-full overflow-hidden">
			<img
				src={projectMetaData.imageMetaData.src}
				class="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
				alt={projectMetaData.imageMetaData.alt}
			/>
		</div>
	</section>

	<section class="border-b border-bg-muted py-24">
		<CaseStudy cs={projectMetaData.caseStudy} />
	</section>

	<section class="border-b border-bg-muted py-24">
		<div class="mb-16">
			<h2 class="mb-4 text-4xl font-bold tracking-tighter uppercase">Technical Highlights</h2>
			<p class="font-medium text-text-secondary">
				Engineering precision at every later of the stack.
			</p>
		</div>

		<div class="grid grid-cols-12 gap-1.5">
			<div class="col-span-12 mt-12 flex flex-col justify-center gap-12 lg:col-span-4 lg:mt-0">
				<TechnicalHighlights th={projectMetaData.technicalHighlights} />

				<a
					href={projectMetaData.url}
					class="group inline-flex items-center justify-between rounded-sm bg-primary p-6 font-bold text-white uppercase transition-all hover:bg-primary/80"
					target="_blank"
				>
					Preview <svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-external-link-icon lucide-external-link"
						><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
							d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
						/></svg
					>
				</a>
			</div>
		</div>
	</section>

	<section class="py-24">
		<Contact />
	</section>
</main>
