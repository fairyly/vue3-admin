<script setup>
import CommonHead from './common-head.vue'
import CommonSide from './common-side.vue'
</script>

<template>
  <div class="layout-main">
    <common-head />
    <div class="layout-main-body">
      <div class="layout-main-left">
        <common-side />
      </div>
      <div class="layout-main-right">
        <router-view>
          <template #default="{ Component, route }">
            <transition appear name="fade-transform" mode="out-in">
              <component :is="Component" :key="route.fullPath" />
            </transition>
          </template>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.layout-main {
  width: 100%;
  &-body {
    width: 100%;
    display: flex;
  }
  &-left {
    width: 300px;
    min-width: 300px;
  }
  &-right {
    width: calc(100% - 300px);
  }
}
</style>
