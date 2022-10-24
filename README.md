# vue-bounce-ui  
### [中文说明](https://github.com/wentianl20/vue-bounce-ui/blob/master/README.zh-CN.md)

---

#### Lightweight Mobile bounce UI Components built on Vue3.0
![avatar](https://raw.githubusercontent.com/wiki/wentianl20/vue-bounce-ui/slide-checkmore.gif)

## Install

---

#### Using `npm` to install:

```
npm i vue-bounce-ui
```

### Quickstart

---

main.js
```
import { createApp } from 'vue'
import App from './App.vue'
import SliderContainer from 'vue-bounce-ui'
import 'vue-bounce-ui/lib/vue-bounce-ui.css'

const app = createApp();

// Register the component
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
      more-content="slide to chech more"
      :slide-distance="60"
      class="slide-container"
  >
    <template #default>
        // something here
    </template>
  </slider-container>
```


### Properties

---
#### slide-distance
The maximum sliding distance, beyond which the callBack function will be triggered
#### more-content
prompt


#### call-back
Callback function, which will be triggered when the maximum sliding distance is exceeded


### Browser Support

---

#### same as Vue 3 support list

### License

---

### [MIT](https://en.wikipedia.org/wiki/MIT_License)


