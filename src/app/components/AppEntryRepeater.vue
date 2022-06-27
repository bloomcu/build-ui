<template>
<div class="entry-repeater" data-repeater-input-name="user[n]">
  <ul class="grid gap-xs">
    <li>
      <div class="grid gap-xs">
        <input class="form-control col bg-white" type="text" name="user[0][name]" id="user[0][name]" placeholder='Do this...'>

        <button class="btn btn--subtle padding-x-xs col-content" type="button">
          <svg class="icon" viewBox="0 0 20 20">
            <title>Remove item</title>

            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <line x1="1" y1="5" x2="19" y2="5"/>
              <path d="M7,5V2A1,1,0,0,1,8,1h4a1,1,0,0,1,1,1V5"/>
              <path d="M16,8l-.835,9.181A2,2,0,0,1,13.174,19H6.826a2,2,0,0,1-1.991-1.819L4,8"/>
            </g>
          </svg>
        </button>
      </div>
    </li>
  </ul>
  
  <button class="btn btn--primary margin-top-xs width-100%" type="button">Add item</button>
</div>
</template>

<script setup>

</script>
