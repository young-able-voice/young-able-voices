<script lang="ts">
	import { Hero, Container, Section, Heading, Button } from '$lib/ui';
	import { Card } from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { base } from '$app/paths';
	import weeklyChats from '$lib/data/weekly-chats.json';
	import { MessageSquare } from 'lucide-svelte';
	import CommentSidebar from '$lib/components/CommentSidebar.svelte';

	// Filter out invalid IDs or empty entries if any
	const validChats = weeklyChats.filter(
		(chat) => chat.driveId && chat.driveId !== 'YOUR_GOOGLE_DRIVE_VIDEO_ID_HERE'
	);

	let isSidebarOpen = $state(false);
	let selectedChat = $state<{ title: string; driveId: string } | null>(null);

	function openComments(chat: (typeof validChats)[0]) {
		selectedChat = chat;
		isSidebarOpen = true;
	}

	function handleClose() {
		isSidebarOpen = false;
		// Small delay to allow transition before unmounting if needed, 
		// but since sidebar handles visibility with {#if open}, we can just set open=false.
		// However, to ensure a fresh mount next time if we want to reset state completely:
		// setTimeout(() => selectedChat = null, 300);
	}
</script>

<svelte:head>
	<title>Weekly Chats - Young Able Voices</title>
	<meta
		name="description"
		content="Join our weekly video chats to connect with peers facing similar challenges."
	/>
</svelte:head>

<Hero title="Weekly Chats & Videos" subtitle="Connect, share, and grow together" />

{#if validChats.length > 0}
	<Section class="bg-muted/30">
		<Container>
			<Heading class="mb-8">This Week's Videos</Heading>
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each validChats as chat}
					<div class="flex h-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
						<!-- 16:9 Aspect Ratio Container for Video -->
						<div class="relative w-full bg-black pt-[56.25%]">
							<iframe
								src="https://drive.google.com/file/d/{chat.driveId}/preview"
								class="absolute left-0 top-0 h-full w-full border-0"
								allow="autoplay"
								title={chat.title}
								allowfullscreen
							></iframe>
						</div>
						<div class="flex flex-1 flex-col p-6">
							{#if chat.date}
								<div class="mb-2 text-sm text-muted-foreground">{chat.date}</div>
							{/if}
							<h3 class="mb-3 text-xl font-semibold">{chat.title}</h3>
							{#if chat.description}
								<p class="flex-1 text-sm text-muted-foreground">{chat.description}</p>
							{/if}
							<div class="mt-4 flex items-center justify-end pt-4">
								<Button variant="outline" size="sm" onclick={() => openComments(chat)}>
									<MessageSquare class="mr-2 h-4 w-4" />
									Comments
								</Button>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</Container>
	</Section>
	<Separator />
{/if}

{#if selectedChat}
	<CommentSidebar bind:open={isSidebarOpen} title={selectedChat.title} id={selectedChat.driveId} />
{/if}

<Section>
	<Container size="sm">
		<Heading>How It Works</Heading>
		<div class="mt-6 space-y-4">
			<p class="text-lg leading-relaxed text-foreground/80">
				Each week we have a specific video posted to get the chat rolling. This video will be posted a few days
				prior to each chat and will give you an idea of where the conversation will begin.
			</p>
			<p class="leading-relaxed text-foreground/80">
				When you join, you can certainly just listen in if you feel a little shy—no problem! When you feel like
				you would like to share and speak to the group, you are always welcome too.
			</p>
		</div>
	</Container>
</Section>

<Separator />

<Section>
	<Container size="sm">
		<Heading>Expectations for Weekly Chats</Heading>
		<Card class="mt-6 p-6">
			<ul class="space-y-3">
				<li class="flex items-start gap-3">
					<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</span>
					<span class="text-foreground/80">Be respectful and kind to everyone in the group</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</span>
					<span class="text-foreground/80">Listen when others are sharing—everyone's voice matters</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">3</span>
					<span class="text-foreground/80">What's shared in the group stays in the group—keep it confidential</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">4</span>
					<span class="text-foreground/80">It's okay to just listen! You don't have to share if you're not comfortable</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">5</span>
					<span class="text-foreground/80">Parents are welcome to join and support their kids</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">6</span>
					<span class="text-foreground/80">Have fun and make new friends!</span>
				</li>
			</ul>
		</Card>
	</Container>
</Section>

<Separator />

<Section>
	<Container size="sm" class="text-center">
		<Heading size="sm">Ready to Join?</Heading>
		<p class="mt-4 leading-relaxed text-foreground/80">
			To reach out to find about the next chat
		</p>
		<Button href="{base}/contact" class="mt-6"> Sign Up </Button>
	</Container>
</Section>
