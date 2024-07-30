<script>
  import Hero from "@/components/Hero.svelte";
  import RecursosCard from "@/components/Cards/RecursosCard.svelte";
  export let data
  const { recursos } = data
  console.log(recursos)
  let conocimiento = [
            {
              "name": "Curso de datos abiertos y hacking cívico", 
              "content": 
                [
                  {
                    "name": "Curso de datos abiertos y hacking cívico",
                    "author": "Lab león", 
                    "url": "https://google.com/"
                  }
                ]
            },
            {
              "name": "Jornadas de hacking cívico (CMX)", 
              "content": 
                [
                  {
                    "name": "Mapeando el transporte público",
                    "author": "Rolando Drouaillet", 
                    "url": "https://google.com/"
                  },
                  {
                    "name": "Ciencia de Datos para el bien",
                    "author": "Ricardo Alanís", 
                    "url": "https://google.com/"
                  },
                  {
                    "name": "Plataformas Participativas",
                    "author": "Viridiana Hernández", 
                    "url": "https://google.com/"
                  },
                  {
                    "name": "Datos para no-programadores (OpenRefine)",
                    "author": "Edgar Gutiérrez", 
                    "url": "https://google.com/"
                  }                  
                ]
            }
          ] 
  let herramientas = [
    {"name": "Awesome Civic Tech", "url": "https://google.com/"},
    {"name": "Awesome Open Data", "url": "https://google.com/"},
    {"name": "COVID Estados", "url": "https://google.com/"}
  ]
  let proyectos = [
    {"name": "Mapaton Ciudadano", "url": "https://google.com/"},
    {"name": "Informe bajo Lupa", "url": "https://google.com/"},
    {"name": "Hackers Cívicos", "url": "https://google.com/"}
  ]
  let eventos = [
    {"name": "Civic Hack Nights", "url": "https://google.com/"},
    {"name": "DataCon", "url": "https://google.com/"},
    {"name": "Open Data Day", "url": "https://google.com/"}
  ]
  let oportunidades = [
    {"name": "Slack Chambas", "url": "https://google.com/"},
    {"name": "Github Chambas", "url": "https://google.com/"},
    {"name": "Job Boards Internacionales", "url": "https://google.com/"},
    {"name": "Code for All Slack Board", "url": "https://google.com/"}
  ]
  let otros = [
    {"name": "Civic tech Guide", "url": "https://google.com/"}
  ]
</script>

<Hero accentColor="#FF6D53" image="/recursos.png" title="Recursos" subtitle="Conocimiento que hemos construido a lo largo del tiempo sobre tecnología cívica, datos abiertos y más." />

<div id="filtros" class="container mx-auto flex justify-start md:justify-center gap-3 my-8 flex-wrap p-3">
  <p class="uppercase font-bold inline">Todo</p>
  <p class="uppercase font-bold inline">Conocimiento</p>
  <p class="uppercase font-bold inline">Herramientas</p>
  <p class="uppercase font-bold inline">Proyectos</p>
  <p class="uppercase font-bold inline">Eventos</p>
  <p class="uppercase font-bold inline">Oportunidades</p>
  <p class="uppercase font-bold inline">Otros</p>
</div>
<section id="conocimiento" class="container mx-auto my-6 p-3">
  <h2 class="text-5xl font-bold"><img src="/recursos-conocimiento.png" class="inline h-[50px] my-5" alt="Conocimiento">
    Conocimiento</h2>
  {#each conocimiento as subseccion }
    <div class="my-5">
      <h3 class="text-3xl font-bold my-5">{subseccion.name}</h3>
      <div class="flex flex-wrap">
        {#each subseccion.content as item }
        <RecursosCard title={item.name} url={item.url} author={item.author}/>
        {/each}
      </div>
    </div>
  {/each}
</section>

<section id="Herramientas" class="container mx-auto my-6 p-3">
  <h2 class="text-5xl font-bold"><img src="/recursos-herramientas.png" class="inline h-[50px] my-5" alt="Herramientas">
    Herramientas</h2>
  <div class="flex flex-wrap my-5">
    {#each herramientas as item }
      <RecursosCard title={item.name} url={item.url}/>
    {/each}
  </div>
</section>

<section id="Proyectos" class="container mx-auto my-6 p-3">
  <h2 class="text-5xl font-bold"><img src="/recursos-proyectos.png" class="inline h-[50px] my-5" alt="Proyectos">
    Proyectos</h2>
  <div class="flex flex-wrap my-5">
    {#each proyectos as item }
      <RecursosCard title={item.name} url={item.url}/>
    {/each}
  </div>
</section>


<section id="Eventos" class="container mx-auto my-6 p-3">
  <h2 class="text-5xl font-bold"><img src="/recursos-eventos.png" class="inline h-[50px] my-5" alt="Eventos">
    Eventos</h2>
  <div class="flex flex-wrap my-5">
    {#each eventos as item }
      <RecursosCard title={item.name} url={item.url}/>
    {/each}
  </div>
</section>

<section id="Oportunidades" class="container mx-auto my-6 p-3">
  <h2 class="text-5xl font-bold"><img src="/recursos-oportunidades.png" class="inline h-[50px] my-5" alt="Oportunidades">
    Oportunidades</h2>
  <div class="flex flex-wrap my-5">
    {#each oportunidades as item }
      <RecursosCard title={item.name} url={item.url}/>
    {/each}
  </div>
</section>


<section id="Otros" class="container mx-auto my-6 p-3">
  <h2 class="text-5xl font-bold">
    Otros</h2>
  <div class="flex flex-wrap my-5">
    {#each otros as item }
      <RecursosCard title={item.name} url={item.url}/>
    {/each}
  </div>
</section>