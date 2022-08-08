<template>
  <div v-if="loaded" class="flex gap-xxs items-center">
    <div class="text-center">
      <h4>{{ displayDays }}</h4>
      <p class="text-sm">days</p>
    </div>
    <h4 style="margin-top: -22px;">:</h4>
    <div class="text-center">
      <h4>{{ displayHours }}</h4>
      <p class="text-sm">hours</p>
    </div>
    <h4 style="margin-top: -22px;">:</h4>
    <div class="text-center">
      <h4>{{ displayMinutes }}</h4>
      <p class="text-sm">minutes</p>
    </div>
    <h4 style="margin-top: -22px;">:</h4>
    <div class="text-center">
      <h4>{{ displaySeconds }}</h4>
      <p class="text-sm">seconds</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  year: { type: Number },
  month: { type: Number },
  day: { type: Number },
  hour: { type: Number },
  minute: { type: Number },
  second: { type: Number },
  millisecond: { type: Number },
})

const loaded = ref(false)
 
const displayDays = ref(0)
const displayHours = ref(0)
const displayMinutes = ref(0)
const displaySeconds = ref(0)

const _seconds = computed(() => 1000 )
const _minutes = computed(() => _seconds.value * 60 )
const _hours = computed(() => _minutes.value * 60 )
const _days = computed(() => _hours.value * 24 )

const end = computed(() => {
  return new Date(
    props.year,
    props.month,
    props.day,
    props.hour,
    props.minute,
    props.second,
    props.millisecond
  )
})

function formatNumber(number) {
  return number < 10 ? '0' + number : number
}
  
function showRemaining() {
  const timer = setInterval(() => {
    const now = new Date()
    const distance = end.value.getTime() - now.getTime()
    
    if (distance < 0) {
      clearInterval(timer)
      return
    }
    
    const days = Math.floor((distance / _days.value))
    const hours = Math.floor((distance % _days.value) / _hours.value)
    const minutes = Math.floor((distance % _hours.value) / _minutes.value)
    const seconds = Math.floor((distance % _minutes.value) / _seconds.value)
    
    displayDays.value = formatNumber(days)
    displayHours.value = formatNumber(hours)
    displayMinutes.value = formatNumber(minutes)
    displaySeconds.value = formatNumber(seconds)
    
    loaded.value = true
  }, 1000)
}

onMounted(() => {
  showRemaining()
})
</script>

<style lang="scss">
</style>
