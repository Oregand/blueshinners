<template>
  <div>
    <header id="home" class="hero-area">
      <div class="overlay">
        <span></span>
        <span></span>
      </div>
      <b-navbar
        toggleable="lg"
        variant="faded"
        type="light"
        class="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar"
      >
        <b-navbar-brand href="/">
          <img
            src="https://nuxtjs.org/logos/nuxt-emoji-white.png"
            height="50"
          />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <a v-smooth-scroll class="nav-link" href="#services">Who</a>
            <a v-smooth-scroll class="nav-link" href="#business-plan">About</a>
            <a v-smooth-scroll class="nav-link" href="#features">Memorial</a>
            <a v-smooth-scroll class="nav-link" href="#showcase">Portfolio</a>
            <a v-smooth-scroll class="nav-link" href="#pricing">Social Media</a>
            <a v-smooth-scroll class="nav-link" href="#testimonial">Posing</a>
            <a v-smooth-scroll class="nav-link" href="#team">Media</a>
            <a v-smooth-scroll class="nav-link" href="#blog">Blog</a>
            <a v-smooth-scroll class="nav-link" href="#contact">Contact</a>
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>Profile</em>
              </template>
              <b-dropdown-item href="/admin">Admin</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div class="container">
        <div class="row space-100">
          <div class="col-lg-6 col-md-12 col-xs-12">
            <div class="contents">
              <h2 class="head-title">In Loving Memory Of Blue Shinners</h2>
              <p>
                This website is dedicated to the memory of a great man with a
                big vision. Rest In Peace Blue.
              </p>
              <div class="header-button">
                <a
                  href="https://www.irishexaminer.com/breakingnews/ireland/tributes-paid-following-death-of-limerick-bodybuilding-legend-909522.html"
                  rel="nofollow"
                  target="_blank"
                  class="btn btn-border-filled"
                  >Blue Shinners</a
                >
                <a
                  href="https://fitnessvolt.com/35656/james-shinners-passed-away/"
                  rel="nofollow"
                  target="_blank"
                  class="btn btn-border page-scroll"
                  >Learn More</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-xs-12 p-0">
            <div class="intro-img">
              <img src="~/assets/img/blue.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style></style>
