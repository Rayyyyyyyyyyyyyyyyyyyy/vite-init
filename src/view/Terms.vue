<script setup lang="ts">
import { reactive, toRefs } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"
import AsideMenu from "../components/AsideMenu.vue"

const state = reactive({

  text: `By requesting one of the Fun888.com self-exclusion time periods on offer you agree to the following terms and conditions, which will be effective from the minute you receive a confirmation email of your chosen self-exclusion, this email will be sent to the email address used to register your account only and will display the date of self-exclusion completion.
Self-exclusion requests must be made by email from the account’s registered email address to our customer support department at https://www.fun888.site
Requests made via our Chat function will not be actioned. However, a customer support agent will direct you to our customer support email service.
On receipt, of an email request for account closure, the requested account and any linked accounts of Fun888.com will be placed on our first stage, 24-hr cooling off period which will disable your account or accounts, allowing no gambling activity. Once this time has passed; while your account or accounts remain closed, a customer support agent will inform you of the 1-week, 1-month, 6-months and permanent self-exclusions available. There will be no variation of these time periods.
To proceed with this process, we will require an email response. If we do not receive a response within a further 24-hrs, your account will be reopened and confirmed by email.
If after reviewing our self-exclusion options you decide you would like to proceed with a permanent self-exclusion, please, inform us of this in your response.



On occasion, we might decide to place an account on a short self-exclusion period if we believe it to be needed and or beneficial to the customer. This will be communicated by email; the above terms and conditions will apply.
When you request or we deem it necessary to add an Fun888.com self-exclusion. All remaining funds left in your account will be returned to you manually. You are not permitted to leave any balance in your account during a self-exclusion time period. You will not be able to access your account to withdraw any funds during your requested self-exclusion.
If you have an Fun888.com account affected by a self-exclusion that has any active bets, the Cash Out function will be applied at the point of self-exclusion confirmation. Bets will not be void; stakes will not be returned or remain active throughout a self-exclusion time period. Bets will not be reinstated after a self-exclusion completion.
Once a self-exclusion is applied to your account, it will stay in place until the request time has finished, it will not be reversed or decreased for any reason. Permanent self-exclusions will remain closed indefinitely.
Fun888.com will use all reasonable endeavors to ensure compliance with our responsible gambling self-exclusion policy. However, you accept that we will not be held responsible or liable if you attempt to open any new Fun888.com accounts or indeed succeed. In addition, Fun888.com will not be held liable or accountable if you continue to deposit and wager using additional accounts which have previously not been disclosed.



Any future wagers, Bonus funds and entries in any promotions during a requested self-exclusion time will be forfeited, resulting in no return of stakes or payment of winnings. We will not be able to reinstate these if the account is reopened after the self-exclusion period.

You acknowledge that:
You should not attempt to, deposit or place any wager on any of your Fun888.com accounts that you have requested to be excluded from during your selected self-exclusion.
You should not attempt or proceed to open any new Fun888.com during your self-exclusion period, or indefinitely if a permanent self-exclusion has been selected.
If you succeed in opening a new Fun888.com account during a self-exclusion period, we will Endeavour to close any and all such accounts at our earliest detection.
Fun888.com’s responsibility is only to take reasonable steps to prevent you from gambling on any of our products. It is also the customer’s responsibility to refrain from breaching these agreed terms.
This is a voluntary request made by you. If you proceed to breach this agreement, Fun888.com or any of its employees are not held accountable or liable for any losses you may suffer. Any losses acquired during your self-exclusion period will not be refunded.





This is a voluntary agreement, therefore if you proceed to breach the terms within, in the first instance only, any wagering that has taken place will stand, losses will not be refunded. Multiple breaches of the terms within, all wagering will be void and dealt with at Fun888.com’s discretion.
Also, if we have suspicions or further investigation provides evidence that you have actively attempted to disguise the source of your account or accounts; which affects our ability to block your account or accounts promptly, this will also be dealt with at Fun888.com’s discretion.
Once your selected self-exclusion has come to an end, your account will automatically be reopened. However, you will receive an email confirmation of this information which will be sent to your registered email address.

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
      .title SELF-EXCLUSION TERMS AND CONDITIONS:
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
