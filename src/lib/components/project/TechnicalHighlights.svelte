<script lang="ts">
	const { th }: { th: TechnicalHighlight } = $props();
</script>

<div>
	<span class="mb-2 block text-xs font-bold tracking-widest text-text-muted uppercase">
		Performance
	</span>
	<div class="text-onyx text-5xl font-bold">
		{th.performance}
		<span class="text-2xl text-primary">%</span>
	</div>

	<p class="text-onyx/60 mt-1 text-sm font-medium">Lighthouse Core Web Vitals</p>
</div>

<div>
	<span class="mb-2 block text-xs font-bold tracking-widest text-text-muted uppercase">
		Efficiency
	</span>
	<div class="text-onyx text-5xl font-bold">
		{th.efficiency}
		<span class="text-2xl text-primary">ms</span>
	</div>

	<p class="text-onyx/60 mt-1 text-sm font-medium">Average Payload Latency</p>
</div>
