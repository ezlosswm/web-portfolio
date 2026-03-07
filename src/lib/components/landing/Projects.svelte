<script lang="ts">
	import SectionHeading from '../SectionHeading.svelte';

	const projects: Project[] = [
		{
			title: 'SuggestBox',
			stack: 'Sveltekit, Supabase',
			link: 'suggestbox'
		}
		// {
		// 	title: 'Bayside Buzz',
		// 	stack: 'Go, HTMX, Appwrite, PostgreSQL, Docker',
		// 	link: '#'
		// }
	];
</script>

<section id="projects" class="space-y-6">
	<SectionHeading heading="Archive / 02" title="Project Index" size="title" />
	<div class="">
		<ul
			class="grid grid-cols-12 border-b border-bg-muted py-4 text-xs font-bold tracking-[2px] uppercase opacity-40"
		>
			<li class="col-span-6">Project Title</li>
			<li class="col-span-3">Stack</li>
			<li class="col-span-3 text-right">Link</li>
		</ul>

		{#each projects as project}
			{@render projectInfo(project)}
		{/each}
	</div>
</section>

{#snippet projectInfo(project: Project)}
	<article
		class="group grid-col-1 grid items-center border-bg-dark/10 py-12 transition-colors not-first:border-t last:border-b hover:text-primary md:grid-cols-12"
	>
		<!-- Title -->
		<div class="col-span-6">
			<h4 class="text-2xl leading-8 font-bold uppercase md:text-4xl">{project.title}</h4>
		</div>

		<!-- Stack -->
		<div class="col-span-3">
			<p class="text-sm leading-5 text-bg-dark/40 group-hover:text-bg-dark/40 md:text-base">
				{project.stack}
			</p>
		</div>

		<!-- Link -->
		<div class="col-span-3 mt-6 md:mt-0">
			<a
				href={project.link}
				class="flex justify-end gap-2 text-xs leading-4 font-bold tracking-[1.2px] uppercase transition-all group-hover:gap-4"
			>
				Case Study <span
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-arrow-right-icon lucide-arrow-right size-4"
						><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
					></span
				>
			</a>
		</div>
	</article>
{/snippet}
