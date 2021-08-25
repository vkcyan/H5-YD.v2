import { ref } from 'vue'
import { useStore } from 'vuex'

export function useMouseFun() {
  const store = useStore()
  // 组件鼠标移动事件
  const mousedown = (e, cid, pid) => {
    // console.log('组件被点击')
    store.commit('core/set_activechild', {
      pid,
      cid,
    })
  }
  const mouseup = (e) => {}
  const mouseleave = (e) => {}
  return {
    mousedown,
    mouseup,
    mouseleave,
  }
}
