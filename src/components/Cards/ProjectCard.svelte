<script>
	import Badge from "../Badge.svelte";
</script>


<div class="Card w-full min-h-[519px] flex-col justify-start items-start inline-flex">
  <img class="Image4 self-stretch h-[250px] w-full" src="https://placehold.co/457x200" />
  <div class="Frame5 self-stretch min-h-[269px] h-full flex-col justify-start pt-3 items-start gap-4 flex">
    <div class="Heading self-stretch min-h-[41px] flex-col justify-end items-start gap-8 flex">
      <div class="Heading self-stretch text-black text-[31.25px] font-bold font-['Albert Sans'] leading-10">
        Mapatón Ciudadano
      </div>
    </div>
    <div class="Descripion self-stretch justify-start items-start inline-flex">
      <div class="Description grow shrink basis-0 text-black text-lg font-normal font-['Albert Sans'] leading-[27px]">
        Es un proyecto para mapear todas las rutas de transporte público del país de forma colaborativa, usando aplicaciones móviles y mediante campañas de mapeo.
      </div>
    </div>
    <div class="Button justify-start items-center gap-2 inline-flex">
      <div class="ConoceMS text-black text-base font-bold font-['Albert Sans'] leading-normal">
        Fundación Avina
      </div>
      <div class="ExternalLink w-6 h-6 relative"></div>
    </div>
    <div class="flex flex-wrap gap-2">
      <Badge text="Datos abiertos" color="#6596FF"/>
      <Badge text="Código abierto" color="#F1B6B8"/>
      <Badge text="Plataforma opensource" color="#F2D301"/>
    </div>
    <div class="flex gap-3 my-2">
      <a href="#" target="_blank" class="border-2 border-black uppercase text-bold bg-black text-white px-5 py-2">
        Sitio web
      </a>
      <a href="#" target="_blank" class="border-2 border-black uppercase text-bold bg-white text-black px-5 py-2">
        Repositorio
      </a>
    </div>
  </div>
</div>