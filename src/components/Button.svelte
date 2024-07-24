<script>
	import { onMount } from 'svelte';
	export let action;
	export let action_label;
	export let color = "#00D690";
	let contrastedColor = '';

onMount(async () => {
		const fontColorContrast = (await import('font-color-contrast')).default;
		contrastedColor = fontColorContrast(color);
	});
</script>

<button class="Button min-w-[137px] h-12 px-6 py-2 rounded-3xl justify-center items-center inline-flex" style={
	`background-color: ${color};
	color: ${contrastedColor}`
}>
  <span class="Button text-base font-['Albert Sans'] uppercase leading-normal font-bold">	{action_label}</span>
</button>