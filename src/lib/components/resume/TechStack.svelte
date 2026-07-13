<script lang="ts">
	const techStack = [
		['Languages', 'JavaScript', 'TypeScript', 'Go', 'SQL'],
		['Frameworks', 'Sveltekit', 'React', 'TailwindCSS'],
		['Backend', 'Postgres', 'Node.js', 'Supabase', 'Convex'],
		['Tools', 'Git', 'Docker', 'Vercel', 'Figma', 'SEO', 'UI/UX'],
		[
			'Additional Skills',
			'Responsive Design',
			'RESTful APIs',
			'OAuth Authentication',
			'Performance Optimization',
			'Git Workflow',
			'Cross-Browser Compatibility'
		]
	];
</script>

<section class="grid grid-cols-12 gap-1.5">
	<div class="col-span-12 lg:col-span-3">
		<h2 class="mb-8 text-3xl font-bold tracking-tighter uppercase lg:mb-0">Tech Stack</h2>
	</div>

	<div class="col-span-12 lg:col-span-9">
		<div class="grid grid-cols-2 gap-1.5 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
			{#each techStack as stack (stack)}
				<div class="flex flex-col">
					{#each stack as list (list)}
						<div
							class="flex flex-col text-xl font-bold first:mb-2 first:text-xs first:tracking-widest first:text-primary"
						>
							<p>{list}</p>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>
