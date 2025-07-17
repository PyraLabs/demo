<template>
  <div class="flex flex-col w-full">
    <img style="width: 100%; height: auto;" :src="getImageUrl('top2.webp')"/>

    <img style="width: 100%; height: auto;" :src="getImageUrl('center2.webp')"/>

    <img style="width: 100%; height: auto;" :src="getImageUrl('bot2.webp')"/>

    <div class="w-full h-[200px] bg-green-400"></div>
  </div>
</template>

<script setup>
import {prefixImage,} from '../common/utils.js'

const getImageUrl = function (name) {
  return prefixImage("cpHouseProblem/" + name)
}
</script>

<style scoped lang="less">

</style>