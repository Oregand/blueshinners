<template>
  <div>
    <Header />
    <div v-if="$auth.loggedIn">
      {{ posts }}
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
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    this.fetchInstagram()
  },
  methods: {
    async fetchInstagram() {
      const data = await this.$axios.$get(
        'https://www.instagram.com/web/search/topsearch/?context=blended&query=blueshinners'
      )
      this.posts = data
    }
  }
}
</script>

<style></style>
