<script setup lang="ts">
import { reactive, toRefs } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"
import AsideMenu from "../components/AsideMenu.vue"

const state = reactive({
  text: `GAME OF SKILLS
Fun888 is considered as a “Game of Skill.” The game of skills can be defined as a game wherein the skills of the individuals participating in any online fantasy sports gaming play a dominant role rather than the mere luck of the individuals. The individuals in game of skills use their knowledge, skills, training and attention for participation and winning.



Online fantasy sports gaming is considered to be a legal practice around the world with certain states being an exception. Online fantasy sports gaming is entirely based on the concept of Game of Skills, wherein the users form their own teams and are allocated points on the basis of on-field performance of their chosen players.



Fun888 is completely legal as it offers services, and Contest(s) related to fantasy cricket, fantasy football, fantasy kabaddi, fantasy basketball etc. The services, contest(s) and program(s) related to online fantasy sports gaming offered by Fun888 enables its users to create their own team prior the match begins and then the teams are awarded points on the basis of the real-life performance of the players chosen by the users in the team.



The individual whose team scores the highest aggregate of points is announced as the winner. The formation of team by the users of Fun888 is entirely dependent on the skills, knowledge and attention of the users which makes online fantasy sports gaming offered at Fun888 a game of skills and 100% legal.





ALIGNMENT WITH THE INDIAN LAWS
The game of skills such as the online fantasy sports gaming are considered to be legal all over India. expect certain states such as Sikkim, Assam, Odisha, Telangana, Nagaland, Andhra Pradesh and Karnataka. The Public Gambling Act, 1867 (“PGA, 1867”) is recognized as the primary legality driving the prevalence of gambling in India.



The PGA defines the act of “public gambling” and the keeping of a common gaming house as a criminal and punishable act in India. However, the online fantasy sports gaming is considered to be an exception under the PGA, wherein the provisions and punishments of PGA shall not be applicable to games played by the user using their skills and knowledge as primary tools.





SIKKIM, ASSAM, ODISHA, TELANGANA, NAGALAND, ANDHRA PRADESH AND KARNATAKA.
There are various states in India wherein the laws related to the game of skills are unclear. In this regard, for the websites offering online fantasy sports gaming, it remains unclear whether to offer the services for free or not. The Indian states with no clearance regarding the offering of pay-to-play contests include Sikkim, Assam, Odisha, Telangana, Nagaland, Andhra Pradesh and Karnataka.



In this context, Fun888 does not permit the users identified as the residents of Sikkim, Assam, Odisha, Telangana, Nagaland, Andhra Pradesh and Karnataka to participate in the pay-to-play contest(s) organized by Fun888.`
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
      .title Legalities:
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
