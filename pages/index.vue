<template>
  <div class="home">
    <Card v-for="item in questionList.card" :key="item" :card="item" />
  </div>
</template>

<script lang="ts" setup>
import { useQuestionStore } from '~/store/question'

const questionList = useQuestionStore()
</script>

<style scoped lang="scss">
@media print {
  .home {
    //margin: 10%;
    //border: none;
    flex: none;
    margin: $gutter * 0.5;
  }
}
.home {
  // border: 0.5px solid black;
  margin: $gutter * 0.8;
  margin-left: $gutter * 2;
  display: flex;
  flex-wrap: wrap;
  width: calc(227px * 3);
}
</style>
