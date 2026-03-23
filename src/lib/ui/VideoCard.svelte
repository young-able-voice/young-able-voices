<script lang="ts">
  export let title: string;
  export let thumbnail: string | null = null;
  export let url: string;
  export let publishedAt: string | null = null;
</script>

<a href={url} target="_blank" rel="noopener noreferrer">
  <div class="group">
    <div class="overflow-hidden rounded-md bg-muted">
      {#if thumbnail}
        <img src={thumbnail} alt={title} class="w-full h-40 object-cover transition-transform group-hover:scale-105" />
      {:else}
        <div class="h-40 flex items-center justify-center text-muted-foreground">No image</div>
      {/if}
    </div>
    <h4 class="mt-2 text-sm font-semibold text-foreground transition-colors group-hover:text-accent-foreground">{title}</h4>
  </div>
</a>
