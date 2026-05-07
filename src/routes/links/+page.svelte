<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Young Able Voices | Links</title>
</svelte:head>

<div class="page-shell">
	<section class="link-grid">
		<a class="link-button" href="https://youngablevoices.org/" target="_blank" rel="noreferrer">Website</a>
		<a class="link-button" href="https://www.instagram.com/young_able_voices" target="_blank" rel="noreferrer">Instagram</a>
		<a class="link-button" href="https://www.facebook.com/youngablevoices" target="_blank" rel="noreferrer">Facebook</a>
		<a class="link-button" href="https://www.linkedin.com/in/elina-csapo-48b500275" target="_blank" rel="noreferrer">LinkedIn</a>
		<a class="link-button" href="https://youtube.com/@elinacsapo" target="_blank" rel="noreferrer">YouTube</a>
	</section>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background: linear-gradient(135deg, #003b5d 0%, #002a4a 100%);
	}

	.page-shell {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 20px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
		background: linear-gradient(135deg, #003b5d 0%, #002a4a 100%);
	}

	.link-grid {
		display: flex;
		flex-direction: column;
		gap: 16px;
		max-width: 600px;
		margin: 0 auto;
		width: 100%;
	}

	.link-button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 18px 30px;
		background: linear-gradient(135deg, #7bbee1 0%, #6ca5d4 100%);
		color: white;
		text-decoration: none;
		border-radius: 12px;
		font-size: 16px;
		font-weight: 600;
		transition: all 0.3s ease;
		box-shadow: 0 2px 8px rgba(0, 59, 93, 0.1);
	}

	.link-button:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(0, 59, 93, 0.2);
		border: 2px solid #fee01c;
	}

	.link-button:active {
		transform: translateY(-1px);
	}

	@media (max-width: 600px) {
		.link-button {
			padding: 16px 24px;
			font-size: 15px;
		}
	}
</style>