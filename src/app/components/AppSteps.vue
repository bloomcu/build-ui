<template>
  <div class="steps text-sm@md" aria-label="Multi-step indicator">
    <ol class="steps__list">
      <li 
        :class="step === 'brand' ? 'step--current' : ''"
        class="step cursor-pointer"
        @click="changeStep(0)"
      >
        <p class="step__label">Brand</p>

        <span class="step__separator" aria-hidden="true">
          <svg class="icon" viewBox="0 0 16 16"><polyline fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="6.5,3.5 11,8 6.5,12.5 "></polyline></svg>
        </span>

        <div class="step__circle" aria-hidden="true">
          <!-- <svg v-if="step < 2" class="icon" viewBox="0 0 16 16"><polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="1,9 5,13 15,3 "></polyline></svg> -->
          <span>1</span>
        </div>
      </li>

      <li 
        :class="step === 'logo' ? 'step--current' : ''"
        class="step cursor-pointer"
        @click="changeStep(2)"
      >
        <p class="step__label">Logo</p>

        <span class="step__separator" aria-hidden="true">
          <svg class="icon" viewBox="0 0 16 16"><polyline fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="6.5,3.5 11,8 6.5,12.5 "></polyline></svg>
        </span>

        <div class="step__circle" aria-hidden="true">
          <!-- <svg v-if="step < 4" class="icon" viewBox="0 0 16 16"><polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="1,9 5,13 15,3 "></polyline></svg> -->
          <span>2</span>
        </div>
      </li>

      <li 
        :class="step === 'font' ? 'step--current' : ''"
        class="step cursor-pointer"
        @click="changeStep(4)"
      >
        <p class="step__label">Fonts</p>

        <span class="step__separator" aria-hidden="true">
          <svg class="icon" viewBox="0 0 16 16"><polyline fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="6.5,3.5 11,8 6.5,12.5 "></polyline></svg>
        </span>

        <div class="step__circle" aria-hidden="true">3</div>
      </li>
      
      <li 
        :class="step === 'photo' ? 'step--current' : ''"
        class="step cursor-pointer"
        @click="changeStep(7)"
      >
        <p class="step__label">Images</p>

        <span class="step__separator" aria-hidden="true">
          <svg class="icon" viewBox="0 0 16 16"><polyline fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="6.5,3.5 11,8 6.5,12.5 "></polyline></svg>
        </span>

        <div class="step__circle" aria-hidden="true">4</div>
      </li>
      
      <li 
        :class="step === 'other' ? 'step--current' : ''"
        class="step cursor-pointer"
        @click="changeStep(9)"
      >
        <p class="step__label">Other</p>

        <div class="step__circle" aria-hidden="true">5</div>
      </li>
    </ol>
  </div>
</template>

<script setup>
const props = defineProps({
  step: { type: String }
})

function changeStep(number) {
    emit('changeStep', number)
}

const emit = defineEmits(['changeStep'])
</script>

<style lang="scss">
:root {
  --steps-number: 5;
  --step-separator-line-stroke: 3px;
  --step-separator-line-gap: 3px;
  --step-circle-size: 32px;
  --step-circle-font-size: 16px;
}

.steps {
  background-color: var(--color-bg-dark);
  padding: var(--space-md);
  border-radius: var(--radius-md);
}

.steps__list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: calc(var(--space-xs) * -1);
}

.step {
  display: inline-block; // flex fallback
  display: inline-flex;
  align-items: center;
  margin-bottom: var(--space-xs); // equal to steps__list margin-bottom 👆
}

.step__label {
  color: inherit;
  text-decoration: none;
}

.step--completed .step__label, .step--current .step__label {
  color: var(--color-primary);
}

.step--completed .step__label {
  text-decoration: underline;
}

.step__separator { // on small devices -> icon separator
  margin: 0 var(--space-xs);

  // flex fallback
  display: inline-block;
  vertical-align: middle;

  .icon {
    display: block;
  }
}

.step__circle {
  display: none;
}

@include breakpoint(md) {
  .steps {
    background-color: transparent;
    padding: calc(var(--step-circle-size)/2) 0 0;
    border-radius: 0px;
  }

  .steps__list {
    margin-bottom: initial;
    align-items: flex-start;

    @supports (grid-area: auto) {
      display: grid;
      align-items: start;
      grid-template-columns: repeat(var(--steps-number), 1fr);
    }
  }

  .step {
    float: left; // flex fallback
    width: calc(100% / var(--steps-number));
    justify-content: center;
    text-align: center;
    position: relative;
    margin-bottom: initial;
    padding: 0 var(--space-xs);

    @supports (grid-area: auto) {
      width: auto;
    }
  }

  .step__label {
    display: inline-block; // flex fallback
    margin-top: calc(var(--space-xxs) + var(--step-circle-size)/2);
  }

  .step__separator {
    // on bigger devices -> line connecting two adjacent steps
    position: absolute;
    top: calc(var(--step-separator-line-stroke) * -1/2);
    left: calc(50% + var(--step-circle-size)/2 + var(--step-separator-line-gap));
    height: var(--step-separator-line-stroke);
    width: calc(100% - var(--step-circle-size) - var(--step-separator-line-gap)*2);
    margin: 0;
    background-color: var(--color-contrast-lower);
    // hide text - if there's any
    color: transparent;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;

    .step--completed & {
      background-color: var(--color-primary);
    }
  }
  
  .step__circle {
    // flex fallback
    display: inline-block;
    line-height: var(--step-circle-size);

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-contrast-lower);
    width: var(--step-circle-size);
    height: var(--step-circle-size);
    border-radius: 50%;
    position: absolute;
    left: calc(50% - var(--step-circle-size)/2);
    top: calc(var(--step-circle-size) * -1/2);
    font-size: var(--step-circle-font-size);

    .icon {
      width: var(--step-circle-font-size);
      height: var(--step-circle-font-size);
    }

    .step--completed &, .step--current & {
      background-color: var(--color-primary);
      color: var(--color-white);
      @include fontSmooth;
    }
  }
}

/* screen reader */
.step--completed .step__label::after,
.step--current .step__label::after {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
}

.step--completed .step__label::after {
  content: 'step completed';
}

.step--current .step__label::after {
  content: 'step current';
}
</style>
