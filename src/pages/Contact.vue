<template>
  <app-content>
    <div class="col-md-6 absolute-center">
      <h2 class="text-white form-header mb-3">Let's talk about the future 😏</h2>
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

  export default {
    data () {
      return {
        contact: {
          fullname: null,
          email: null,
          message: null
        }
      }
    },
    methods: {
      onSubmit () {
        let vm = this;
        this.$validator.validateAll().then((result) => {
          if (result) {
            console.log(vm.contact)
            return;
          }
        });
      }
    },
    components: {
      'app-content': Content
    }
  }
</script>
