<script>
	const details = [
		{ title: 'Github', url: 'https://github.com/ezlosswm' },
		{ title: 'Portfolio', url: 'https://carlos-gomez.vercel.app/' },
		{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/carlos-gomez-79489023a/' }
	];
</script>

<section class="grid w-full grid-cols-12 gap-1.5 uppercase">
	<div class="col-span-12 pb-16">
		<p class="mb-6 text-sm leading-5 font-bold tracking-[4.2px] text-primary">Frontend Developer</p>
		<h1 class="mb-16 text-7xl leading-[0.8] font-bold tracking-tighter md:text-9xl lg:text-[11rem]">
			Carlos <br /> Gomez
		</h1>
	</div>

	<div class="col-span-12 grid grid-cols-12 gap-16">
		{#each details as detail (detail.title)}
			<div class="col-span-4 md:col-span-2">
				<a
					href={detail.url}
					target="_blank"
					rel="noopener noreferrer"
					class="text-lg font-bold tracking-widest text-primary uppercase"
				>
					{detail.title}
				</a>
			</div>
		{/each}
		<div class="col-span-12 md:col-span-6">
			<p class="text-lg leading-relaxed text-text-secondary normal-case">
				Frontend Developer with experience building responsive web applications using SvelteKit,
				TypeScript, Tailwind CSS, and Supabase. Passionate about creating fast, user-friendly
				interfaces and integrating modern APIs and authentication systems. Seeking a junior frontend
				role where I can contribute to real products and continue growing as an engineer.
			</p>
		</div>
	</div>

	<!-- {#each details as detail (detail.title)}
		<div class="col-span-2 text-start">
			<a
				href={detail.url}
				target="_blank"
				rel="noopener noreferrer"
				class="text-lg font-bold tracking-widest text-primary uppercase"
			>
				{detail.title}
			</a>
		</div>
	{/each} -->
</section>
