<script>
	const experienceInfo = [
		{
			title: 'Vendor Relations Manager',
			company: 'FGP Home Services',
			duration: 'January 2025 - Present',
			description:
				'Identified and recruited qualified home service contractors across key U.S. markets to expand the company’s national vendor network. Conducted screening interviews to evaluate candidates’ experience, communication skills, and business fit while presenting the company’s partnership program and value proposition. Managed candidate documentation and communication throughout the recruitment process and coordinated with executive leadership to advance qualified vendors through contract review and onboarding.'
		},
		{
			title: 'Acquisition Associate',
			company: 'Fusion Growth Partners',
			duration: 'March 2024 - January 2025',
			description:
				'Conducted targeted cold-call outreach to qualified leads to generate new business opportunities. Engaged potential clients by presenting the company’s value proposition and investment model, qualifying prospects, and scheduling meetings for senior executives. Served as the first point of contact for prospective clients, contributing directly to lead generation and sales pipeline growth.'
		},
		{
			title: 'Custom Service Representative',
			company: 'Ariston Marketing Ltd. Co.',
			duration: 'August 2022 - January 2024',
			description:
				'Handled inbound and outbound calls for a dental services client, assisting patients with appointment scheduling, inquiries, and follow-up communications. Provided clear information about services and addressed customer concerns while maintaining a professional and positive experience. Accurately documented interactions and updates in the system to ensure efficient communication and continuity of care.'
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
