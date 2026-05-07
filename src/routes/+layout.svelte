<script lang="ts">
	import '../app.css';
	import { theme } from '$lib/stores/theme.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';
	let { children } = $props();
	$effect(() => {
		theme.value;
	});

	let isLinksPage = $derived(page.url.pathname.startsWith('/links'));
</script>

<svelte:head>
	<script>
		(function() {
			const theme = localStorage.getItem('yav-theme') || 'system';
			const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
			if (isDark) {
				document.documentElement.classList.add('dark');
			}
		})();
	</script>
</svelte:head>

<div class="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">
	{#if !isLinksPage}
		<Nav />
	{/if}
	<main class="flex-1">{@render children()}</main>
	{#if !isLinksPage}
		<Footer />
	{/if}
</div>
