<script>
	import Hero from '@/components/Hero.svelte';
	import ShadowImage from '@/components/ShadowImage.svelte';
	import ShadowImageCard from '@/components/Cards/ShadowImageCard.svelte';
	import TitleDescription from '@/components/TitleDescription.svelte';
	import IconTextAction from '@/components/IconTextAction.svelte';
	import ContentCard from '@/components/Cards/ContentCard.svelte';
	import SubscribeBox from '@/components/SubscribeBox.svelte';

</script>

<Hero />

<div class="container px-5 mx-auto">
	<div class="flex-col md:flex-row flex my-10 gap-20 items-center">
		<ShadowImage />
		<TitleDescription />
	</div>
</div>


<div class="flex-col flex my-10 gap-20 bg-[#E6F8EE] p-10 ">
	<div class="container m-auto md:grid grid-cols-2 ">
		<IconTextAction />
		<IconTextAction />
	</div>
</div>

<div class="grid grid-cols-3 container m-auto gap-5">
	<ContentCard/>
	<ContentCard/>
	<ContentCard/>
</div>


<div class="text-center">
	<TitleDescription />
</div>

<div class="grid grid-cols-3 container m-auto gap-5">
	<ContentCard/>
	<ContentCard/>
	<ContentCard/>
</div>


<div class="p-10 m-auto">
	<SubscribeBox />
</div>


<div class="container m-auto">
	<div class="flex-col md:flex-row flex my-10 gap-20 items-center">
		<ShadowImageCard />
	
	</div>
</div>

<Hero accentColor='#0073F4'
title="Acerca de "
	subtitle="Somos una organización sin fines de lucro, basada en una comunidad abierta."
/>



