<template>
  <app-content>
    <div class="col-md-6 absolute-center">
      <h2 class="text-white form-header mb-3">Let's talk about the future 😏</h2>
      <form>
        <div class="form-group">
          <input type="text" class="form-control form-control-lg" placeholder="Full Name" autofocus>
        </div>
        <div class="form-group">
          <input type="email" class="form-control form-control-lg" placeholder="Email">
        </div>
        <div class="form-group">
          <textarea class="form-control form-control-lg" rows="3" placeholder="Message"></textarea>
        </div>
        <button class="btn btn-lg btn-success"><i class="fa fa-send mr-3"></i>Send</button>
      </form>
    </div>
  </app-content>
</template>

<script>
  import Content from '@/components/Content'

  export default {
    components: {
      'app-content': Content
    }
  }
</script>
