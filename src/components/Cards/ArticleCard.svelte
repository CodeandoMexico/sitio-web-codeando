<script>
  import Badge from "@/components/Badge.svelte";
  export let slug;
  export let title;
  export let date;
  export let image;
  export let tag;
  export let author

</script>

<a href="/blog/{slug}">
<div class="w-full">
  <div class="md:aspect-video aspect-square ">
    <img class="object-cover w-full h-full " src={image} alt="Card" />
  </div>
  <div class="space-y-2 mt-5">
    <div class="flex">
      {#if tag}
      <Badge text={tag}/>
      {/if}
    </div>
    <h2 class="font-extrabold text-xl">{title}</h2>
    <p class="text-sm">{author || ''}</p>
    <p class="text-sm text-gray-400">{date}</p>
  </div>
</div>
</a>