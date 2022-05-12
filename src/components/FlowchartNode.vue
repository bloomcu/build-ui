<template>
  <Handle type="target" :position="Position.Left" :on-connect="onConnect" />
  <div class="card">
    <div class="card-header">
      Page title
    </div>
    <div
      class="card-image"
      :style="{backgroundImage: `url('${props.data.image}')`}"
    >
    </div>
    <div class="card-footer">
      <div class="card-footer__left">
        <p>20</p>
        <small>Visits</small>
      </div>
      <div class="card-footer__right">
        <p>8</p>
        <small>Clicks</small>
      </div>
    </div>
  </div>
  <Handle type="source" :position="Position.Right" />
</template>

<script lang="ts" setup>
import { CSSProperties } from 'vue'
import { Handle, Position, Connection, Edge, NodeProps } from '@braks/vue-flow'

interface ColorSelectorNodeProps extends NodeProps {
  data: {
    color: string,
    image: string,
    onChange: (event: any) => void
  }
}

const props = defineProps<ColorSelectorNodeProps>()
const onConnect = (params: Connection | Edge) => console.log('handle onConnect', params)
// const targetHandleStyle: CSSProperties = { background: '#555' }
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<style>
.card {
  /* border: 1px black solid; */
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 0.9px 1.5px rgba(0, 0, 0, 0.03),0 3.1px 5.5px rgba(0, 0, 0, 0.08),0 14px 25px rgba(0, 0, 0, 0.12);
}

.card-header {
  padding: 8px;
}

.card-footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
}

.card-footer__left,
.card-footer__right {
  padding: 8px;
  flex: 1;
}

.card-footer__left {
  border-right: 1px solid #000;
}

.card-footer p {
  margin: 0;
}

.card-image {
  width: 200px;
  height: 200px;
  background-size: contain;
  /* max-height: 250px; */
}
</style>
