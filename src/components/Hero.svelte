<script>
	import { onMount } from 'svelte';
	export let accentColor = '#00D690';
	export let title = 'Tecnología cívica y datos para mejorar lo público';
	export let subtitle =
		'Generamos nuevas formas de participación ciudadana, abrimos conocimiento e innovamos en el espacio público a través de la tecnología.';

	let contrastedColor = '';

	onMount(async () => {
		const fontColorContrast = (await import('font-color-contrast')).default;
		contrastedColor = fontColorContrast(accentColor);
	});
</script>

<div class="hero" style="background: {accentColor}">
	<div class="container p-5">
		<div class="flex-col-reverse md:flex-row flex items-center gap-10">
			<div 	>
				<h1 class="text-5xl font-bold text-white">{title}</h1>
				<p class="py-6" 
				style={`color: ${contrastedColor}`}
				>
					{subtitle}
				</p>
			</div>
			<div class="flex justify-end">
				<img src="/example.png" alt="Hero" />
			</div>
		</div>
	</div>
</div>
