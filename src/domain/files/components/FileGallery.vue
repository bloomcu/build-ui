<template>
    <div class="files-gallery grid gap-xs">
        <div
            v-for="(file, index) in files"
            :key="index"
            @click="select(file)"
            :style="{ backgroundImage: 'url(' + `https://metrifi-optimizer.mo.cloudinary.net/${file.src}` + ')' }"
            class="files-gallery__item col-4"
        />
    </div>
</template>

<script setup>
// import { onMounted } from 'vue'
// import { useFileStore } from '@/domain/files/store/useFileStore'

// const fileStore = useFileStore()

// onMounted(() => {
//     fileStore.index()
// })

const props = defineProps({ 
    files: { type: Array },
    loading: { type: Boolean, default: false },
})

const select = (file) => {
    emit('selected', file)
}

const emit = defineEmits(['selected'])
</script>

<style lang="scss">
.files-gallery {
    &__item {
        height: 160px;
        display: inline-block;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        border-radius: var(--radius-md);
        transition: box-shadow;
        transition-duration: .4s;
        cursor: pointer;

        &:hover {
            box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
        }
    }
}
</style>
