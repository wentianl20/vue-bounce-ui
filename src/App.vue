<template>
  <h3>请向左边边滑动图片到底部，然后继续滑</h3>
  <br>
  <slider-container
      :call-back="
            () => {
              sliderCallBack()
            }
          "
      more-content="继续滑动"
      :slide-distance="60"
      class="slide-container"
  >
    <template #default>
      <div
          v-for="(item, key) in list"
          :key="key"
          class="image-container"
      >
        <div class="cover">
          <img src="@/assets/pirlo_avadar.png" alt="">
        </div>
        <div>
          {{ item.name + '_' + key }}
        </div>
      </div>
    </template>
  </slider-container>

  <h3>Please slide the picture to the left to the right edge, and then continue to slide</h3>
</template>

<script setup>
import { ref } from 'vue'

const list = ref([
  {
    name: 'Pirlo Liu',
  },
  {
    name: 'Pirlo Liu',
  },
  {
    name: 'Pirlo Liu',
  },
  {
    name: 'Pirlo Liu',
  }
])


  /**
   * @description: callBack when trigger the edge of container
   */
  function sliderCallBack() {
    // todo, redirect somewhere
    console.log('Haha, redirect me!')
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  margin: 40px 0 0;
}

.slide-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  overflow-x: auto;
  overflow-y: hidden;
  flex-direction: column;
}

.image-container {
  /*width: 332px;*/
  height: 300px;
  display: inline-block;
  margin-right: 10px;
  border: 1px solid rgba(175, 177, 196, 0.2);
}

.image-container .cover {
  height: 250px;
  width: 250px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
