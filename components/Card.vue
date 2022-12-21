<template>
  <div class="card">
    <div class="card__content">
      <h1 class="card__question">{{ props.card.question }}</h1>
      <ul class="card__list">
        <li
          v-for="(item, index) in props.card.qcm"
          :key="index"
          class="card__itemList"
        >
          <span>{{ item }} </span>
        </li>
      </ul>
      <footer class="card__footer">
        <h2 class="card__response">Réponse: {{ props.card.answer }}</h2>
        <p v-if="props.card.explication" class="card__explication">
          <span class="card__explication--underline">Explications : </span>
          {{ props.card.explication }}
        </p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { QuestionType } from '~/types/type'

const props = defineProps({
  card: {
    type: Object as PropType<QuestionType>,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.card {
  width: 205px;
  height: 320px;
  border: 0.4px solid black;

  padding: $gutter;
}

.card__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.card__question {
  font-weight: 700;
  font-size: $fontSize * 1.5;
}

.card__list {
  font-size: $fontSize * 1.5;
}

.card__itemList {
  padding: $gutter * 0.5 0;
}

.card__response {
  text-align: center;
  padding-bottom: $gutter * 3;
}

.card__response {
  font-size: $fontSize * 1.2;
}

.card__explication {
  font-size: $fontSize * 1.1;
  &--underline {
    text-decoration: underline;
    font-weight: 700;
  }
}
</style>
