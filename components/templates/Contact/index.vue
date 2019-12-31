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
          <ContactForm />
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
import ContactForm from '~/components/organisms/Form/Contact'

export default {
  components: {
    ContactForm
  }
}
</script>

<style></style>
