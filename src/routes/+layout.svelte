<script>
	import Footer from '@/components/Footer.svelte';
	import Navbar from '@/components/Navbar.svelte';
	import '../app.css';
	export const prerender = true;
</script>

<Navbar />

<slot />


<Footer />
