<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';

	interface Props {
		name: string;
		role: string;
		focus: string;
		bio: string[];
		image?: string;
		showImage?: boolean;
		orientation?: 'vertical' | 'horizontal';
	}

	let {
		name,
		role,
		focus,
		bio,
		image,
		showImage = true,
		orientation = 'vertical'
	}: Props = $props();
</script>

<Card class="p-6">
	<div class="flex flex-col {orientation === 'horizontal' ? 'md:flex-row md:gap-8' : ''}">
		{#if showImage && image}
			<div
				class="aspect-square w-full max-w-[200px] shrink-0 overflow-hidden rounded-xl bg-muted {orientation ===
				'horizontal'
					? 'md:max-w-[300px]'
					: ''}"
			>
				<img src={image} alt={name} class="h-full w-full object-cover" />
			</div>
		{/if}
		<div class="flex flex-col {orientation === 'horizontal' ? 'justify-center w-full' : ''}">
			<h3 class="mt-4 text-xl font-semibold {orientation === 'horizontal' ? 'md:mt-0' : ''}">
				{name}
			</h3>
			<p class="text-sm text-muted-foreground">{role}</p>
			<Separator class="my-4" />
			<div class="space-y-3">
				{#each bio as paragraph}
					<p class="text-sm leading-relaxed text-foreground/80">{paragraph}</p>
				{/each}
			</div>
		</div>
	</div>
</Card>
