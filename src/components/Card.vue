<template>
  <div class="card" :class="card.number ? 'active card__' + provider : ''">
    <img class="logo" v-if="provider === 'amex'" src="/img/providers/1.svg" />
    <img
      class="logo"
      v-if="provider === 'mastercard'"
      src="/img/providers/2.svg"
    />
    <img class="logo" v-if="provider === 'visa'" src="/img/providers/3.svg" />
    <span class="number">{{
      card.number ? card.number : "0000 0000 0000 0000"
    }}</span>
    <span class="name">{{ card.name }}</span>
    <span class="expiry"
      >{{ card.month }} {{card.month ? '/' : ''}} {{ String(card.year).slice(2, 4) }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
    provider: String,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.card {
  width: 350px;
  height: 200px;
  background: #f7f7f70a;
  display: block;
  border-radius: 8px;
  margin: 30px auto 0 auto;
  color: #fff;
  position: relative;
  transition: 0.5s ease;
  box-shadow: 0px 0px 26px #00000017;
  overflow: hidden;
  &.active {
  }
  .logo {
    width: auto;
    height: 60px;
    position: absolute;
    top: 10px;
    right: 20px;
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

  &__amex {
    background-color: #026fcf;
    img{
      height: 80px !important;
      top: 2px !important;
    }
  }

  &__mastercard {
    background-color: #161718;
    color: #fff;
  }

  &__visa {
    background-color: #1a1f71;
    color: #fff;
    &:before {
      content: "";
      width: 180px;
      height: 180px;
      top: -60px;
      left: -60px;
      background-color: #f7b600;
      opacity: 0.75;
      position: absolute;
      border-radius: 150px;
    }
  }
}
</style>