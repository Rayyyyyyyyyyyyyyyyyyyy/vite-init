<script setup lang="ts">
import { reactive, toRefs } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"
import AsideMenu from "../components/AsideMenu.vue"

const state = reactive({

  text:`Fun888 (the Company) takes protecting your privacy very seriously. We implement suitable technical and administrative controls in our endeavours to keep your personal information protected at all times. Our Privacy Policy lays out how your personal information is handled and we ask that you please read through it as by using our services you agree to accept the terms.
Purpose for the collection of personal data your personal information is collected and used for the following reasons:
	•	To provide you with our services
	•	To make more of such services available to you where possible and appropriate
	•	For the purposes of security and control
	•	To satisfy regulatory and legal requirements
	•	For historical and statistical purposes

We may further use your personal information in order to contact your from time to time to introduce you to our products or any events, activities, projects, plans, developments, undertakings and special offers that are taking place or being promoted or supported the Company. We may contact you via email, live chat or internal support ticket.



When you supply us with your personal information, you are agreeing that you do not consider our use of such personal information in accordance with this Privacy Policy as any breach of your rights under the Data Protection Act. At any time, you have the right to opt out from receiving any promotional and/or marketing materials that we may send you. You are encouraged to contact us should you wish to do so.
Disclosing personal information to third parties:
The Company policy is that your personal information will not be disclosed to anyone other than employees of the Company that require access to your data in order to provide you with a service, with the exception where the Company may be required by law or legal process to disclose your personal information to relevant authorities.
Protection of your personal information:
The Company employs physical, electronic and managerial procedures to safeguard the security of the data you provide to us. SSL encryption is used on our Website for all sensitive data. The Company advises you to take any and all precautions you can to protect your personal data while using the Internet.
Access to your personal information:
You have the right to access any information we hold about you at any time. You can log in into our Website using your username and password at any time and review your Account page. You can also update or edit your information from this page.



You may also contact the company service department at the Company and ask for details of any information we hold about you. You have the right to request any incorrect information to be corrected or, where applicable, removed. The Company reserves the right to ask you for a written request for any information we hold about you.
Your right to be forgotten:
You have the right to have your personal data deleted in certain situations. Your 'right to be forgotten' is in support of your freedom of expression. If you want to have your personal data deleted, you should contact us at https://www.fun888.site and we will respond to you within a month. If we agree to erase your data we will also notify any relevant third party, where possible, and inform you who they are. Should your request be denied, you will be informed why and you have the right to complain to the supervisory authority.
Cookies:
A cookie is a data packet which is used solely for web analytic purposes. Our Website uses cookies to recognise visitors and facilitate the login process. Cookies used by the Company are only set if the user agrees and expire within a maximum of four weeks.




Privacy Commitment:
In order to ensure that your personal information remains confidential our privacy guidelines are communicated to every employee of the Company. Where the Website of the Company contains links to other sites, the Company does not share your personal information with those sites and is in no way responsible for the privacy policies of those sites. We would advise you to make yourself aware of the privacy policies of any such site. If our privacy policy changes and we plan to use your personal information in a way that is different from stated to you at the time of collection, you will be informed accordingly.The Privacy Policy of the Company is subject to change at any time and it is advised that you review the Privacy Policy periodically to check for changes.

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
      .title PRIVACY POLICY:
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
