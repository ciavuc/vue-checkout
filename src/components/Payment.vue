<template>
  <div class="payment">
    <h2>Card Details</h2>

    <Card :card="card" :provider="activeProvider" />

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
          placeholder="Joe Bloggs"
        />
      </div>

      <div class="form__group">
        <label for="expiry">Card Expiry</label>
        <input
          type="text"
          name="expiry"
          v-model="card.expiry"
          placeholder="01/25"
        />
      </div>

      <div class="form__group">
        <label for="security">Card Security Code</label>
        <input
          type="text"
          name="security"
          v-model="card.security"
          placeholder="456"
        />
      </div>
    </form>
  </div>
</template>

<script>
import $ from "jquery";
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
        expiry: "",
        security: "",
      },
      providers: [
        {
          brand: "American Express",
          image: "/images/this.providers/american-express.png",
          verification: "^3[47][0-9]",
          separation: "^([0-9]{4})([0-9]{6})?(?:([0-9]{6})([0-9]{5}))?$",
          hidden: "**** ****** *[0-9][0-9][0-9][0-9]",
          accepted: true,
          length: 15,
        },
        {
          brand: "MasterCard",
          image: "/images/this.providers/mastercard.png",
          verification: "^5[1-5][0-9]",
          separation: "^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$",
          hidden: "**** **** **** [0-9][0-9][0-9][0-9]",
          accepted: true,
          length: 16,
        },
        {
          brand: "Visa",
          image: "/images/this.providers/visa.png",
          verification: "^4[0-9]",
          separation: "^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$",
          hidden: "**** **** **** [0-9][0-9][0-9][0-9]",
          accepted: true,
          length: 16,
        },
        {
          brand: "Discover",
          image: "/images/this.providers/discover.png",
          verification: "^6(?:011|5[0-9]{2})[0-9]",
          separation: "^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$",
          hidden: "**** **** **** [0-9][0-9][0-9][0-9]",
          accepted: false,
          length: 16,
        },
        {
          brand: "Diners Club",
          image: "/images/this.providers/diners-club-international.png",
          verification: "^3(?:0[0-5]|[68][0-9])[0-9]",
          separation:
            "^([0-9]{4})([0-9]{4})?([0-9]{4})?(?:([0-9]{4})([0-9]{4})([0-9]{2}))?$",
          hidden: "**** **** **[0-9][0-9] [0-9][0-9]",
          accepted: false,
          length: 14,
        },
        {
          brand: "JCB",
          image: "/images/this.providers/jcb.png",
          verification: "^(?:2131|1800|35[0-9]{3})[0-9]",
          separation: "^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$",
          hidden: "**** **** **** [0-9][0-9][0-9][0-9]",
          accepted: false,
          length: 16,
        },
      ],
      activeProvider: null,
      cardError: null,
    };
  },
  methods: {
    handleCardInput() {
      //Preset Data
      var provider = this.card.number;

      //Find the Credit Card
      for (var i = 0; i < this.providers.length; i++) {
        //Check the Type
        if (provider.match(new RegExp(this.providers[i].verification))) {
          //Set the Active Card
          this.activeProvider = i;

          //Add Credit Card Icon

          //If the Credit Card is NOT accepted, Show the Error
          this.cardError = "Invalid Credit Card (Not accepted)";

          //End the Loop
          break;
        }
      }

      //Show Invalid Card
      if (
        this.activeProvider == null &&
        provider.length > 4 &&
        $(this).nextAll("small").length == 0
      ) {
        //Show Error
        this.cardError = "Invalid Credit Card";
      }

      //Preset they Key
      const key = this.activeProvider !== null ? this.activeProvider : 1;

      //Limit the Length of the Card, Allow Keys
      if (provider.length >= this.providers[key].length) {
        return;
      }

      //Add a Space if the Regex Passes
      if (new RegExp(this.providers[key].separation).exec(provider)) {
        this.card.number = this.card.number + " ";
      }

      //Return
      return;
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