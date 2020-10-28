<template>
  <div class="payment">
    <h2>Card Details</h2>

    <Card :card="card" :provider="getCardType" />

    <form class="form">
      <div class="form__group">
        <label for="name">Name on Card</label>
        <input
          type="text"
          name="name"
          class="card"
          v-model="card.name"
          placeholder="Joe Bloggs"
        />
      </div>

      <div class="form__group">
        <label for="number">Card Number</label>
        <input
          type="text"
          name="number"
          v-model="card.number"
          v-on:input="handleCardInput()"
          v-mask="generateCardNumberMask"
          placeholder="0000 0000 0000 0000"
        />
      </div>

      <div class="form__group form__group--expiry">
        <label for="expiry">Card Expiry</label>
        <select type="text" name="expiry" v-model="card.month">
          <option value="" disabled selected>Month</option>
          <option
            v-bind:value="n < 10 ? '0' + n : n"
            v-for="n in 12"
            v-bind:disabled="n < minCardMonth"
            v-bind:key="n"
          >
            {{ getMonth(n) }}
          </option>
        </select>
        <select type="text" name="expiry" v-model="card.year">
          <option value="" disabled selected>Year</option>
          <option
            v-bind:value="$index + minCardYear"
            v-for="(n, $index) in 12"
            v-bind:key="n"
          >
            {{ $index + minCardYear }}
          </option>
        </select>
      </div>

      <div class="form__group form__group--security">
        <label for="security">Security Code</label>
        <input
          type="text"
          name="security"
          v-model="card.security"
          placeholder="456"
        />
      </div>

      <div class="form__group">
        <button class="button button--primary">Purchase</button>
      </div>
    </form>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      product: this.$store.state.activeProduct,
      card: {
        name: "",
        number: "",
        month: "",
        year: "",
        security: "",
      },
      minCardYear: new Date().getFullYear(),
      amexCardMask: "#### ###### #####",
      otherCardMask: "#### #### #### ####",
      activeProvider: null,
      cardError: null,
    };
  },
  methods: {
    getMonth(n) {
      return n < 10 ? "0" + n : n;
    },
  },

  computed: {
    getCardType() {
      let number = this.card.number;
      let re = new RegExp("^4");
      if (number.match(re) != null) return "visa";

      re = new RegExp("^(34|37)");
      if (number.match(re) != null) return "amex";

      re = new RegExp("^5[1-5]");
      if (number.match(re) != null) return "mastercard";

      re = new RegExp("^6011");
      if (number.match(re) != null) return "discover";

      re = new RegExp("^9792");
      if (number.match(re) != null) return "troy";

      return "visa"; // default type
    },
    generateCardNumberMask() {
      return this.getCardType === "amex"
        ? this.amexCardMask
        : this.otherCardMask;
    },
    minCardMonth() {
      if (this.card.year === this.minCardYear) return new Date().getMonth() + 1;
      return 1;
    },
  },

  watch: {
    cardYear() {
      if (this.cardMonth < this.minCardMonth) {
        this.cardMonth = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.payment {
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: #252e3c;
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