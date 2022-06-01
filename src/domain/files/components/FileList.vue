<template>
    <ul class="dow-list">
      <li v-for="(file, index) in files" :key="index">
        <div class="dow-list__item padding-xxs" @click="select(file)">
          <div class="flex flex-column gap-xs flex-row@xs justify-between@xs items-center@xs">
            <div class="flex items-center">
              <FileIcon :type="file.type" :source="file.src"/>
              
              <!-- file info -->
              <div>
                <p class="text-sm line-height-1 margin-bottom-xxxs">{{ file.name }}</p>
                <ul class="dow-list__metadata-list text-sm text-xs@md color-contrast-medium">
                  <li>Type: {{ file.type }}</li>
                  <li>Size: {{ formatFileSize(file.size) }}</li>
                </ul>
              </div>
            </div>

            <!-- actions -->
            <div class="padding-right-xxxxs@xs"></div>
          </div>
        </div>
      </li>
    </ul>
</template>

<style lang="scss">
.dow-list {
  display: grid;
  gap: var(--space-xs);
}

.dow-list__item {
  border-radius: var(--radius-md);
  background: var(--color-bg);
  box-shadow: var(--inner-glow), var(--shadow-sm);
}

.dow-list__metadata-list {
  display: flex;
  align-items: center;
  line-height: 1;

  > * {
    display: flex;
    align-items: center;
  }

  > *:not(:last-child)::after { /* dot separator */
    content: '';
    display: block;
    flex-shrink: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: currentColor;
    margin: 0 var(--space-xxs);
    opacity: 0.5;
  }
}
</style>
