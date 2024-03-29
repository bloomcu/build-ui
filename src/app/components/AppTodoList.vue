<template>
  <fieldset class="margin-bottom-md">
    <ul class="todo flex flex-column gap-xxxs">
      <li v-for="(todo, index) in todos" :key="index">
        <label class="todo__item">
          <input class="todo__input" type="checkbox" id="checkbox-1">

          <span class="todo__checkbox" aria-hidden="true">
            <svg class="icon" viewBox="0 0 16 16">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 8l4 4 8-8" />
            </svg>
          </span>

          <span class="todo__label text-sm">{{ todo.title }}</span>
        </label>
      </li>
    </ul>
  </fieldset>
</template>

<script setup>
const props = defineProps({
  todos: { 
    type: Array,
  },
})
</script>

<style lang="scss">
:root {
  --todo-list-checkbox-size: 20px; /* checkbox size */
  --todo-list-checkbox-icon-size: 16px; /* checkbox icon size */
  --todo-list-checkbox-margin-right: var(--space-xxs); /* gap between custom input and content */
}

.todo {}

.todo__item {
  display: inline-block;
  position: relative;
  padding-left: calc(var(--todo-list-checkbox-size) + var(--todo-list-checkbox-margin-right));
  user-select: none;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;

      .todo__checkbox {
        box-shadow: inset 0 0 0 2px alpha(var(--color-contrast-higher), 0.3);
      }

      .todo__input:checked ~ .todo__checkbox,
      .todo__input:focus ~ .todo__checkbox {
        box-shadow: inset 0 0 0 2px var(--color-primary-darker);
      }

      .todo__input:checked:focus ~ .todo__checkbox {
        box-shadow: inset 0 0 0 2px lightness(var(--color-primary), 0.95), 0 0 0 3px alpha(var(--color-primary), 0.2);
      }
    }
  }
}

/* native checkbox input */
.todo__input {
  position: absolute;
  padding: 0;
  margin: 0;
  opacity: 0;
  pointer-events: none;
}

/* custom checkbox */
.todo__checkbox {
  display: inline-flex;
  background-color: alpha(var(--color-contrast-higher), 0.15);
  width: var(--todo-list-checkbox-size);
  height: var(--todo-list-checkbox-size);
  border-radius: 4px;

  position: relative;
  vertical-align: middle;
  top: -0.1em;
  margin-left: calc(-1 * (var(--todo-list-checkbox-size) + var(--todo-list-checkbox-margin-right)));
  margin-right: var(--todo-list-checkbox-margin-right);

  transition: background-color .2s, transform .2s, box-shadow .2s;

  .icon {
    display: block;
    margin: auto;
    color: var(--color-white); /* icon color */
    font-size: var(--todo-list-checkbox-icon-size);
  }

  .icon > * {
    transition: stroke-dashoffset .3s;
    stroke-dasharray: 18;
    stroke-dashoffset: 18;
  }
}

.todo__input:focus ~ .todo__checkbox {
  background-color: alpha(var(--color-primary), 0.25);
}

.todo__input:checked ~ .todo__checkbox {
  background-color: var(--color-primary);

  .icon > * {
    stroke-dasharray: 18;
    stroke-dashoffset: 0;
  }
}

.todo__input:checked:focus ~ .todo__checkbox {
  box-shadow: inset 0 0 0 0 lightness(var(--color-primary), 0.75), 0 0 0 3px alpha(var(--color-primary), 0.2);
}

.todo__input:active ~ .todo__checkbox {
  transform: scale(0.9);
}

.todo__label {
  background-repeat: no-repeat;
  will-change: background-size;
  background-size: 0% 100%;
  background-image: linear-gradient(transparent 50%, currentColor 50%, currentColor calc(50% + 1px), transparent calc(50% + 1px));

  transition: background-size .3s var(--ease-in-out), color .3s;
}

.todo__input:checked ~ .todo__label {
  background-size: 100% 100%;
  color: var(--color-contrast-medium);
} 
</style>
