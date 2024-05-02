<script>
	export let image = '/photo_example.png';
	export let overlay = '';
</script>

<div class="shadow-image drop-shadow-2xl">
	<div class="absolute w-full h-full mix-blend-multiply opacity-50" style={`background-color: ${overlay};`}></div>
	<img class="drop-shadow-full mix-blend-multiply" src={image} alt="ShadowImage" />
</div>
