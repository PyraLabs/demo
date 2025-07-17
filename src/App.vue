<template>
  <div id="app">
    <router-view v-slot="{ Component }">

      <keep-alive>
        <component :is="Component" :key="$route.path" v-if="$route.meta.keepAlive"></component>
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive"></component>

    </router-view>
  </div>
</template>

<script setup>
</script>
<style>
</style>

