<template>
  <div>
    <p class="text-xs text-uppercase letter-spacing-lg color-primary">More info</p>
    <h1>More Do’s and Don'ts</h1>
    <p>More things you should do, things you shouldn’t do, and things you might do.</p>

    <div class="max-width-sm">
      <h4 class="padding-top-sm">Do's</h4>
      <p>Things you should do.</p>
      <p class="text-sm"><strong>DO use the Sketch template.</strong> Please use the Sketch template provided.</p>
      <p class="text-sm"><strong>DO get creative with the styles.</strong> While you shouldn’t create new layout blocks in the Sketch template, you should get creative with the ways you work within the brand guidelines to style the blocks provided. </p>
      <p class="text-sm"><strong>DO stay within the brand guidelines.</strong> Make sure to stay within the brand guidelines, but get creative with how you use them.</p>
      
      <h4 class="padding-top-sm">Don'ts</h4>
      <p>Things you shouldn't do.</p>
      <p class="text-sm"><strong>DON’T delete the variables, blocks, or anything else from the Sketch template.</strong>During the contest, you can submit just the style tile portion of the Sketch file. However, if you win the contest, we will need all of the variables, blocks, etc. that are in the Sketch file, so please don’t delete any of them.</p>
      <p class="text-sm"><strong>DON’T share the assets or your work anywhere—not even in your portfolio.</strong> You signed an NDA before viewing this project because it is Private and strictly confidential. Make sure to not share any of the assets in this brief or the work you produce for this project because we don’t want you to experience any legal consequences. Thanks!</p>
      <p class="text-sm"><strong>DON’T create the style tile outside of Sketch.</strong> The style tile must be completed using the Sketch template. Please do not create the style tile in any other application such as Illustrator, Photoshop, etc. (Also see <a href="#maybes">“MAYBE use other applications for images and graphics</a>.”</p>
      <p class="text-sm"><strong>DON’T modify the layout blocks in the Sketch template.</strong> Please style the layout blocks (e.g., Heroes, Features, etc.) in the template without changing the blocks in any way. Get creative with the ways you style the blocks, but please do not modify their structures.</p>
      
      <h4 class="padding-top-sm" id="maybes">Maybes</h4>
      <p>Things you might do.</p>
      <p class="text-sm"><strong>MAYBE use other applications for images and graphics.</strong> The style tile must be completed in Sketch. That said, some brand assets may be provided in file formats other than Sketch (e.g., .ai, .psd). It’s ok to use other applications to create and manipulate graphics and images; just add those assets into Sketch afterward and complete the style tile in Sketch.</p>
      <p class="text-sm"><strong>MAYBE source new images.</strong> If there are image files included with the brand assets, then please use those images primarily. However, if there are no image files included (or not enough), then you may source new images. Just make sure images consistently follow the brand guidelines. (If you need to source new images, we recommend <a href="https://www.twenty20.com/" target="_blank">Twenty20</a>, <a href="https://unsplash.com/" target="_blank">Unsplash</a> and <a href="https://www.stocksy.com/" target="_blank">Stocksy</a>. In your designs, you can use free downloadable previews so you don’t have to purchase any images. If we want to use the images you select, then we’ll buy them later.)</p>
      <p class="text-sm"><strong>MAYBE explore more than one style tile.</strong> You are welcome to submit more than one concept. Of course, in the end, we will choose only one of your directions to move forward with.</p>
    </div>

    <div class="flex gap-xs margin-top-md padding-y-md border-top">
      <button @click="toggle(5)" class="btn btn--subtle">Back</button>
    </div>
  </div>
</template>

<script setup>
import useToggle from '@/app/composables/useToggle.js'
const { toggle, toggled } = useToggle()
</script>
