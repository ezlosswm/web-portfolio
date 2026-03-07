<script>
	const educationInfo = [
		{
			degree: 'Business Management',
			school: 'Corozal Junior College',
			duration: 'August 2019 - June 2022',
			description:
				'Completed coursework in core business disciplines including management, accounting, marketing, and economics. Developed practical skills in business operations, leadership, communication, and problem solving, with a focus on understanding how organizations operate and make strategic decisions.'
		}
	];
</script>

<section class="grid grid-cols-12 gap-1.5">
	<div class="col-span-12 lg:col-span-3">
		<h2 class="mb-8 text-3xl font-bold tracking-tighter uppercase lg:mb-0">Education</h2>
	</div>

	<div class="col-span-12 space-y-16 lg:col-span-9">
		<div class="grid grid-cols-12 gap-1.5 space-y-16">
			{#each educationInfo as education}
				<div class="col-span-12 mb-4 space-y-1.5 md:col-span-4 md:mb-0">
					<p class="text-xl font-bold">{education.degree}</p>
					<p class="text-xs font-bold tracking-widest text-text-secondary-muted uppercase">
						{education.school}, {education.duration}
					</p>
				</div>
				<div class="col-span-12 md:col-span-8">
					<p class="max-w-2xl text-lg leading-relaxed text-text-secondary">
						{education.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
