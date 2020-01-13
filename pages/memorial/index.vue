<template>
  <div>
    <Header />
    <section id="testimonial" class="section">
      <div />
    </section>
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
  computed: {
    memorialPosts() {
      return this.$store.state.memorialPosts
    }
  }
}
</script>

<style></style>
