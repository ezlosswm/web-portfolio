<script>
	import { page } from '$app/state';

	function printPage() {
		window.print();
	}
</script>

<header class="sticky top-0 z-50 border-b border-bg-muted bg-bg-soft px-6 backdrop-blur-md">
	<div class="mx-auto flex h-20 items-center justify-between">
		<div class="flex items-center gap-3">
			<a href="/" class="text-onyx text-xl font-bold tracking-tighter">Carlos Gomez</a>
		</div>
		<nav class="hidden items-center gap-8 text-sm font-medium tracking-[1.4px] uppercase md:flex">
			<a class="transition-colors hover:text-primary" href="/#projects">Projects</a>
			<a class="transition-colors hover:text-primary" href="/#contact">Contact</a>
		</nav>

		{#if page.route.id === '/resume'}
			<button
				onclick={printPage}
				class="flex cursor-pointer items-center gap-2 rounded-sm bg-primary px-6 py-2 text-xs font-bold tracking-widest text-white uppercase transition-colors hover:bg-primary/80 hover:brightness-110"
			>
				Download PDF
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
					class="lucide lucide-download-icon lucide-download size-4"
					><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path
						d="m7 10 5 5 5-5"
					/></svg
				>
			</button>
		{:else}
			<a
				href="/resume"
				class="cursor-pointer rounded-sm bg-primary px-6 py-2 text-xs font-bold tracking-widest text-white uppercase transition-colors hover:bg-primary/80 hover:brightness-110"
			>
				Hire Me
			</a>
		{/if}
	</div>
</header>

<style>
	@media print {
		:global(header),
		:global(footer),
		:global(nav) {
			display: none;
		}
	}
</style>
