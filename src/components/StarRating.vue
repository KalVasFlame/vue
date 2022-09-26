<template>
  <div class="star-rating">
    <span v-for="index in starLimit" :key="index" class="star star--outlined"></span>
    <div class="star-rating__colored" :style="`width: ${ratingWidth}`">
      <span v-for="index in starLimit" :key="index" class="star star--colored"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    starLimit: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    ratingWidth() {
      return (this.rating / this.starLimit) * 100 + "%"
    },
  },
}
</script>

<style scoped lang="scss">
.star-rating {
  position: relative;
  display: inline-flex;
  &__colored {
    overflow: hidden;
    position: absolute;
    display: inline-flex;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
  }
}
.star {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 0 3px;
  flex-shrink: 0;
  &--colored {
    background-color: blue;
  }
  &--outlined {
    background-color: red;
  }
}
</style>
