<script>
  import ArticleCard from "@/components/Cards/ArticleCard.svelte";
  import BlogHero from "@/components/BlogHero.svelte";
</script>

<div class="container m-auto p-3 space-y-5 pt-16">
<h1 class="text-5xl text-green-400 font-bold">Blog</h1>
  <BlogHero />
</div>
<div class="container m-auto p-3">
  <div class="md:grid grid-cols-3 gap-5">
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
  </div>
</div>