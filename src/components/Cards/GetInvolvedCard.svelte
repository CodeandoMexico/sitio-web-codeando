<script>
  export let image;
  export let image_alt;
  export let text;
  export let url;
  export let label;
  export let color;
  import Button from "../Button.svelte";
</script>

<div class="flex flex-col justify-start gap-8 p-6">
  <img src={image} alt={image_alt} class="w-[250px]">
  <p class="text-xl font-light">{text}</p>
  <a href={url}>
    <Button action_label={label} color={color} />
  </a>
</div>