<script>
	export let icon = '/icon_example.png';
	export let title = 'Organizaciones';
	export let description =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';
	export let action = 'https://google.com';
	export let action_label = ' Hablemos';
</script>





	<div class="space-y-2">
		<img src={icon} alt="Icon" class="" />
	
		<h2 class="text-2xl font-bold">{title}</h2>
		<p class=" max-w-[300px]">
			{description}
		</p>
	
	
		<button class="Button w-[137px] h-12 px-6 py-2 bg-[#00D690] rounded-3xl justify-center items-center inline-flex">
			<span class="Button text-black text-base font-['Albert Sans'] uppercase leading-normal">	{action_label}</span>
		</button>
	
		
	</div>
