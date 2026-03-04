<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';

	const links = [
		{ name: 'GitHub', url: 'https://github.com/ezlosswm' },
		{ name: 'X (Twitter)', url: 'https://twitter.com/ezlosswm' }
	];
</script>

<div id="contact" class="grid grid-cols-12">
	<div class="col-span-12 space-y-8 lg:col-span-7">
		<SectionHeading heading="Contact / 03" title="Get In Touch" size="title" />

		<a
			href="mailto:ezlosswm@gmail.com"
			class="text-2xl leading-8 font-bold underline transition-colors hover:text-primary md:text-4xl"
			>carlos.a.gomez095@gmail.com</a
		>

		<div class="mt-10 flex gap-8 uppercase">
			{#each links as link}
				<a
					href={link.url}
					target="_blank"
					class="text-xs leading-4 font-bold tracking-[2.4px] transition-colors hover:text-primary"
				>
					{link.name}
				</a>
			{/each}
		</div>
	</div>

	<div class="col-span-12 mt-16 lg:col-span-4 lg:col-start-9 lg:mt-0">
		<p class="pb-8 leading-6 font-medium text-bg-dark/60">
			Currently open to frontend development roles and technical collaborations. Working from
			Corozal, Belize, synchronized with the world.
		</p>

		<div class="rounded-sm bg-bg-dark text-white">
			<div class="flex h-40 w-full flex-col justify-center gap-6 pl-8">
				<div class="flex items-center gap-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-map-pin-icon lucide-map-pin size-5 text-primary"
						><path
							d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
						/><circle cx="12" cy="10" r="3" /></svg
					>
					<p class="text-xs leading-4 font-bold tracking-[2px] uppercase">Current Location</p>
				</div>

				<div class="space-y-1">
					<h4 class="text-2xl leading-8 font-bold uppercase">Corozal, BZ</h4>
					<p class="font-mono text-sm leading-5 text-white/60">18.4031° N, 88.3968° W</p>
				</div>
			</div>
		</div>
	</div>
</div>
