<script>
	import Button from '@/components/Button.svelte';
	import ShadowImage from '@/components/ShadowImage.svelte';
	export let icon = '/icon_example.png';
	export let title = 'Organizaciones';
	export let description =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';
</script>

<div class="space-y-2">
	<img src={icon} alt="Icon" class="" />

	<h2 class="text-2xl font-bold">{title}</h2>
	<p class=" max-w-[300px]">
		{description}
	</p>

	<Button action="https://google.com" action_label="Hablemos" />
	
</div>
