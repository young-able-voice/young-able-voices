<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		light?: boolean;
		class?: string;
	}

	let { light = false, class: className = '' }: Props = $props();
</script>

<div class={cn('flex items-center gap-3', className)}>
	<div class="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg p-1">
		<img src="/favicon.jpg" alt="YAV Logo" class="h-full w-full rounded-md object-cover" />
	</div>
	<span class={cn('text-lg font-semibold', light ? 'text-primary-foreground' : 'text-foreground')}>
		Young Able Voices
	</span>
</div>
