<!--
 * @Description: 布局头
 * @Author: 
 * @Date: 
 * @LastEditors: 
 * @LastEditTime: 
 -->
<template>
  <header class="header" v-text="title"></header>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: '表单设计器',
      },
    },
  };
</script>
