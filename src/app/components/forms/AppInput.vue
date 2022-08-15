<template>
  <div class="margin-bottom-sm">
    <label v-if="label" class="form-label margin-bottom-xxs" :for="label">{{ label }}</label>
    <input 
      :value="modelValue"
      @input="updateValue($event.target.value)"
      :type="type" 
      :name="label" 
      :placeholder="placeholder"
      :required="required"
      :autofocus="autofocus"
      class="form-control width-100%" 
    >
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: { 
    type: String
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String
  },
  placeholder: {
    type: String
  },
  required: {
    type: Boolean,
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

function updateValue(value) {
  emit('update:modelValue', value)
}
</script>
