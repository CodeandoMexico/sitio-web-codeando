<script>
  export let data
  const { post } = data
</script>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content={post.meta_description} />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.meta_description} />
  <meta property="og:image" content={`https://content.codeandomexico.org/assets/${post.post_image}`} />
</svelte:head>

<section class="container m-auto p-3 prose">
  <h1 class="text-center  font-bold">{post.title}</h1>
  <p class="text-center text-sm text-gray-400">{new Date(post.date_created).toLocaleString('es-MX')}</p>
</section>
<img src={`https://content.codeandomexico.org/assets/${post.post_image}`} alt="Imagen de blog" class="w-full max-h-[450px] object-cover" />
<section class="container m-auto p-3 prose prose-blockquote:text-2xl prose-blockquote:border-green-400">
  <p>{@html post.content}</p>
</section>
