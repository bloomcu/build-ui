<template>
  <div class="grid gap-lg">
    <div class="col-6 padding-md radius-lg bg-white shadow-md">
      <p class="margin-bottom-sm"><span class="color-success text-bold">Do</span> this:</p>
      <AppEntryRepeater/>
    </div>
    <div class="col-6 padding-md radius-lg bbg-white shadow-md">
      <p class="margin-bottom-sm"><span class="color-error text-bold">Don't</span> do this:</p>
      <AppEntryRepeater/>
    </div>
  </div>
  
  <!-- <div class="rate-cont bg-contrast-lower bg-opacity-50% radius-md js-rate-cont">
    <div class="padding-md">
      <div class="text-center flex flex-column gap-xs flex-row@sm items-center@sm justify-between@sm">
        <p>Was this page helpful?</p>
      
        <ul class="inline-flex flex-center">
          <li class="margin-right-xxs">
            <div class="confetti-btn inline-block position-relative js-confetti-btn">
              <input class="sr-only rate-cont__native-input" type="radio" name="rate-cont-options" id="rate-cont-option-yes">
      
              <label class="rate-cont__custom-input rate-cont__custom-input--yes js-confetti-btn__btn" for="rate-cont-option-yes">
                <svg class="icon rate-cont__icon" viewBox="0 0 16 16" aria-hidden="true"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="0.5" y="7.5" width="3" height="8"></rect><path d="M5.5,15.5h6.9a2,2,0,0,0,1.952-1.566l1.111-5A2,2,0,0,0,13.507,6.5H9.5v-4a2,2,0,0,0-2-2l-2,6"></path></g></svg>
          
                <span>Yes</span>
      
                <svg class="confetti-btn__icon color-primary js-confetti-btn__icon" viewBox="0 0 16 16" aria-hidden="true"><circle class="conf-btn-svg-item-0" fill="currentColor" cx="8" cy="8" r="8"/><path class="conf-btn-svg-item-1" fill="currentColor" d="M11.6.7A4.331,4.331,0,0,0,8,2.7,4.331,4.331,0,0,0,4.4.7,4.439,4.439,0,0,0,0,5.1C0,9.5,8,16,8,16s8-6.5,8-10.9A4.439,4.439,0,0,0,11.6.7Z"/><path class="conf-btn-svg-item-2" fill="currentColor" d="M11.6.7A4.331,4.331,0,0,0,8,2.7,4.331,4.331,0,0,0,4.4.7,4.439,4.439,0,0,0,0,5.1C0,9.5,8,16,8,16s8-6.5,8-10.9A4.439,4.439,0,0,0,11.6.7Z"/><path class="conf-btn-svg-item-3" fill="currentColor" d="M11.6.7A4.331,4.331,0,0,0,8,2.7,4.331,4.331,0,0,0,4.4.7,4.439,4.439,0,0,0,0,5.1C0,9.5,8,16,8,16s8-6.5,8-10.9A4.439,4.439,0,0,0,11.6.7Z"/><path class="conf-btn-svg-item-4" fill="currentColor" d="M11.6.7A4.331,4.331,0,0,0,8,2.7,4.331,4.331,0,0,0,4.4.7,4.439,4.439,0,0,0,0,5.1C0,9.5,8,16,8,16s8-6.5,8-10.9A4.439,4.439,0,0,0,11.6.7Z"/><path class="conf-btn-svg-item-5" fill="currentColor" d="M11.6.7A4.331,4.331,0,0,0,8,2.7,4.331,4.331,0,0,0,4.4.7,4.439,4.439,0,0,0,0,5.1C0,9.5,8,16,8,16s8-6.5,8-10.9A4.439,4.439,0,0,0,11.6.7Z"/></svg>
              </label>
            </div>
          </li>
      
          <li>
            <input class="sr-only rate-cont__native-input" type="radio" name="rate-cont-options" id="rate-cont-option-no">
      
            <label class="rate-cont__custom-input rate-cont__custom-input--no" for="rate-cont-option-no">
              <svg class="icon rate-cont__icon" viewBox="0 0 16 16" aria-hidden="true"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="0.5" y="0.5" width="3" height="8"></rect><path d="M5.5.5h6.9a2,2,0,0,1,1.952,1.566l1.111,5A2,2,0,0,1,13.507,9.5H9.5v4a2,2,0,0,1-2,2l-2-6"></path></g></svg>
        
              <span>No</span>
            </label>
          </li>
        </ul>
      </div>
    </div>

    <div class="overflow-hidden padding-bottom-md padding-x-md">
      <label class="inline-block text-sm color-contrast-medium margin-bottom-xs" for="rate-cont-msg">Share your feedback:</label>

      <textarea class="form-control width-100%" rows="4" name="rate-cont-msg" id="rate-cont-msg"></textarea>

      <div class="margin-top-xs text-right">
        <input focus class="btn btn--primary" type="button" value="Submit">
      </div>
    </div>
  </div> -->
</template>

<script setup>
import AppEntryRepeater from '@/app/components/AppEntryRepeater.vue'

// const props = defineProps({
//   folder: { type: String },
//   group: { type: String }
// })
</script>

<style lang="scss">
.rate-cont {}

.rate-cont__custom-input {
  display: inline-flex;
  align-items: center;

  background-color: alpha(var(--color-contrast-higher), 0.15);
  padding: var(--space-xxs) var(--space-xs);
  border-radius: var(--radius-md);

  color: var(--color-contrast-high);
  line-height: 1;
  user-select: none;

  cursor: pointer;

  transition: background .2s, color .2s, box-shadow .2s;

  &:hover {
    background-color: alpha(var(--color-contrast-higher), 0.2);
  }

  .rate-cont__native-input:checked + & {
    background-color: var(--color-contrast-higher);
    color: var(--color-bg);
  }

  .rate-cont__native-input:focus + & {
    box-shadow: 0 0 0 3px alpha(var(--color-contrast-higher), 0.2);
  }
}

.rate-cont__icon {
  margin-right: var(--space-xxs);

  .rate-cont__native-input:checked + .rate-cont__custom-input--yes &,
  .rate-cont__native-input:checked + .rate-cont__custom-input--no & {
    animation-duration: .6s;
    animation-fill-mode: forwards;
    will-change: transform;
    transform-origin: left center;
  }

  .rate-cont__native-input:checked + .rate-cont__custom-input--yes & {
    animation-name: rate-cont-anim-yes;
  }

  .rate-cont__native-input:checked + .rate-cont__custom-input--no & {
    animation-name: rate-cont-anim-no;
  }
}

@keyframes rate-cont-anim-yes {
  0% {
    transform: rotate(0) scale(1);
  }

  20% {
    transform: rotate(10deg) scale(1.1);
  }

  50% {
    transform: rotate(-25deg) scale(1.2);
  }

  80% {
    transform: rotate(5deg) scale(1.2);
  }

  100% {
    transform: rotate(0) scale(1.2);
  }
}

@keyframes rate-cont-anim-no {
  0% {
    transform: rotate(0) scale(1);
  }

  20% {
    transform: rotate(-10deg) scale(1.1);
  }

  50% {
    transform: rotate(25deg) scale(1.2);
  }

  80% {
    transform: rotate(-5deg) scale(1.2);
  }

  100% {
    transform: rotate(0) scale(1.2);
  }
}
</style>
