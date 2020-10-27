<template>
  <ul class="products">
    <li
      v-for="product in products"
      v-bind:key="product.id"
      @click="checkout(product)"
    >
      <div class="info">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
      </div>
      <div class="price">
        {{ product.price }}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Icon Pack",
          description: "A really cool icon pack",
          price: "9.99",
        },
        {
          id: 2,
          name: "Bootstrap Admin Template",
          description: "A really cool template",
          price: "19.99",
        },
        {
          id: 3,
          name: "Laravel Spark Template",
          description: "A new templace for spark",
          price: "39.99",
        },
        {
          id: 4,
          name: "Vue Checkout",
          description: "A checkout for Vue",
          price: "12.99",
        },
      ],
    };
  },
  methods: {
    checkout(product) {
      this.$store.commit("checkout", product);
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  list-style: none;
  width: 700px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: left;
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.25s ease;
    .price {
      font-size: 15px;
      font-family: "Roboto Mono";
    }
    &:hover {
      background-color: #fff;
    }
  }
}
</style>