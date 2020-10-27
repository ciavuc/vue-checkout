<template>
  <div class="card" :class="card.number ? 'active card__' + provider : ''">
    <img class="logo" v-if="provider === 1" src="/img/providers/1.svg" />
    <img class="logo" v-if="provider === 2" src="/img/providers/2.svg" />
    <img class="logo" v-if="provider === 3" src="/img/providers/3.svg" />
    <span class="number">{{ card.number }}</span>
    <span class="name">{{ card.name }}</span>
    <span class="expiry">{{ card.expiry }}</span>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
    provider: Number,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.card {
  width: 350px;
  height: 200px;
  background: #f7f7f70a;
  filter: blur(2px);
  display: block;
  border-radius: 8px;
  margin: 30px auto 0 auto;
  color: #fff;
  position: relative;
  transition: 0.5s ease;
  &.active {
    filter: blur(0);
  }
  .logo {
    width: auto;
    height: 40px;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .number {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    right: 0;
    font-family: "Roboto Mono";
    letter-spacing: 3px;
    font-size: 22px;
    opacity: 0.8;
  }
  .name {
    position: absolute;
    bottom: 15px;
    left: 15px;
  }
  .expiry {
    position: absolute;
    bottom: 15px;
    right: 15px;
    font-family: "Roboto Mono";
    letter-spacing: 1px;
  }

  &__1 {
    background-color: blue;
  }

  &__2 {
    background-color: #3c3c3c;
    color: #fff;
  }

  &__3 {
    background-color: red;
  }
}
</style>