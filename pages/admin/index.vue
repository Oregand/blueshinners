<template>
  <div>
    <Header />
    <div v-if="$auth.loggedIn">
      Test
    </div>
    <div v-if="!$auth.loggedIn">
      Not logged in
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/organisms/Header'
import Footer from '~/components/organisms/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style></style>
