<script>
	const experienceInfo = [
		{
			title: 'Virtual Assistant',
			company: 'Fusion Growth Partners',
			duration: 'January 2025 - Present',
			description:
				'Spearheading the migration of legacy design systems into highly performant SvelteKit applications. Implementing rigid Swiss-design principles through programmatic CSS and functional component architectures.'
		},
		{
			title: 'Acquisition Associate',
			company: 'Fusion Growth Partners',
			duration: 'March 2024 - January 2025',
			description:
				'Spearheading the migration of legacy design systems into highly performant SvelteKit applications. Implementing rigid Swiss-design principles through programmatic CSS and functional component architectures.'
		},
		{
			title: 'Custom Service Representative',
			company: 'Ariston Marketing Ltd. Co.',
			duration: 'August 2022 - January 2024',
			description:
				'Spearheading the migration of legacy design systems into highly performant SvelteKit applications. Implementing rigid Swiss-design principles through programmatic CSS and functional component architectures.'
		}
	];
</script>

<section class="grid grid-cols-12 gap-1.5">
	<div class="col-span-12 lg:col-span-3">
		<h2 class="mb-8 text-3xl font-bold tracking-tighter uppercase lg:mb-0">Experience</h2>
	</div>

	<div class="col-span-12 space-y-16 lg:col-span-9">
		<div class="grid grid-cols-12 gap-1.5 space-y-16">
			{#each experienceInfo as experience}
				<div class="col-span-12 mb-4 space-y-1.5 md:col-span-4 md:mb-0">
					<p class="text-xl font-bold">{experience.title}</p>
					<p class="text-xs font-bold tracking-widest text-text-secondary-muted uppercase">
						{experience.company}, {experience.duration}
					</p>
				</div>
				<div class="col-span-12 md:col-span-8">
					<p class="max-w-2xl text-lg leading-relaxed text-text-secondary">
						{experience.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
