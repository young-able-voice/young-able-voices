<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		class?: string;
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let { class: className = '', children, ...restProps }: Props = $props();
</script>

<h2 class={cn('font-bold tracking-tight text-5xl', className)} {...restProps}>
	{#if children}{@render children()}{/if}
</h2>
