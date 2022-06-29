<template>
  <div>
    <div class="flex justify-between padding-sm border-bottom">
      <span class="text-sm">Style Tile Brief</span>
    </div>
    
    <div class="flex container max-width-xxl">
      <aside class="position-relative z-index-1 width-100% border-right max-width-xxxxs padding-y-sm padding-x-md">
        <AppNestedMenu :items="steps" @selected="changeStep"/>
      </aside>
      
      <main class="position-relative z-index-1 flex-grow height-auto padding-y-md padding-x-lg">
        <div class="text-component">
          <!-- Intro -->
          <div v-if="currentStep == 0">
            <p class="text-xs text-uppercase letter-spacing-lg color-primary">Intro</p>
            <h1>Style Tile Brief</h1>
            <p class="text-sm max-width-sm">You will be designing a style tile for a credit union. This document has the information you need to design the style tile, including a Sketch template for you to use.</p>
          
            <div class="flex gap-xs margin-top-md padding-y-md border-top">
              <button @click="changeStep(1)" class="btn btn--primary">Start</button>
            </div>
          </div>
          
          <!-- Step 1: Sketch file -->
          <div v-if="currentStep == 1">
            <p class="text-xs text-uppercase letter-spacing-lg color-primary">Step 1</p>
            <h1>Download the Sketch template</h1>
            <p>Instead of starting from scratch, we created a template for you:</p>
            <a href="https://drive.google.com/drive/folders/0B7-Yu0hS6RztS0diaXhCZjR4Mk0?resourcekey=0-9WlEQYapCWrmbEaIRG-tgw&usp=sharing" target="_blank" class="btn btn--primary" @click="sketchTemplateDownloaded = true">
              <svg class="icon margin-right-xxs" viewBox="0 0 24 22"><g><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path fill="#FDB300" d="M5.236.715L12 0l6.764.715L24 7.745 12 21.717 0 7.744z"></path><g transform="translate(0 7.744)"><path fill="#EA6C00" d="M4.86 0L12 13.974 0 0z"></path><path fill="#EA6C00" transform="matrix(-1 0 0 1 36 0)" d="M16.86 0L24 13.974 12 0z"></path><path fill="#FDAD00" d="M4.86 0h14.28L12 13.974z"></path></g><g><path fill="#FDD231" d="M12 0L5.236.715l-.375 7.03z"></path><path fill="#FDD231" transform="matrix(-1 0 0 1 31.14 0)" d="M19.14 0l-6.764.715L12 7.745z"></path><path fill="#FDAD00" transform="matrix(-1 0 0 1 42.764 0)" d="M18.764 7.744L24 .715l-.376 7.03z"></path><path fill="#FDAD00" d="M0 7.744L5.236.715l-.375 7.03z"></path><path id="Path" fill="#FEEEB7" d="M12 0L4.86 7.744h14.28z"></path></g></g></g></g></svg>
              Download Sketch style tile template
            </a>
            
            <div class="flex gap-xs margin-top-md padding-y-md border-top">
              <button @click="changeStep(0)" class="btn btn--subtle">Back</button>
              <button v-if="!sketchTemplateDownloaded" class="btn btn--primary btn--disabled">Next</button>
              <button v-else @click="changeStep(2)" class="btn btn--primary">Next</button>
            </div>
          </div>
          
          <!-- Step 2: Watch video -->
          <div v-if="currentStep == 2">
            <p class="text-xs text-uppercase letter-spacing-lg color-primary">Step 2</p>
            <h1>Watch the video tutorial</h1>
            <iframe src="https://player.vimeo.com/video/711021881?h=f8e6454dd7" width="1024" height="576" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            
            <div class="flex gap-xs margin-top-md padding-y-md border-top">
              <button @click="changeStep(1)" class="btn btn--subtle">Back</button>
              <button @click="changeStep(3)" class="btn btn--primary">Next</button>
            </div>
          </div>
          
          <!-- Step 3: Review the brand -->
          <div v-if="currentStep == 3">
            <p class="text-xs text-uppercase letter-spacing-lg color-primary">Step 3</p>
            <h1>Review the brand guide</h1>
            <p>Review the brand guide so your style tile fits the credit union’s brand.</p>
            
            <h3 class="padding-y-xxxs">Brand Guide</h3>
            <div class="grid gap-md">
              <div class="col-6">
                <FileList :files="fileStore.filterByGroup('brand')"/>
              </div>
              <div class="col-6">
                <p><strong>Do's:</strong></p>
                <p v-for="item in organizationMetaStore.filterByKey('brand-do')" :key="item.id">
                  <span class="margin-right-xxxs">✅</span> {{ item.value }}
                </p>
                <p><strong>Don'ts:</strong></p>
                <p v-for="item in organizationMetaStore.filterByKey('brand-dont')" :key="item.id">
                  <span class="margin-right-xxxs">❌</span> {{ item.value }}
                </p>
              </div>
            </div>
            
            <div class="flex gap-xs margin-top-md padding-y-md border-top">
              <button @click="changeStep(2)" class="btn btn--subtle">Back</button>
              <button @click="changeStep(4)" class="btn btn--primary">Next</button>
            </div>
          </div>
          
          <!-- Step 4: Assets -->
          <div v-if="currentStep == 4">
            <p class="text-xs text-uppercase letter-spacing-lg color-primary">Step 4</p>
            <h1>Download assets</h1>
            <p>Download the credit union's brand assets.</p>
            
            <!-- Logo -->
            <h3 class="padding-y-xxxs">Logo</h3>
            <div class="grid gap-md">
              <div class="col-6">
                <FileList :files="fileStore.filterByGroup('logos')"/>
              </div>
              <div class="col-6">
                <p><strong>Do's:</strong></p>
                <p v-for="item in organizationMetaStore.filterByKey('logos-do')" :key="item.id">
                  <span class="margin-right-xxxs">✅</span> {{ item.value }}
                </p>
                <p><strong>Don'ts:</strong></p>
                <p v-for="item in organizationMetaStore.filterByKey('logos-dont')" :key="item.id">
                  <span class="margin-right-xxxs">❌</span> {{ item.value }}
                </p>
              </div>
            </div>
            
            <!-- Fonts -->
            <h3 class="padding-y-xxxs">Fonts</h3>
            <div class="grid gap-md">
              <div class="col-6">
                <FileList :files="fileStore.filterByGroup('desktop-fonts')"/>
              </div>
              <div class="col-6">
                <p><strong>Do's:</strong></p>
                <p v-for="item in organizationMetaStore.filterByKey('fonts-do')" :key="item.id">
                  <span class="margin-right-xxxs">✅</span> {{ item.value }}
                </p>
                <p><strong>Don'ts:</strong></p>
                <p v-for="item in organizationMetaStore.filterByKey('fonts-dont')" :key="item.id">
                  <span class="margin-right-xxxs">❌</span> {{ item.value }}
                </p>
              </div>
            </div>
            
            <!-- Photography -->
            <h3 class="padding-y-xxxs">Photography</h3>
            <div class="grid gap-md">
              <div class="col-6">
                <FileList :files="fileStore.filterByGroup('photos')"/>
              </div>
              <div class="col-6">
                <p><strong>Do's:</strong></p>
                <p v-for="item in organizationMetaStore.filterByKey('photos-do')" :key="item.id">
                  <span class="margin-right-xxxs">✅</span> {{ item.value }}
                </p>
                <p><strong>Don'ts:</strong></p>
                <p v-for="item in organizationMetaStore.filterByKey('photos-dont')" :key="item.id">
                  <span class="margin-right-xxxs">❌</span> {{ item.value }}
                </p>
              </div>
            </div>
            
            <!-- Other -->
            <div v-if="fileStore.filterByGroup('other').length" >
              <h3 class="padding-y-xxxs">Other</h3>
              <div class="grid gap-md">
                <div class="col-6">
                  <FileList :files="fileStore.filterByGroup('other')"/>
                </div>
                <div class="col-6">
                  <p><strong>Do's:</strong></p>
                  <p v-for="item in organizationMetaStore.filterByKey('other-do')" :key="item.id">
                    <span class="margin-right-xxxs">✅</span> {{ item.value }}
                  </p>
                  <p><strong>Don'ts:</strong></p>
                  <p v-for="item in organizationMetaStore.filterByKey('other-dont')" :key="item.id">
                    <span class="margin-right-xxxs">❌</span> {{ item.value }}
                  </p>
                </div>
              </div>
            </div>
            
            <div class="flex gap-xs margin-top-md padding-y-md border-top">
              <button @click="changeStep(3)" class="btn btn--subtle">Back</button>
              <button @click="changeStep(5)" class="btn btn--primary">Next</button>
            </div>
          </div>
          
          <!-- Step 5: Create -->
          <div v-if="currentStep == 5">
            <p class="text-xs text-uppercase letter-spacing-lg color-primary">Step 5</p>
            <h1>Get creative!</h1>
            <p>Design the style tile by applying fonts, colors, images and other elements to the Sketch template. Get creative! <strong>The goal is to stay on-brand while elevating the design to be the best it can be</strong>.</p>
            
            <div class="flex gap-xs margin-top-md padding-y-md border-top">
              <button @click="changeStep(4)" class="btn btn--subtle">Back</button>
              <button @click="changeStep(6)" class="btn btn--primary">Do's, Don'ts, and Maybes</button>
            </div>
          </div>
          
          <!-- Step 6: Guidelines -->
          <div v-if="currentStep == 6">
            <p class="text-xs text-uppercase letter-spacing-lg color-primary">Guidelines</p>
            <h1>Do's, Don'ts, and Maybes</h1>
            <p>Things you should do, things you shouldn’t do, and things you might do.</p>
            
            <div class="max-width-sm">
              <h4 class="padding-top-sm">Do's</h4>
              <p>Things you should do.</p>
              <p class="text-sm"><strong>DO use the Sketch template.</strong> Please use the Sketch template provided.</p>
              <p class="text-sm"><strong>DO get creative with the styles.</strong> While you shouldn’t create new layout blocks in the Sketch template, you should get creative with the ways you work within the brand guidelines to style the blocks provided. </p>
              <p class="text-sm"><strong>DO stay within the brand guidelines.</strong> Make sure to stay within the brand guidelines, but get creative with how you use them.</p>
              
              <h4 class="padding-top-sm">Don'ts</h4>
              <p>Things you shouldn't do.</p>
              <p class="text-sm"><strong>DON’T share the assets or your work anywhere—not even in your portfolio.</strong> You signed an NDA before viewing this project because it is Private and strictly confidential. Make sure to not share any of the assets in this brief or the work you produce for this project because we don’t want you to experience any legal consequences. Thanks!</p>
              <p class="text-sm"><strong>DON’T create the style tile outside of Sketch.</strong> The style tile must be completed using the Sketch template. Please do not create the style tile in any other application such as Illustrator, Photoshop, etc. (Also see <a href="#maybes">“MAYBE use other applications for images and graphics</a>.”</p>
              <p class="text-sm"><strong>DON’T modify the layout blocks in the Sketch template.</strong> Please style the layout blocks (e.g., Heroes, Features, etc.) in the template without changing the blocks in any way. Get creative with the ways you style the blocks, but please do not modify their structures.</p>
              <p class="text-sm"><strong>DON’T use fonts that are not in the brand guidelines.</strong> Only use the fonts included in the brief. The only time you should recommend new fonts is if the brief specifically asks for that.</p>
              <p class="text-sm"><strong>DON’T use colors that are not in the brand guidelines.</strong> Only use the colors included in the brief. That said, if the brand guidelines include lots of different colors, you’ll have to select just a few of them. (The only time you should recommend new colors is if the brief specifically asks for that.)</p>
              <p class="text-sm"><strong>DON’T modify the logo.</strong> Use the logo as-is. (Logo modifications can be problematic because the changes would have to be applied across all our client’s brand assets and they almost certainly don’t want to do that as part of a website redesign project.)</p>
              
              <h4 class="padding-top-sm" id="maybes">Maybes</h4>
              <p>Things you might do.</p>
              <p class="text-sm"><strong>MAYBE use other applications for images and graphics.</strong> The style tile must be completed in Sketch. That said, some brand assets may be provided in file formats other than Sketch (e.g., .ai, .psd). It’s ok to use other applications to create and manipulate graphics and images; just add those assets into Sketch afterward and complete the style tile in Sketch.</p>
              <p class="text-sm"><strong>MAYBE source new images.</strong> If there are image files included with the brand assets, then please use those images primarily. However, if there are no image files included (or not enough), then you may source new images. Just make sure images consistently follow the brand guidelines. (If you need to source new images, we recommend <a href="https://www.twenty20.com/" target="_blank">Twenty20</a>, <a href="https://unsplash.com/" target="_blank">Unsplash</a> and <a href="https://www.stocksy.com/" target="_blank">Stocksy</a>. In your designs, you can use free downloadable previews so you don’t have to purchase any images. If we want to use the images you select, then we’ll buy them later.)</p>
              <p class="text-sm"><strong>MAYBE explore more than one style tile.</strong> You are welcome to submit more than one concept. Of course, in the end, we will choose only one of your directions to move forward with.</p>
            </div>
            
            <div class="flex gap-xs margin-top-md padding-y-md border-top">
              <button @click="changeStep(5)" class="btn btn--subtle">Back</button>
            </div>
          </div>
          
        </div>
      </main>
      
      <FileModal/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFileStore } from '@/domain/files/store/useFileStore'
