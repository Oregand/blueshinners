<template>
  <section id="blog" class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="blog-text section-header text-center">
            <div>
              <h2 class="section-title">Messages From The Man</h2>
              <div class="desc-text">
                <p>
                  Read some of Blues best advice.
                </p>
                <p>When he speaks, you listen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          v-for="post in posts"
          class="col-lg-4 col-md-6 col-xs-12 blog-item"
        >
          <div class="blog-item-wrapper">
            <div class="blog-item-img">
              <a href="single-post.html">
                <img src="img/blog/01.jpg" class="img-fluid" alt="" />
              </a>
            </div>
            <div class="blog-item-text">
              <h3>
                <nuxt-link :to="`/memorial/${post.slug}`">{{
                  post.title
                }}</nuxt-link>
              </h3>
              <p>
                {{ post.body }}
              </p>
              <a href="" class="read-more">5 Min read</a>
            </div>
            <div class="author">
              <span class="name"
                ><i class="lni-user"></i
                ><a href="#">{{ post.description }}</a></span
              >
              <span class="date float-right"
                ><i class="lni-calendar"></i
                ><a href="#">{{ post.date }}</a></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  props: {
    posts: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style></style>
