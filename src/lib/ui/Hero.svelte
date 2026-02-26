<script lang="ts">
	import Container from './Container.svelte';

	interface Props {
		title: string;
		subtitle?: string;
		ctaText?: string;
		ctaHref?: string;
	}

	let { title, subtitle, ctaText, ctaHref }: Props = $props();
</script>

<section class="border-b bg-blue-100/50 py-16 md:py-20 dark:bg-primary/20">
	<Container>
		<div class="mx-auto max-w-3xl text-center">
			<h1
				class="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
			>
				{title}
			</h1>
			{#if subtitle}
				<div class="mt-6 flex justify-center">
					<p
						class="relative inline-block max-w-2xl text-xl font-medium leading-relaxed text-yellow-600 md:text-2xl dark:text-yellow-400"
					>
						<!-- Soft glow behind the text for depth -->
						<span class="absolute -inset-2 blur-2xl bg-yellow-200/60 dark:bg-yellow-900/40"></span>
						<span class="relative">{subtitle}</span>
					</p>
				</div>
			{/if}
		</div>
	</Container>
</section>
