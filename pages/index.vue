<template>
  <div>
    <Header />
    <Services />
    <Business />
    <Features />
    <client-only placeholder="Loading...">
      <Showcase />
    </client-only>
    <Pricing />
    <client-only placeholder="Loading...">
      <Testimonials />
    </client-only>
    <Team />
    <Blog :posts="memorialPosts" />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/organisms/Header'
import Footer from '~/components/organisms/Footer'
import Services from '~/components/templates/Services'
import Business from '~/components/templates/Business'
import Contact from '~/components/templates/Contact'
import Blog from '~/components/templates/Blog'
import Team from '~/components/templates/Team'
import Testimonials from '~/components/templates/Testimonials'
import Pricing from '~/components/templates/Pricing'
import Showcase from '~/components/templates/Showcase'
import Features from '~/components/templates/Features'

export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  components: {
    Header,
    Footer,
    Services,
    Business,
    Contact,
    Blog,
    Team,
    Testimonials,
    Pricing,
    Showcase,
    Features
  },
  computed: {
    memorialPosts() {
      return this.$store.state.memorialPosts
    }
  }
}
</script>

<style></style>
