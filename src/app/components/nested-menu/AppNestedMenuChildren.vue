<template>
    <div>
        <li
            v-for="(item, index) in items" :key="index"
            :class="isToggled(item.slug) ? 'nested-menu__item--expanded' : ''"
            class="nested-menu__item"
        >
            <a 
              @click.prevent="set(title, item.slug)" 
              :class="query[title] === item.slug ? 'nested-menu__link--current' : ''" 
              class="nested-menu__link" 
              href=""
            >
              <span class="nested-menu__text">{{ item.title }}</span>
            </a>

            <!-- Arrow -->
            <button 
              v-if="item.children && item.children.length" 
              @click="toggle(item.slug)" 
              class="reset nested-menu__sublist-control"
            >
                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <!-- Recursive children -->
            <ul v-if="item.children && item.children.length" class="nested-menu__list">
                <AppNestedMenuChildren :title="title" :items="item.children"/>
            </ul>
        </li>
    </div>
</template>

<script>
export default {
  name: 'AppNestedMenuChildren'
}
</script>

<script setup>
import useToggleMultiple from '@/app/composables/useToggleMultiple.js'
import useQuery from '@/app/composables/useQuery.js'

const { toggle, isToggled } = useToggleMultiple()
const { query, set, unset } = useQuery()

const props = defineProps({
  title: { 
    type: String
  },
  items: { 
    type: Object 
  },
})
</script>
