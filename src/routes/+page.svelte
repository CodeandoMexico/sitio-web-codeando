<script>
	import Hero from '@/components/Hero.svelte';
	import ShadowImage from '@/components/ShadowImage.svelte';
	import ShadowImageCard from '@/components/Cards/ShadowImageCard.svelte';
	import TitleDescription from '@/components/TitleDescription.svelte';
	import IconTextAction from '@/components/IconTextAction.svelte';
	import ContentCard from '@/components/Cards/ContentCard.svelte';
	import SubscribeBox from '@/components/SubscribeBox.svelte';
	import ArticleCard from '@/components/Cards/ArticleCard.svelte';
	import Button from '@/components/Button.svelte';
</script>

<Hero />

<div class="container px-5 mx-auto">
	<div class="flex-col md:flex-row flex my-10 gap-20 items-center">
		<ShadowImage />
		<TitleDescription title="Trabajamos de manera abierta y colaborativa" description="con gobiernos, activistas, periodistas, diseñadoras, desarrolladoras y más. Nos enfocamos en la parte tecnológica que acompaña al impacto cívico y social." />
	</div>
</div>


<div class="flex-col flex my-10 gap-20 bg-[#E6F8EE] p-10 ">
	<div class="container m-auto md:grid grid-cols-2 ">
		<IconTextAction />
		<IconTextAction />
	</div>
</div>

<section id="en-que-estamos-trabajando" class="my-8 py-8">
	<div class="text-center">
		<TitleDescription title="En qué estamos trabajando" description="Todos nuestros proyectos son open source, esto significa que cualquiera es libre de utilizar el código, datos y otros materiales de acuerdo a la licencia que contenga." />
	</div>
	
	<div class="grid grid-cols-3 container m-auto gap-5">
		<ContentCard/>
		<ContentCard/>
		<ContentCard/>
	</div>
	<div class="text-center my-8">
		<Button action="/proyectos" action_label="Ver todos los proyectos" />
	</div>
</section>



<div class="p-10 m-auto">
	<SubscribeBox />
</div>

<div class="text-center my-8">
	<TitleDescription title="Blog" />
</div>

<div class="grid grid-cols-3 container my-8 mx-auto gap-5">
	<ArticleCard/>
	<ArticleCard/>
	<ArticleCard/>
</div>

<div class="text-center m-auto">
	<Button action="http://blog.codeandomexico.org/" action_label="Ir al blog" />
</div>