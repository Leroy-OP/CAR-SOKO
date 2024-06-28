<template>
  
  <v-app-bar :elevation="2" color="black">
<template v-slot:prepend>
  <v-app-bar-nav-icon></v-app-bar-nav-icon> 
</template>

<v-app-bar-title>CAR SOKO</v-app-bar-title>
<v-btn to="/">Home</v-btn>

<v-btn to="/Products">Products</v-btn>
<v-btn to="/Aboutus">About Us</v-btn>
<v-btn to="/Contactus">Contact Us</v-btn>
<v-btn to="/Cart">
Cart
<v-badge color="black" :content="cart.length">
  <v-icon>mdi-store-outline</v-icon>
</v-badge>
</v-btn>
<v-btn to="/ServicesOffered">Services</v-btn>


</v-app-bar>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
computed: {
  ...mapGetters({
    cart: 'cart'
  })
},
}
</script>