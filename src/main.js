/**
 * Create by pirlo
 * Date: 2022/10/20 4:12 PM
 * Update: 2022/10/20 4:22 PM
 */

import { createApp } from 'vue'
import App from './App.vue'
// import vueBounceUI from './components/index'
import SliderContainer from 'vue-bounce-ui'
import 'vue-bounce-ui/lib/vue-bounce-ui.css'

createApp(App).use(SliderContainer).mount('#app')
