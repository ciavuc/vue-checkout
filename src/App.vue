<template>
  <div>
    <Products v-if="!$store.state.activeProduct"/>
    <Checkout v-if="$store.state.activeProduct" />
  </div>
</template>

<script>
import Products from "./components/Products";
import Checkout from "./components/Checkout";
export default {
  name: "App",
  components: {
    Products,
    Checkout,
  },
};
</script>
