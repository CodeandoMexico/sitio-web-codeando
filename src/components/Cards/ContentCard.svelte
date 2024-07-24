<script>
  export let title;
  export let description;
  export let image;
  export let link;
</script>


<div class="Card w-full min-h-[519px] bg-zinc-100 flex-col justify-start items-start inline-flex">
  <img class="Image4 self-stretch h-[250px]" src={image} />
  <div class="Frame5 self-stretch min-h-[269px] h-full p-8 flex-col justify-end items-start gap-4 flex">
    <div class="Heading self-stretch min-h-[41px] flex-col justify-end items-start gap-8 flex">
      <div class="Heading self-stretch text-black text-[31.25px] font-bold font-['Albert Sans'] leading-10">
        {title}
      </div>
    </div>
    <div class="Descripion self-stretch justify-start items-start inline-flex">
      <div class="Description grow shrink basis-0 text-black text-lg font-normal font-['Albert Sans'] leading-[27px]">
        {description}
      </div>
    </div>
    <div class="Button justify-start items-center gap-2 inline-flex">
      <!-- <div class="ConoceMS text-black text-base font-bold font-['Albert Sans'] uppercase leading-normal">
        Conoce más
      </div> -->
      <div class="ExternalLink w-6 h-6 relative"></div>
    </div>
  </div>
</div>