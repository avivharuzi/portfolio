<template>
  <app-content>
    <div class="col-lg-6 col-md-12 absolute-center">
      <app-loading :src="loadingSrc" :width="100" :height="100" :loading="isLoading"></app-loading>
      <h2 class="text-white form-header mb-3">Let's talk about the future 😏</h2>
      <div v-if="messageForm && messageType" :class="'alert alert-' + messageType">
        <p class="lead"><i class="fa mr-3"
        :class="[{ 'fa-check': messageType === 'success' },
        { 'fa-exclamation-circle': messageType === 'danger' }]"></i>{{ messageForm }}</p>
      </div>
      <form @submit.prevent="onSubmit" autocomplete="off" novalidate>
        <div class="form-group">
          <input v-model="contact.fullname" v-validate="'required|alpha_spaces'" name="fullname"
          type="text" class="form-control form-control-lg" placeholder="Full Name" autofocus>
          <p class="text-danger" v-if="errors.has('fullname')">{{ errors.first('fullname') }}</p>
        </div>
        <div class="form-group">
          <input v-model="contact.email" v-validate="'required|email'" name="email"
          type="email" class="form-control form-control-lg" placeholder="Email">
          <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
        </div>
        <div class="form-group">
          <textarea v-model="contact.message" v-validate="'required'" name="message"
          class="form-control form-control-lg" rows="3" placeholder="Message"></textarea>
          <p class="text-danger" v-if="errors.has('message')">{{ errors.first('message') }}</p>
        </div>
        <button class="btn btn-lg btn-success"><i class="fa fa-send mr-3"></i>Send</button>
      </form>
    </div>
  </app-content>
</template>

<script>
  import Content from '@/components/Content'
  import Loading from '@/components/Loading'

  export default {
    data () {
      return {
        contact: {
          fullname: null,
          email: null,
          message: null
        },
        loadingSrc: 'https://cdn.avivharuzi.com/images/tools/loading.gif',
        isLoading: false,
        messageType: null,
        messageForm: null
      }
    },
    methods: {
      onSubmit () {
        let vm = this;
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.setContact();
            return;
          }
        });
      },
      setContact () {
        this.isLoading = true
        this.$http.post('api/contact', this.contact)
          .then(res => {
            this.resetContact().then(() => this.$validator.reset())
            this.messageType = 'success'
            this.messageForm = res.body.message
            this.isLoading = false
          })
          .catch(err => {
            this.messageType = 'danger'
            this.messageForm = err.body.message
            this.isLoading = false
          })
      },
      async resetContact () {
        this.contact.fullname = null
        this.contact.email = null
        this.contact.message = null
        this.errors.clear()
      }
    },
    components: {
      'app-content': Content,
      'app-loading': Loading
    }
  }
</script>
