<!-- 滑动容器组件 -->

<script setup>
import useSlider from './useSlider'

const props = defineProps({
  callBack: {
    type: Function,
    default: () => {},
  },
  moreContent: {
    type: String,
    default: '滑动查看全部',
  },
  slideDistance: {
    type: Number,
    default: 80
  }
})

const {
  sliderContainerDOMRef,
  sliderTouchStart,
  sliderTouchMove,
  sliderTouchEnd,
} = useSlider(props.callBack ,  props.slideDistance)
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
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTRweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTQgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5YiH54mHPC90aXRsZT4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IueUu+advyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5Ny4wMDAwMDAsIC0xOTM0LjAwMDAwMCkiIGZpbGw9IiM2NjY2NjYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4TlpIfku70iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM5Ny4wMDAwMDAsIDE4ODkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUuNDcwMDI1NTIsOS4zMDY3NjAyIEM1LjM4ODM5Mjg2LDkuMzA2NzYwMiA1LjMwNjc2MDIsOS4yNzQxMDcxNCA1LjI0MTQ1NDA4LDkuMjA4ODAxMDIgQzUuMTEwODQxODMsOS4wNzgxODg3NyA1LjExMDg0MTgzLDguODc0MTA3MTQgNS4yNDE0NTQwOCw4Ljc0MzQ5NDg5IEw3LjY5MDQzMzY3LDYuMjk0NTE1MzEgQzcuODIxMDQ1OTIsNi4xNjM5MDMwNiA4LjAyNTEyNzU1LDYuMTYzOTAzMDYgOC4xNTU3Mzk4LDYuMjk0NTE1MzEgQzguMjg2MzUyMDUsNi40MjUxMjc1NiA4LjI4NjM1MjA1LDYuNjI5MjA5MTkgOC4xNTU3Mzk4LDYuNzU5ODIxNDIgTDUuNzA2NzYwMiw5LjIwODgwMTAyIEM1LjYzMzI5MDgxLDkuMjc0MTA3MTQgNS41NTE2NTgxNiw5LjMwNjc2MDIgNS40NzAwMjU1Miw5LjMwNjc2MDIgTDUuNDcwMDI1NTIsOS4zMDY3NjAyIFoiIGlkPSLot6/lvoQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy45MTkwMDUxMSw2Ljg1Nzc4MDYxIEM3LjgzNzM3MjQ1LDYuODU3NzgwNjEgNy43NTU3Mzk4LDYuODI1MTI3NTUgNy42OTA0MzM2Nyw2Ljc1OTgyMTQyIEw1LjI0MTQ1NDA4LDQuMzEwODQxODQgQzUuMTEwODQxODMsNC4xODAyMjk1OSA1LjExMDg0MTgzLDMuOTc2MTQ3OTcgNS4yNDE0NTQwOCwzLjg0NTUzNTcyIEM1LjM3MjA2NjMzLDMuNzE0OTIzNDcgNS41NzYxNDc5NSwzLjcxNDkyMzQ3IDUuNzA2NzYwMiwzLjg0NTUzNTcyIEw4LjE1NTczOTgsNi4yOTQ1MTUzMSBDOC4yODYzNTIwNSw2LjQyNTEyNzU2IDguMjg2MzUyMDUsNi42MjkyMDkxOSA4LjE1NTczOTgsNi43NTk4MjE0MiBDOC4wODIyNzA0MSw2LjgyNTEyNzU1IDguMDAwNjM3NzUsNi44NTc3ODA2MSA3LjkxOTAwNTExLDYuODU3NzgwNjEgWiIgaWQ9Iui3r+W+hCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02LjUzMTI1LDEzLjA2MTg2MjMgQzIuOTMxMjUsMTMuMDYxODYyMyAwLjAwMDYzNzc1LDEwLjEzMTI1IDAuMDAwNjM3NzUsNi41MzEyNSBDMC4wMDA2Mzc3NSwyLjkzMTI1IDIuOTMxMjUsMC4wMDA2Mzc3NSA2LjUzMTI1LDAuMDAwNjM3NzUgQzEwLjEzMTI1LDAuMDAwNjM3NzUgMTMuMDYxODYyMywyLjkzMTI1IDEzLjA2MTg2MjMsNi41MzEyNSBDMTMuMDYxODYyMywxMC4xMzEyNSAxMC4xMzEyNSwxMy4wNjE4NjIzIDYuNTMxMjUsMTMuMDYxODYyMyBaIE02LjUzMTI1LDAuNjUzNjk4OTg0IEMzLjI5MDQzMzY3LDAuNjUzNjk4OTg0IDAuNjUzNjk4OTg0LDMuMjkwNDMzNjcgMC42NTM2OTg5ODQsNi41MzEyNSBDMC42NTM2OTg5ODQsOS43NzIwNjYzMyAzLjI5MDQzMzY3LDEyLjQwODgwMSA2LjUzMTI1LDEyLjQwODgwMSBDOS43NzIwNjYzMywxMi40MDg4MDEgMTIuNDA4ODAxLDkuNzcyMDY2MzMgMTIuNDA4ODAxLDYuNTMxMjUgQzEyLjQwODgwMSwzLjI5MDQzMzY3IDkuNzcyMDY2MzMsMC42NTM2OTg5ODQgNi41MzEyNSwwLjY1MzY5ODk4NCBaIiBpZD0i5b2i54q2Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
          class="logo"
      />
      <span class="text">{{moreContent}}</span>
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
