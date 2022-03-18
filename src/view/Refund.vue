<script setup lang="ts">
import { reactive, toRefs } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"
import AsideMenu from "../components/AsideMenu.vue"

const state = reactive({
  text: `The following policy describes the refund practices for Fun888. This refund policy is an attachment to our Terms and Conditions. Please read and ensure an understanding of both documents before placing bets.
\t•\tNo refund can be requested once the alleged deposit (including the bonus) has been played using the Services.
\t•\tA refund request will only be considered if it is requested within the first twenty-four (24) hours of the alleged transaction, or within thirty (30) days if a Player alleges that another individual (or a minor) has accessed his/her Player Account.
\t•\tWe reserve the right to withhold any refund or reverse transaction until the identity of the Player Account User is adequately established to our satisfaction, to ensure that any payment made to us will be honored after a refund has been made. You agree to provide, in case we demand, a notarized identification, or any other certified identification per the applicable laws of your jurisdiction. If such notarized or certified identification is not provided within five (5) days of our request, then such refund or reverse transaction shall not be effected, Your Player Account shall be closed and You shall forfeit all funds in Your Player Account, such decision shall be final, binding and not subject to appeal.
\t•\tIf you have funded your account with a Credit Card we reserve the right to pay all withdrawal requests up to the total amount deposited as refunds against the purchases you have made. If your withdrawals exceed the total amount deposited, any excess amount will be paid to you via one of our alternative methods available in the cashier.




\t•\tIf any credit card purchases are considered to carry an unacceptable risk for security or legal reasons either by our credit card processors or by our betting managers, the operator will initiate refunds for all such transactions back to the credit card, and notify all the appropriate authorities and parties.
\t•\tIf, for any reason, you are not satisfied with our services and request to issue a refund for the balance currently held in your account. Before a refund is processed all bonuses and winnings in your balance will be deducted before calculating the amount to be refunded.
\t•\tRefunds can only be via the same deposit method player used to deposit money and in the same currency deposited


Fun888 IS SOLELY OWNED BY https://www.fun888.site
`


})

onMounted(()=>{
  window.scrollTo(0,0)
})

</script>

<template lang="pug">
.about
  AsideMenu
  .about-rihgt

    section
      .title REFUND POLICY:
      .text {{ state.text }}




hr.hr
section.global
  <img src="@/assets/images/header/home/global.png" alt="global"/>
</template>

<style scoped>
.about{
  max-width: 64rem;
  @apply flex mx-auto py-6;
}
.about-rihgt{
  @apply ml-6;
}
.title{
  color: #25AAE1;
  @apply text-3xl mb-4;
}
.text{
  white-space: pre-line;
  @apply text-sm;
}

section + section {
  @apply mt-8;
}
</style>
