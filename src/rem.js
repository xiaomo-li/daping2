/**
 * 移动端适配的方法
 */

// import store from '@/store'
//是否移动端
// const isMobile = store.getters.isMobile
// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 1920;
  // 设置页面根节点字体大小 电脑端锁定16px,手机端自适应
  // document.documentElement.style.fontSize = isMobile ? 16 * scale + 'px' : '16px'
  document.documentElement.style.fontSize = 16 * scale + "px";
}
function setViewHeight() {
  const windowVH = window.innerHeight / 100;
  document.documentElement.style.setProperty("--vh", windowVH + "px");
}

export const initRem = () => {
  // 调用一次，初始化rem
  setRem();
  // 调用一次，初始化可视区域高度
  setViewHeight();
  const i = "orientationchange" in window ? "orientationchange" : "resize";

  // 改变窗口大小时重新设置 rem,用节流防止改变窗口大小时卡死
  let timer = undefined;
  window.addEventListener(i, function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = window.setTimeout(() => {
      setRem();
      setViewHeight();
      clearTimeout(timer);
    }, 200);
  });
};

initRem();

/**
 * 将px转化为rem，此方法用于部分无法被post-css转化的内联样式，如@/layout/index.vue中的class="main"的元素
 * @param {Number} px
 * @returns {Number}
 */
export const pxtorem = (px) => {
  return px / 16;
};

export const pxtopx = (px) => {
  return (px * document.documentElement.clientWidth) / 1920;
};
