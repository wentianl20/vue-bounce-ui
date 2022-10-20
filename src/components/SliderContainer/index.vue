<!-- 滑动容器组件 -->

<script setup>
import useSlider from './useSlider'

const props = defineProps({
  callBack: {
    type: Function,
    default: () => {},
  },
})

const {
  sliderContainerDOMRef,
  sliderTouchStart,
  sliderTouchMove,
  sliderTouchEnd,
} = useSlider({ callBack: props.callBack })
</script>

<template>
  <div
      ref="sliderContainerDOMRef"
      @touchstart="sliderTouchStart"
      @touchmove="sliderTouchMove"
      @touchend="sliderTouchEnd"
  >
    <slot></slot>
    <!-- more info -->
    <p
        class="check-more"
    >
      <img
          src="@/assets/icon/slide-arrow.svg"
          class="logo"
      />
      <span class="text">滑动查看全部</span>
    </p>
  </div>
</template>

<style>
.check-more {
  width: 0;
  overflow: hidden;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 0 0 16px;
  justify-content: flex-start;
}

.logo {
  width: 14px;
  height: 14px;
  margin-right: 4px;
}
.text {
  width: 16px;
  font-size: 12px;
  color: #666666;
  line-height: 17px;
}
</style>
