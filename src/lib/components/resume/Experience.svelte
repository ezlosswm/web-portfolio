<script lang="ts">
	const experienceInfo = [
		{
			title: 'Vendor Relations Manager',
			company: 'FGP Home Services',
			duration: 'January 2025 - Present',
			description:
				'Sourced, evaluated and onboarded qualified home service contractors across multiple markets to support our partners and company growth. Managed end-to-end communcations with contractors & realtors during onboarding, project execution and approval.'
		},
		{
			title: 'Acquisition Associate',
			company: 'Fusion Growth Partners',
			duration: 'March 2024 - January 2025',
			description:
				'Conducted targeted cold-call outreach to qualified realtors & brokers to generate new business opportunities. Engaged potential clients by presenting the company’s value proposition and investment model, qualifying prospects, and scheduling meetings for senior executives.'
		},
		{
			title: 'Custom Service Representative',
			company: 'Ariston Marketing Ltd. Co.',
			duration: 'August 2022 - January 2024',
			description:
				'Handled inbound and outbound calls for a dental services client, assisting patients with appointment scheduling, inquiries, and follow-up communications.'
		}
	];

	import { projectList } from '$lib/projectList';
</script>

<section class="grid grid-cols-12 gap-1.5">
	<div class="col-span-12 lg:col-span-3">
		<h2 class="mb-8 text-3xl font-bold tracking-tighter uppercase lg:mb-0">Projects</h2>
	</div>

	<div class="col-span-12 mb-24 space-y-16 lg:col-span-9">
		<div class="grid grid-cols-12 gap-1.5 space-y-16">
			{#each projectList as project (project.name)}
				<div class="col-span-12 mb-4 md:col-span-4 md:mb-0">
					<div class="flex items-baseline gap-x-3">
						<p class="text-xl font-bold">
							{project.name}
						</p>
						<a href={project.url} rel="noopener noreferrer" target="_blank" class="text-primary">
							Live Demo
						</a>
					</div>
				</div>
				<div class="col-span-12 md:col-span-8">
					<div class="mb-2 inline-flex items-center gap-4">
						<p class="text-sm font-bold">Tech Stack:</p>
						<span>
							{project.projectDetails[project.projectDetails.length - 1].description}
						</span>
					</div>
					{#each project.summary as bullet (bullet)}
						<li class="max-w-2xl text-lg leading-relaxed text-text-secondary">
							{bullet}
						</li>
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<div class="col-span-12 lg:col-span-3">
		<h2 class="mb-8 text-3xl font-bold tracking-tighter uppercase lg:mb-0">
			Professional Experience
		</h2>
	</div>

	<div class="col-span-12 space-y-16 lg:col-span-9">
		<div class="grid grid-cols-12 gap-1.5 space-y-16">
			{#each experienceInfo as experience (experience.title)}
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
