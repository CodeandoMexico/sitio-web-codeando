<script>
	export let title;
	export let description;
</script>

<div class="">
	<h1 class="text-5xl font-bold">{title}</h1>
	{#if description }
	<p class="py-6">
		{description}
	</p>
	{/if }
</div>
