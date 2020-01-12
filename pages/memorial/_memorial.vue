<template>
  <section id="testimonial" class="section">
    <article>
      <h1>{{ memorialPost.title }}</h1>
      <div v-html="$md.render(memorialPost.body)" />
    </article>
  </section>
</template>

<script>
export default {
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
