<script>
  	import { onMount } from 'svelte';
    export let text = 'Badge';
    export let color = '#0073F4';


let contrastedColor = '';

onMount(async () => {
		const fontColorContrast = (await import('font-color-contrast')).default;
		contrastedColor = fontColorContrast(color);
	});
</script>


<span class="rounded-full px-3 py-1 text-xs "
  style={
    `background-color: ${color};
    color: ${contrastedColor}`
  }
>
  {text}
</span>