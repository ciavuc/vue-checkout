<template>
  <div class="checkout">
    <div class="header">
      <h1>Checkout</h1>
    </div>
    <ul class="products">
      <li class="product">
        <div class="info">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
        </div>
        <div class="price">
          {{ product.price }}
        </div>
      </li>
    </ul>
    <div class="total"><span>Subtotal</span>£{{ product.price }}</div>
    <Payment />
  </div>
</template>

<script>
import Payment from "./Payment";
export default {
  data() {
    return {
      product: this.$store.state.activeProduct,
    };
  },
  components: {
    Payment,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.checkout {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 1200px;
  height: 80vh;
  background-color: #fff;
  border-radius: 10px;
  padding: 50px;
  .header {
    width: 100%;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid #dee5ea;
  }
  .products {
    width: 40%;
    height: 90%;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
    border-radius: 10px;
    &::-webkit-scrollbar {
      display: none;
    }
    .product {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 0;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.25s ease;
      .price {
        font-size: 15px;
        font-family: "Roboto Mono";
      }
    }
  }
  .total {
    position: absolute;
    width: 40%;
    text-align: right;
    left: 0;
    bottom: 0;
    background-color: #fff;
    padding: 50px 0;
    font-size: 26px;
    font-weight: 700;
    span {
      width: 100%;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 700;
      font-family: "Roboto Mono";
      display: block;
      letter-spacing: 2px;
      opacity: 0.4;
      margin-bottom: 5px;
    }
  }
}
</style>