import { useOrganizationMetaStore } from '@/domain/organizations/store/useOrganizationMetaStore'

// import LayoutDefault from '@/app/layouts/LayoutDefault.vue'
import AppNestedMenu from '@/app/components/nested-menu/AppNestedMenu.vue'
import FileList from '@/domain/files/components/FileList.vue'
import FileModal from '@/domain/files/components/file-modal/FileModal.vue'

const fileStore = useFileStore()
const organizationMetaStore = useOrganizationMetaStore()
const currentStep = ref(0)

const steps = [
  {
    id: 0, 
    title: 'Intro',
  },
  {
    id: 1, 
    title: 'Step 1 - Template',
  },
  {
    id: 2, 
    title: 'Step 2 - Video',
  },
  {
    id: 3, 
    title: 'Step 3 - Brand',
    // children: [
    //   {
    //     id: 4,
    //     title: 'Brand Guide'
    //   }
    // ]
  },
  {
    id: 4, 
    title: 'Step 4 - Assets'
  },
  {
    id: 5, 
    title: 'Step 5 - Create'
  },
  {
    id: 6, 
    title: 'Guidelines'
  },
]

const sketchTemplateDownloaded = ref(false)

function changeStep(id) {
    currentStep.value = id
}

onMounted(() => {
  fileStore.index()
  organizationMetaStore.index()
})
</script>
