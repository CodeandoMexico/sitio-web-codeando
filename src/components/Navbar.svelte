<script lang="ts">
	import { principalMenuStore } from '@/store';

	let isMenuOpen = false;

	function closeHambMenu() {
		document.getElementById('hamburger-menu')?.classList.toggle('hidden');
		isMenuOpen = false;
	}
	function openHambMenu() {
		document.getElementById('hamburger-menu')?.classList.toggle('hidden');
		isMenuOpen = true;
	}

	function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && isMenuOpen) {
      closeHambMenu()
    }
  }

	let menuItems = [
		{ name: 'Proyectos', url: '/proyectos' },
		{ name: 'Blog', url: '/blog' },
		{ name: 'Comunidad', url: '/comunidad' },
		{ name: 'Recursos', url: '/recursos' },
		{ name: 'Acerca de', url: '/acerca' }
	];
</script>

<svelte:window on:keydown={handleKeydown} />

<nav class="absolute w-full py-5 max-lg:bg-white">
	<div class="flex container m-auto items-center px-5">
		<a href="/" class="rounded-sm transition ease-in duration-150 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cmxnuanced">
			<span class="sr-only">Inicio</span>
			<img src="/img/logo-cmx.svg" style="height: 44px;" alt="Codeando México" />
		</a>
		<div class="flex-grow"></div>

		<ul class="gap-2 hidden lg:flex">
			{#each menuItems as item}
				<li>
					<a
						class={`p-2 rounded-sm transition ease-in duration-150 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cmxnuanced hover:underline hover:gray-800 uppercase font-bold 
						${$principalMenuStore.urlActive.includes(item.url) ? $principalMenuStore.color : ''}
						${$principalMenuStore.urlActive.includes(item.url) ? $principalMenuStore.background : ''}`.trim()}
						href={item.url}
					>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>

		{#if !isMenuOpen}
			<button
				aria-label="Abrir menú principal"
				type="button"
				onclick={openHambMenu}
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 lg:hidden hover:bg-gray-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cmxgreen"
			>
				<svg aria-hidden="true" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
				</svg>
			</button>
		{/if}
	</div>
</nav>
<div id="hamburger-menu" class="lg:hidden hidden" role="dialog" aria-modal="true">

	<div class={['fixed inset-0 transition duration-500 ease-in-out bg-stone-900/50', isMenuOpen?'opacity-1':'opacity-0']} ></div>

	<div class="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
		<div class="flex items-center justify-between">
			<a href="/" onclick={closeHambMenu} class="-m-1.5 p-1.5 rounded-sm hover:bg-gray-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cmxgreen">
				<span class="sr-only">Inicio</span>
				<img class="h-8 w-auto" src="/img/logo-cmx.svg" style="width: 100%;" alt="Codeando México" />
			</a>
			<button 
				aria-label="Cerrar menú" 
				type="button" 
				onclick={closeHambMenu} 
				class="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cmxgreen"
			>
				<svg aria-hidden="true" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
		<div class="mt-6 flow-root">
			<div class="my-6 py-6">
				{#each menuItems as item}
					<a
						href={item.url}
						onclick={closeHambMenu}
						class={`my-2 block px-3 py-2 rounded-sm transition text-cmxblack ease-in duration-150 hover:bg-gray-100 hover:underline focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cmxgreen font-semibold leading-7 uppercase ${
							$principalMenuStore.urlActive.includes(item.url)
								? 'bg-cmxgreen'
								: ''
						}`}
					>
						{item.name}
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
