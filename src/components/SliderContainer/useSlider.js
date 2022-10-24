import { ref, computed, onBeforeUnmount, onMounted } from 'vue'
import { getDeviceType } from '@/utils/tools'

export default function useSlider(callBack = () => {} , slideDistance) {
    let touchStartX = null

    let callBackFlag = false

    const sliderContainerDOMRef = ref(null)

    const isTouching = ref(false)
    const device = getDeviceType()

    const dependenceReady = computed(() => {
        if (!sliderContainerDOMRef.value) return false
        const {
            offsetWidth, //容器宽度
            scrollWidth, //容器宽度包括可滚动距离
        } = sliderContainerDOMRef.value
        return scrollWidth - offsetWidth > 5
    })

    onMounted(() => {
        if (device !== 'iphone' && device !== 'ipad') {
            sliderContainerDOMRef.value.addEventListener('scroll', () => {
                const {
                    offsetWidth, //容器宽度
                    scrollWidth, //容器宽度包括可滚动距离
                    scrollLeft, //容器滚动距离
                } = sliderContainerDOMRef.value
                if (scrollLeft + offsetWidth >= scrollWidth - 1 && !isTouching.value) {
                    setTimeout(() => {
                        sliderContainerDOMRef.value.scrollLeft -= 2
                    }, 200)
                }
            })
        }
    })

    /**
     * @description: touch开始
     * 1. 设置touch开始位置touchStartX
     * 2. callBackFlag设置默认值
     */
    let sliderTouchStart = e => {
        if (!dependenceReady.value) return
        isTouching.value = true
        const touch = e.changedTouches[0]
        callBackFlag = false

        const {
            offsetWidth, //容器宽度
            scrollWidth, //容器宽度包括可滚动距离
            scrollLeft, //容器滚动距离
        } = sliderContainerDOMRef.value

        const isEnd = scrollLeft + offsetWidth >= scrollWidth - 1
        if (isEnd) {
            touchStartX = touch.clientX
        }
    }

    /**
     * @description: touch移动过程事件处理
     */
    let sliderTouchMove = e => {
        if (!dependenceReady.value) return
        const {
            offsetWidth, //容器宽度
            scrollWidth, //容器宽度包括可滚动距离
            scrollLeft, //容器滚动距离
        } = sliderContainerDOMRef.value
        const touch = e.changedTouches[0]
        const touchMoveX = touch.clientX
        if (scrollLeft + offsetWidth >= scrollWidth - 1) {
            const blank = sliderContainerDOMRef.value.querySelector(
                '.check-more'
            )
            let distance = touchStartX - touchMoveX

            if (distance > blank.offsetWidth) {
                blank.style.width = distance + 'px'

                const maxDistance = slideDistance
                const distanceABS = Math.abs(distance)
                if (!callBackFlag && distanceABS > maxDistance) {
                    callBack()
                    callBackFlag = true
                    return
                }
            }
        } else {
            touchStartX = touchMoveX
        }
    }

    /**
     * @description: touch结束
     * 1. touchStartX归零
     * 2. 偏移量归零
     */
    let sliderTouchEnd = () => {
        if (!dependenceReady.value) return
        const blank = sliderContainerDOMRef.value.querySelector(
            '.check-more'
        )
        setTimeout(() => {
            blank.style.width = 0
        }, 50)
        isTouching.value = false
    }

    onBeforeUnmount(() => {
        sliderContainerDOMRef.value = null
    })

    return {
        dependenceReady,
        sliderContainerDOMRef,
        sliderTouchStart,
        sliderTouchMove,
        sliderTouchEnd,
    }
}
