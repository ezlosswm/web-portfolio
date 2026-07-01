<script>
	const details = [
		{ title: 'Location', description: 'Corozal, BZ' },
		{ title: 'Email', description: 'carlos.a.gomez05@gmail.com' },
		{ title: 'Availability', description: 'Open for new roles' }
	];
</script>

<section class="grid w-full grid-cols-12 gap-1.5 uppercase">
	<div class="col-span-12 pb-16">
		<p class="mb-6 text-sm leading-5 font-bold tracking-[4.2px] text-primary">Frontend Developer</p>
		<h1 class="mb-16 text-7xl leading-[0.8] font-bold tracking-tighter md:text-9xl lg:text-[11rem]">
			Carlos <br /> Gomez
		</h1>
		<!-- <p>
			Portfolio: <span>
				<a
					href="https://carlos-gomez.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-primary hover:underline">https://carlos-gomez.vercel.app/</a
				>
			</span>
		</p> -->
	</div>

	{#each details as detail}
		<div class="col-span-12 md:col-span-4">
			<div class="flex flex-col gap-1.5">
				<div class="text-xs font-bold tracking-widest text-primary uppercase">
					{detail.title}
				</div>
				<div class="text-lg font-medium">{detail.description}</div>
			</div>
		</div>
	{/each}
</section>
