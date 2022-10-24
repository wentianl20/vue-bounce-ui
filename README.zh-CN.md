# vue-bounce-ui

---

#### 基于Vue3.0的轻量、可靠的移动端弹簧橡皮筋效果，兼容微信内置浏览器

## 安装

---

#### 通过 `npm` 安装:

```
npm i vue-bounce-ui
```

### 快速上手

---

main.js
```
import { createApp } from 'vue'
import App from './App.vue'
import SliderContainer from 'vue-bounce-ui'
import 'vue-bounce-ui/lib/vue-bounce-ui.css'

const app = createApp();

// 注册组件
app.use(SliderContainer);
```

App.vue
```
  <slider-container
      :call-back="
            () => {
              sliderCallBack()
            }
          "
      more-content="右滑查看更多"
      :slide-distance="60"
      class="slide-container"
  >
    <template #default>
        // something here
    </template>
  </slider-container>
```

### 属性说明

---
#### slide-distance
滑动的最大距离，超过这个距离会触发callBack 回调函数


#### more-content
文案提示


#### call-back
回调函数，当超过最大滑动距离后会触发

### 浏览器支持

---

#### 与Vue3.0 一致

### 开源协议

---

#### 本项目基于 [MIT](https://en.wikipedia.org/wiki/MIT_License) 协议，请自由地享受和参与开源。




