<script lang="ts">
  import { Hero, Container, Section, Heading, MediaCard } from '$lib/ui';
  import VideoCard from '$lib/ui/VideoCard.svelte';
  export let data;
</script>

<svelte:head>
	<title>Media & Press - Young Able Voices</title>
	<meta name="description" content="Articles, podcasts, and media featuring Young Able Voices." />
</svelte:head>

<Hero title="Media & Press" subtitle="Stories about Young Able Voices" />

<Section>
    <Container>
      <div class="mb-8">
        <Heading class="mb-4">{data.yav.meta.name}</Heading>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {#each data.yav.items as v}
            <VideoCard title={v.title} thumbnail={v.thumbnail} url={v.url} publishedAt={v.publishedAt} />
          {/each}
        </div>
      </div>

      <div>
        <Heading class="mb-4">{data.apraxia.meta.name}</Heading>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {#each data.apraxia.items as v}
            <VideoCard title={v.title} thumbnail={v.thumbnail} url={v.url} publishedAt={v.publishedAt} />
          {/each}
        </div>
      </div>
    </Container>
</Section>
