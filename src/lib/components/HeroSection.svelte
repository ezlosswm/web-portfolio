<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';

	const tech = ['Sveltekit', 'JavaScript', 'Typescript', 'Go', 'Postgres', 'Docker'];
</script>

<section class="grid grid-cols-12 gap-6 space-y-6">
	<div class="col-span-12">
		<SectionHeading heading="Portfolio / 01" title="Carlos Gomez" />
	</div>

	<div class="col-span-12 md:col-span-5 lg:col-span-4">
		<div class="pb-8 text-sm leading-5 font-bold tracking-[1.4px] uppercase">
			<ul class="flex flex-wrap gap-x-8 gap-y-3">
				{#each tech as item}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="col-span-12 md:col-span-7 lg:col-span-6 lg:col-start-7">
		<p class="text-lg leading-8 font-light">
			I enjoy turning complex ideas into structured systems — whether that’s authentication flows,
			admin dashboards, or data-driven applications. My goal is to build software that feels simple
			on the surface but is thoughtfully engineered underneath.
		</p>
	</div>
</section>
