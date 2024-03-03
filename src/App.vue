<script>
export default{
  data(){
    return {
      msg: "HI"
    }
  },
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-2">
        <router-link to="/">Go to Home</router-link>
      </div>
      <div class="col-sm-2">
        <router-link to="/about">Go to About</router-link>
      </div>
    </div>
  </div>
  <div class="px-5"><router-view></router-view></div>
</template>

<style scoped>

</style>
