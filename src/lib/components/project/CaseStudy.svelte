<script lang="ts">
	const { cs }: { cs: CaseStudy } = $props();
</script>

<div class="grid grid-cols-12 gap-4">
	<!-- Challenge -->
	<div class="col-span-12 lg:col-span-5">
		<h2 class="mb-8 text-xs font-bold tracking-[0.3em] text-primary uppercase">
			01 / The Challenge
		</h2>

		<p class="text-2xl leading-snug font-light md:text-3xl">
			{cs.challenge}
		</p>
	</div>

	<!-- Solution -->
	<div class="col-span-12 lg:col-span-5 lg:col-start-7">
		<h2 class="mb-8 text-xs font-bold tracking-[0.3em] text-primary uppercase">
			02 / The Solution
		</h2>

		<p class="leading-relaxed font-medium text-text-secondary">
			{cs.solution}
		</p>
	</div>
</div>
