<script>
	export let color;
	export let text;
	export let subscribeForm;
</script>

<div class="bg-[url('/grid-bg.png')] min-h-[350px] p-2 md:p-10 h-auto w-full container m-auto flex items-center drop-shadow-full" style="background-color: {color};">
	<div class="Frame52 w-full flex-col justify-center items-center md:p-5">
		<div class="text-center text-black text-2xl md:text-5xl font-bold font-['Albert Sans'] md:leading-[63.44px] md:p-5 text-wrap">
			<p>
				{@html text}
			</p>
		</div>
		{#if subscribeForm }
			<div class="flex justify-center mx-auto my-3">
				<form class="w-full max-w-sm">
					<div class="flex items-center">
						<input class="appearance-none border-none w-full text-gray-700 px-4 py-3 rounded-tl-3xl rounded-bl-3xl border border-zinc-300 leading-tight focus:outline-none" type="text" placeholder="correo@ejemplo.org" aria-label="Full name">
						<button class="flex-shrink-0 px-5 py-2 bg-black rounded-tr-3xl h-11 rounded-br-3xl text-sm border border-black text-white rounded text-base font-bold font-['Albert Sans'] uppercase leading-normal" type="button">
							Suscribirme
						</button>
					</div>
				</form>
			</div>
		{/if }
	</div>
</div>