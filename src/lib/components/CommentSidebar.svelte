<script lang="ts">
	import { X } from 'lucide-svelte';
	import { Button } from '$lib/ui';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let {
		open = $bindable(false),
		title = '',
		id = '',
		url = ''
	} = $props();

	// Construct the full page URL if not provided, ensuring it's absolute
	// We use window.location.origin to get the base URL
	let pageUrl = $state('');

	$effect(() => {
		if (browser && id) {
			// Create a unique URL for this specific chat
			// We use the current path but add a query param for the specific video
			const baseUrl = window.location.origin + window.location.pathname;
			pageUrl = `${baseUrl}?v=${id}`;
		}
	});

	// Function to load the Cusdis script
	function loadCusdis() {
		if (!browser) return;
		
		const container = document.getElementById('cusdis-container');
		if (container) {
			container.innerHTML = ''; // Clear previous content

			// Create the wrapper div expected by Cusdis
			const div = document.createElement('div');
			div.id = 'cusdis_thread';
			div.dataset.host = 'https://cusdis.com';
			div.dataset.appId = '47c898f9-20d0-4876-b1ca-0bb014eb9eee';
			div.dataset.pageId = id;
			div.dataset.pageUrl = pageUrl;
			div.dataset.pageTitle = title;
			// Ensure the wrapper takes full width
			div.style.width = '100%';
			container.appendChild(div);

			// Re-inject the script to force execution
			const script = document.createElement('script');
			script.src = 'https://cusdis.com/js/cusdis.es.js';
			script.async = true;
			script.defer = true;
			container.appendChild(script);
		}
	}

	// Listen for Cusdis resize messages and manually update iframe height if needed
	// This is a workaround for cases where the script misses the message or timing issues
	function handleMessage(e: MessageEvent) {
		try {
			// Cusdis sends message as stringified JSON
			if (typeof e.data === 'string') {
				const data = JSON.parse(e.data);
				if (data.from === 'cusdis' && data.event === 'resize') {
					const iframe = document.querySelector('#cusdis_thread iframe') as HTMLIFrameElement;
					if (iframe) {
						iframe.style.height = data.data + 'px';
					}
				}
			}
		} catch (err) {
			// Ignore JSON parse errors from other messages
		}
	}

	$effect(() => {
		if (browser) {
			window.addEventListener('message', handleMessage);
			return () => {
				window.removeEventListener('message', handleMessage);
			};
		}
	});

	// Watch for changes in ID or Open state to reload comments
	$effect(() => {
		if (open && id && pageUrl) {
			// Small timeout to ensure DOM is ready
			setTimeout(loadCusdis, 0);
		}
	});

	function close() {
		open = false;
	}
</script>

{#if open}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
		aria-hidden="true"
		onclick={close}
	></div>

	<!-- Sidebar -->
	<div
		class="fixed inset-y-0 right-0 z-50 flex h-full w-full flex-col border-l bg-background shadow-lg transition-transform duration-300 ease-in-out sm:max-w-md"
		role="dialog"
		aria-modal="true"
		aria-label="Comments"
	>
		<div class="flex items-center justify-between p-6 pb-4">
			<h2 class="text-lg font-semibold">Comments</h2>
			<Button variant="ghost" size="icon" onclick={close} aria-label="Close comments">
				<X class="h-4 w-4" />
			</Button>
		</div>

		<div class="flex-1 overflow-y-auto px-6 pb-6">
			<div class="mb-4">
				<h3 class="font-medium text-sm text-muted-foreground">
					Topic: <span class="text-foreground">{title}</span>
				</h3>
			</div>
			
			<div id="cusdis-container">
				<!-- Cusdis will be injected here -->
			</div>
		</div>
	</div>
{/if}
