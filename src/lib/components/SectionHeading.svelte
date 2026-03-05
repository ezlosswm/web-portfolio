<script lang="ts">
	interface Props {
		heading: string;
		title: string;
		size?: 'default' | 'title';
	}

	let { heading, title, size = 'default' }: Props = $props();
</script>

<div class="pb-16">
	<p class="text-sm leading-5 font-bold tracking-[4.2px] text-primary uppercase">
		{heading}
	</p>
	<h1
		class="{size === 'default'
			? 'text-6xl -tracking-[3px] md:text-8xl'
			: 'text-4xl -tracking-[1.8px] md:text-6xl'} font-bold uppercase"
	>
		{title}
	</h1>
</div>
