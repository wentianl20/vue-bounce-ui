/**
 * Create by pirlo
 * Date: 2022/10/20 4:22 PM
 * Update: 2022/10/20 4:22 PM
 */

import SliderContainer from './SliderContainer/index.vue';

const components = {
    SliderContainer,
};

function install(Vue) {
    const keys = Object.keys(components);
    keys.forEach((name) => {
        const component = components[name];
        Vue.component(component.name || name, component);
    });
}

export default {
    install,
    ...components,
};
