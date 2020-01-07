<template>
  <section id="team" class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="team-text section-header text-center">
            <div>
              <h2 class="section-title">In Loving Memory</h2>
              <div class="desc-text">
                <p>
                  He won a lifetime achievement award from NABBA and was well
                  known for his involvement with the sport of boxing alongside
                  his passion of bodybuilding.
                </p>
                <p>
                  He also placed top 6 at the Mr. Universe competition twice and
                  had a successful run in his home country of Ireland.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3 col-md-6 col-xs-12">
          <div class="single-team">
            <div class="team-thumb">
              <img src="~/assets/img/6.jpg" class="img-fluid" alt="" />
            </div>

            <div class="team-details">
              <div class="team-social-icons">
                <ul class="social-list">
                  <li>
                    <a href="https://www.youtube.com/watch?v=tsZETi6YWZY">
                      <font-awesome-icon :icon="faPlayCircle" />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="team-inner text-center">
                <h5 class="team-title">Blue Shinners</h5>
                <p>Arnold Pose</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-xs-12">
          <div class="single-team">
            <div class="team-thumb">
              <img src="~/assets/img/5.jpg" class="img-fluid" alt="" />
            </div>

            <div class="team-details">
              <div class="team-social-icons">
                <ul class="social-list">
                  <li>
                    <a href="https://www.youtube.com/watch?v=b2fN77z0tkE">
                      <font-awesome-icon :icon="faPlayCircle" />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="team-inner text-center">
                <h5 class="team-title">Blue Shinners</h5>
                <p>Bicep Pose</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-xs-12">
          <div class="single-team">
            <div class="team-thumb">
              <img src="~/assets/img/7.jpg" class="img-fluid" alt="" />
            </div>

            <div class="team-details">
              <div class="team-social-icons">
                <ul class="social-list">
                  <li>
                    <a href="https://www.youtube.com/watch?v=Kdmrr8AqjpM">
                      <font-awesome-icon :icon="faPlayCircle" />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="team-inner text-center">
                <h5 class="team-title">Blue Shinners</h5>
                <p>Side Lat Pose</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-xs-12">
          <div class="single-team">
            <div class="team-thumb">
              <img src="~/assets/img/8.jpg" class="img-fluid" alt="" />
            </div>

            <div class="team-details">
              <div class="team-social-icons">
                <ul class="social-list">
                  <li>
                    <a
                      href="https://twitter.com/blueshinners/status/824306834811060229?lang=en"
                    >
                      <font-awesome-icon :icon="faPlayCircle" />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="team-inner text-center">
                <h5 class="team-title">Blue Shinners</h5>
                <p>Most Muscular Pose</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'

export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      faPlayCircle
    }
  }
}
</script>

<style></style>
