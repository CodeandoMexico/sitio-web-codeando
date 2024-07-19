<script>
  import ArticleCard from "@/components/Cards/ArticleCard.svelte";
  import BlogHero from "@/components/BlogHero.svelte";
  export let data
  const { blog, posts } = data
</script>

<div class="container m-auto px-3 ">
  <div class="my-7">
    <h1 class="text-5xl text-green-400 font-bold">Blog</h1>
  </div>
  <BlogHero 
    slug={blog.highlight_post.slug}
    title={blog.highlight_post.title}
    tag={blog.highlight_post.tags[0]}
    date={blog.highlight_post.date_created}
    image={`https://content.codeandomexico.org/assets/${blog.highlight_post.post_image}`}
  />
</div>
<div class="container m-auto p-3">
  <div class="md:grid grid-cols-3 gap-5">
    {#each posts as post}
      <ArticleCard
        slug={post.slug}
        title={post.title}
        tag={post.tags[0]}
        author={post.user_created.first_name + ' ' + post.user_created.last_name}
        date={new Date(post.date_created).toLocaleString('es-MX')}
        image={`https://content.codeandomexico.org/assets/${post.post_image}`}
      />
    {/each}
    
  </div>
</div>