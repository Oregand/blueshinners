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
        <b-navbar-brand href="https://nuxtjs.org">
          <img
            src="https://nuxtjs.org/logos/nuxt-emoji-white.png"
            height="50"
          />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
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
                big vision.
              </p>
              <div class="header-button">
                <a
                  href="https://rebrand.ly/slick-ud"
                  rel="nofollow"
                  target="_blank"
                  class="btn btn-border-filled"
                  >Purchase Now</a
                >
                <a
                  href="https://rebrand.ly/slick-ud"
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
              <img src="~/assets/img/intro.png" alt="" />
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
