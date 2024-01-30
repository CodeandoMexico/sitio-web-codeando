<script>
	export let icon = '/icon_example.png';
	export let title = 'Organizaciones';
	export let description =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';
	export let action = 'https://google.com';
	export let action_label = 'Ver más';
</script>

<div class="space-y-2">
	<img src={icon} alt="Icon" class="" />

	<h2 class="text-2xl font-bold">{title}</h2>
	<p class=" max-w-[300px]">
		{description}
	</p>

	<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
		{action_label}
	</button>
</div>
