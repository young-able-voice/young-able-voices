<script lang="ts">
  import { Hero, Container, Section, Heading, Button } from '$lib/ui';
  import { Card } from '$lib/components/ui/card';
  import { Separator } from '$lib/components/ui/separator';
  import { base } from '$app/paths';
  import VideoCard from '$lib/ui/VideoCard.svelte';
  export let data;
</script>

<svelte:head>
	<title>Apraxia Weekly Chats - Young Able Voices</title>
	<meta name="description" content="Weekly support chats for kids with childhood apraxia of speech (CAS)." />
</svelte:head>

<Hero title="Apraxia Weekly Chats" subtitle="Connect with others who understand speech challenges" />

<Section>
	<Container size="sm">
		<Heading>About Our Apraxia Group</Heading>
		<div class="mt-6 space-y-4">
			<p class="text-lg leading-relaxed text-foreground/80">
				Childhood apraxia of speech (CAS) can feel isolating, but you're not alone. Our weekly apraxia chats
				bring together kids who understand what it's like to work hard on speech sounds.
			</p>
			<p class="leading-relaxed text-foreground/80">
				Whether you want to share your progress, talk about challenges, or just hang out with others who "get
				it," this is the place for you.
			</p>
		</div>
		<Card class="mt-8 p-6">
			<h3 class="text-lg font-semibold">What We Talk About</h3>
			<ul class="mt-4 grid gap-2 text-sm sm:grid-cols-2">
				<li class="flex items-center gap-2 text-foreground/80">
					<span class="text-primary">•</span> Speech practice tips
				</li>
				<li class="flex items-center gap-2 text-foreground/80">
					<span class="text-primary">•</span> Dealing with frustration
				</li>
				<li class="flex items-center gap-2 text-foreground/80">
					<span class="text-primary">•</span> Celebrating progress
				</li>
				<li class="flex items-center gap-2 text-foreground/80">
					<span class="text-primary">•</span> School experiences
				</li>
				<li class="flex items-center gap-2 text-foreground/80">
					<span class="text-primary">•</span> Making friends
				</li>
				<li class="flex items-center gap-2 text-foreground/80">
					<span class="text-primary">•</span> Self-advocacy
				</li>
			</ul>
		</Card>
	</Container>
</Section>

<Separator />

<Section>
  <Container>
    <Heading class="mb-4">{data.meta.name}</Heading>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each data.items as v}
        <VideoCard title={v.title} thumbnail={v.thumbnail} url={v.url} publishedAt={v.publishedAt} />
      {/each}
    </div>
  </Container>

  <Separator />

  <Container size="sm" class="text-center">
    <Heading size="sm">Join the Apraxia Chat</Heading>
    <p class="mt-4 leading-relaxed text-foreground/80">
      Ready to connect? Fill out our interest form and we'll send you details about upcoming sessions.
    </p>
    <Button href="{base}/contact" class="mt-6"> Sign Up </Button>
  </Container>
</Section>
