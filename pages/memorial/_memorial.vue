<template>
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 pl-4">
            <div class="business-item-info">
              <h3>{{ memorialPost.title }}</h3>
              <div v-html="$md.render(memorialPost.body)" />
              <a
                class="btn btn-common"
                href="https://fitnessvolt.com/35656/james-shinners-passed-away/"
                >Learn More</a
              >
            </div>
          </div>
        </div>
      </div>
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
  async asyncData({ params, payload }) {
    if (payload) return { memorialPost: payload }
    else
      return {
        memorialPost: await require(`~/assets/content/memorial/${params.memorial}.json`)
      }
  }
}
</script>

<style></style>
