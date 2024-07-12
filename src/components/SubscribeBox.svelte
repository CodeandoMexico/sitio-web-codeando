<script>
	export let color;
	export let text;
	export let subscribeForm;
</script>

<div class="bg-[url('/grid-bg.png')] md:h-[500px] md:p-10 h-auto w-full container m-auto flex items-center drop-shadow-full" style="background-color: {color};">
	<div class="Frame52 w-full  flex-col justify-end items-center gap-8 inline-flex">
		<div class="text-center text-black text-5xl font-bold font-['Albert Sans'] leading-[63.44px]">
			{@html text}
		</div>
		{#if subscribeForm }
			<div class="Frame11 justify-between items-center inline-flex p-5">
				<div class="Input grow shrink basis-0 h-12 px-4 py-3 bg-neutral-50 rounded-tl-3xl rounded-bl-3xl border border-zinc-300 justify-start items-center flex">
					<input type="text" class="Email w-full grow shrink basis-0 text-black text-lg font-normal font-['Albert Sans'] leading-[27px]" />
				</div>
				<div class="Button px-5 py-2 bg-black rounded-tr-3xl h-12 rounded-br-3xl justify-center items-center gap-2 flex">
					<div class="Column justify-start items-center gap-2 flex">
						<div class="Button text-neutral-50 text-base font-bold font-['Albert Sans'] uppercase leading-normal">Suscribirme</div>
					</div>
				</div>
			</div>
		{/if }
	</div>
</div>