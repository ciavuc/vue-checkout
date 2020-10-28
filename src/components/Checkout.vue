<template>
  <div class="checkout">
    <div class="info">
      <span class="button button--small" @click="checkout()">Go Back</span>
      <div class="header">
        <h1>Checkout</h1>
        <div class="total"><span>Subtotal</span>£{{ product.price }}</div>
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
    </div>
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
  methods: {
    checkout(product) {
      this.$store.commit("checkout", product);
    },
  },
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
    display: flex;
    align-items: center;
  }
  .info {
    width: 55%;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 90%;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .products {
    width: 100%;
    position: relative;
    border-radius: 10px;
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
    margin-left: auto;
    text-align: right;
    background-color: #fff;
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