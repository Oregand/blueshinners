<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="contact-text section-header text-center">
            <div>
              <h2 class="section-title">Get In Touch</h2>
              <div class="desc-text">
                <p>
                  If you have a question about Blue, or want to offer a
                  memorial, please reach out.
                </p>
                <p>We do our best to respond to everyone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 col-md-12">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              />
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Name:"
              label-for="input-2"
              description="Your contact name."
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                type="text"
                required
                placeholder="Enter name"
              />
            </b-form-group>
            <b-form-group
              id="input-group-3"
              label="Subject:"
              label-for="input-3"
              description="Your message subject."
            >
              <b-form-input
                id="input-3"
                v-model="form.subject"
                type="text"
                required
                placeholder="Enter subject"
              />
            </b-form-group>
            <b-form-group
              id="input-group-4"
              label="Message:"
              label-for="input-4"
              description="Your message."
            >
              <b-form-input
                id="input-4"
                v-model="form.message"
                type="textarea"
                required
                placeholder="Enter message"
              />
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </div>

        <div class="col-lg-1"></div>

        <div class="col-lg-4 col-md-12">
          <div class="contact-img">
            <img src="~/assets/img/01.png" class="img-fluid" alt="" />
          </div>
        </div>

        <div class="col-lg-1"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      form: {
        email: '',
        name: '',
        subject: '',
        message: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(e) {
      e.preventDefault()
      this.form.name = ''
      this.form.email = ''
      this.form.subject = ''
      this.form.message = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style></style>
