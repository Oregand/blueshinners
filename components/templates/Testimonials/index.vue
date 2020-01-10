<template>
  <section id="testimonial" class="section">
    <div class="container right-position">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="video-promo-content text-center">
            <a
              id="play-video"
              class="video-play-button video-popup"
              href="https://www.youtube.com/watch?v=b2fN77z0tkE"
            >
              <span></span>
            </a>
          </div>
        </div>
      </div>

      <div class="row justify-content-center testimonial-area">
        <div
          class="col-lg-10 col-md-12 col-sm-12 col-xs-12"
          style="overflow: hidden; padding-bottom: 60px"
        >
          <carousel id="client-testimonial" :items="1" class="text-center">
            <div class="item">
              <div class="testimonial-item">
                <div class="content-inner">
                  <p class="description">
                    One of the best irish bodybuilders ever.<br />
                    I miss Blue terribly, he came into my life at a rough time
                    <br />
                    and helped me through it with developing a love for the
                    sport of bodybuilding
                  </p>
                  <div class="author-info">
                    <h5>David O'Regan ; <span> Friend</span></h5>
                  </div>
                </div>
                <div class="client-thumb">
                  <img src="~/assets/img/9.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="item">
              <div class="testimonial-item">
                <div class="content-inner">
                  <p class="description">
                    I knew Blue as we grew up around the corner from each other.
                    I met him most days in the gym and the last time we spoke
                    was yesterday. We talked about old times, the sport as it is
                    now and training and life in general
                  </p>
                  <div class="author-info">
                    <h5>David O'Regan ; <span> Friend</span></h5>
                  </div>
                </div>
                <div class="client-thumb">
                  <img src="~/assets/img/4.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="item">
              <div class="testimonial-item">
                <div class="content-inner">
                  <p class="description">
                    rish Bodybuilding Legend Blue James Shinners .. Champion
                    Bodybuilder, Coach , Judge , gentleman.. an inspiration to
                    so many, will be sadly missed by all
                  </p>
                  <div class="author-info">
                    <h5>David O'Regan ; <span> Friend</span></h5>
                  </div>
                </div>
                <div class="client-thumb">
                  <img src="~/assets/img/7.jpg" alt="" />
                </div>
              </div>
            </div>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {}
}
</script>

<style></style>
