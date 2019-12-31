<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="show">
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
          type="text"
          required
          placeholder="Enter message"
        />
      </b-form-group>

      <b-button type="submit" variant="primary" class="btn btn-common"
        >Submit</b-button
      >
      <b-button type="reset" variant="danger" class="btn btn-common"
        >Reset</b-button
      >
    </b-form>
  </div>
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
    onSubmit() {
      this.$bvToast.toast(`Your message has been submitted!`, {
        title: 'Nice!',
        autoHideDelay: 5000,
        variant: 'success',
        solid: true
      })
      this.onReset()
    },
    onReset() {
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
