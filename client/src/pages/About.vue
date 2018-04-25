<template>
  <app-content>
    <div class="col-md-12 absolute-center">
      <div class="row">
        <div class="col-lg-4 col-md-12 text-center">
          <img src="https://s3.eu-central-1.amazonaws.com/avivharuzi.com/images/about/me.jpg" class="img-fluid me img-circle">
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="vc">
            <p class="text-light m-0">
            Hi, I'm Aviv Haruzi from Israel a full stack web developer 🌠.
            <br>
            All the time I had a special connection to the computer if it's about video games and video editing or audio but it was a hobby no more than that.
            <br>
            While serving in the army I began to dig a little bit of development and technologies on the internet that a good friend suggested to me.
            <br>
            It was like discovering a new world I didn't know about even though it was in front of me all the time.
            <br>
            I decided to take it a step further and walk in an orderly fashion and learn a full stack course at John Bryce College in Tel Aviv.
            <br>
            During my studies, I discovered that this is the thing I want to engage in life and make the most out of it.
            <br>
            Now I'm currently focusing on the most advanced technologies especially MongoDB and node.js.
            <br>
            Front-end frameworks like angular and vue.js For cloud storage I'm focusing on amazon web services ☁ and many more libraries and technologies that will be too long to list 😄 you can check out my <router-link to="/skills">skills</router-link>.
            <br>
            Wanna to talk about the future <router-link to="/contact">contact</router-link> me or send me an <a href="mailto:hello@avivharuzi.com">email</a>.
            </p>
          </div>
        </div>
      </div>
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

<style>
  .col-md-8 {
    position: relative;
  }
</style>
