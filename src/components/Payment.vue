<template>
  <div class="payment">
    <h2>Card Details</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: this.$store.state.activeProduct,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.payment {
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: rgb(22, 26, 32);
  color: #fff;
  height: 95%;
  width: 450px;
  border-radius: 10px;
  padding: 50px;
  h2 {
    width: 100%;
  }
}
</style>