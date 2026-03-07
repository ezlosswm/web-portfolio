<script lang="ts">
	const { details }: { details: Detail[] } = $props();
</script>

<div class="grid w-full grid-cols-12 gap-1.5 uppercase">
	<div class="col-span-12 pb-16">
		<div class="mb-12">
			<a
				href="/"
				class="flex items-center gap-2 text-sm leading-5 font-bold tracking-[4.2px] text-primary"
			>
				<span>
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
						class="lucide lucide-move-left-icon lucide-move-left"
						><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg
					>
				</span>
				Back to Home
			</a>
		</div>

		<!-- Title of the project -->
		<h1 class="mb-16 text-7xl leading-[0.8] font-bold tracking-tighter md:text-9xl lg:text-[11rem]">
			Carlos <br /> Gomez
		</h1>
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
</div>
