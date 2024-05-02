<script>
	import Footer from '@/components/Footer.svelte';
	import Navbar from '@/components/Navbar.svelte';
	import '../app.css';
</script>

<Navbar />

<slot />
<div class="mt-20">

	<Footer />
</div>