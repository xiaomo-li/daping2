<template>
  <div class="before-div">
    <EmanSvgIcon class="newslaba" size="22" name="newslaba" />
  </div>
  <a-tooltip position="bl">
    <template #content>
      <div v-for="(item, index) in myText" :key="item.id">
        {{
          myText.length > 1 ? `${index + 1}.${item.content}` : `${item.content}`
        }}
      </div>
    </template>
    <div class="wrap" @mouseover="menter" @mouseleave="mleave">
      <div ref="box" class="box">
        <div ref="marquee" class="marquee">
          <span
            v-for="(item, index) in myText"
            :key="item.id"
            :class="['itemText', item.contentLink ? 'hover-text' : '']"
            @click="handleItemTextClick(item)"
            >{{
              myText.length > 1
                ? `${index + 1}.${item.content}`
                : `${item.content}`
            }}</span
          >
        </div>
        <div ref="copy" class="copy">
          <span
            v-for="(item, index) in myText"
            :key="item.id"
            :class="['itemText', item.contentLink ? 'hover-text' : '']"
            @click="handleItemTextClick(item)"
            >{{
              myText.length > 1
                ? `${index + 1}.${item.content}`
                : `${item.content}`
            }}</span
          >
        </div>
      </div>
      <div ref="node" class="node">
        <span v-for="(item, index) in myText" :key="item.id" class="itemText">{{
          myText.length > 1 ? `${index + 1}.${item.content}` : `${item.content}`
        }}</span>
      </div>
    </div>
  </a-tooltip>
  <div class="after-div"></div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";

interface ItemContent {
  id: ""; // id标识
  content: ""; // 显示的内容
  contentLink: ""; // 连接地址
  linkOpenMode: "newTab" | "current"; // 在当期窗口还是新窗口打开连接
}
const props = defineProps({
  content: {
    type: Array as PropType<ItemContent[]>,
    default: () => [],
  },
});
const distance = ref(0); // 位移距离
let timer: any = null;
const box = ref();
const node = ref();
const myText: any = computed(() => props.content);
const move = () => {
  // 获取文字text 的计算后宽度  （由于overflow的存在，直接获取不到，需要独立的node计算）
  const width = node.value.getBoundingClientRect().width;
  // 设置位移
  timer = setInterval(() => {
    distance.value -= 1;
    // 如果位移超过文字宽度，则回到起点
    if (-distance.value >= width) {
      distance.value = 50;
    }
    box.value.style.transform = `translateX(${distance.value}px)`;
  }, 20);
};
const menter = () => {
  clearInterval(timer);
};
const mleave = () => {
  move();
};
// 链接跳转
const handleItemTextClick = (item: any) => {
  if (!item.contentLink) {
    return;
  }
  if (item.linkOpenMode === "newTab") {
    window.open(item.contentLink, "_blank");
  } else {
    window.open(item.contentLink, "_self");
  }
};
onMounted(() => {
  move();
});
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style scoped lang="less">
.before-div {
  height: 30px;
  line-height: 30px;
  width: 40px;
  text-align: center;
  background-color: #e8f3ff;
  border-radius: 4px 0 0 4px;
}
.after-div {
  height: 30px;
  width: 10px;
  background-color: #e8f3ff;
  border-radius: 0 4px 4px 0;
}

.wrap {
  width: 196px;
  height: 30px;
  line-height: 30px;
  background-color: #e8f3ff;
  color: #1d2129;
  overflow: hidden;
  cursor: pointer;
}

.box {
  width: 80000%;
}

.box div {
  float: left;
}

.marquee {
  margin: 0 50px 0 0;
}

.node {
  position: absolute;
  z-index: -999;
  top: -999999px;
  white-space: nowrap;
}
.marquee,
.copy,
.node {
  .itemText:nth-child(n + 2) {
    margin-left: 20px;
  }
  .hover-text {
    &:hover {
      color: #4080ff;
    }
  }
}
</style>
