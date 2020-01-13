<template>
  <div>
    <Header />
    <Blog :posts="memorialPosts" />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/organisms/Header'
import Blog from '~/components/templates/Blog'
import Footer from '~/components/organisms/Footer'

export default {
  components: {
    Header,
    Footer,
    Blog
  },
  computed: {
    memorialPosts() {
      return this.$store.state.memorialPosts
    }
  }
}
</script>

<style></style>
