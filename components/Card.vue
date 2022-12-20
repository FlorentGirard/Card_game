<template>
  <div class="card">
    <h1 class="card__question">Question</h1>
    <ul class="card__list">
      <li class="card__itemList"><span>A) </span></li>
      <li class="card__itemList"><span>B) </span></li>
      <li class="card__itemList"><span>C) </span></li>
      <li class="card__itemList"><span>D) </span></li>
    </ul>
    <footer class="card__footer">
      <h2 class="card__response">Réponse:</h2>
      <p class="card__explication">
        <span class="card__explication--underline">Explications : </span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
        commodi facilis id itaque, minus necessitatibus nihil nobis obcaecati,
        odit officia provident quam quas quo soluta temporibus voluptatem!
        Distinctio, tempora.
      </p>
    </footer>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.card {
  width: 205px;
  height: 322px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: $gutter * 0.5;
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

.card__explication {
  &--underline {
    text-decoration: underline;
  }
}
</style>
