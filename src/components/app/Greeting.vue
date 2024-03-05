<template>
  <div class="greetings">
    <div class="page-content-height d-flex align-items-center content-padding start-bg">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-4 text-center text-md-start"><h1 class="green">{{ msg }}</h1></div>
          <div class="col-12 col-md-8 text-center text-md-start">
            <h5>
              My name is Steve Daniels. Currently I'm a front-end web developer. My main interests are web programming, artificial intelligence, and data science.
            </h5>
          </div>
        </div>
        <div class="row mt-5">
          <div v-for="(item,index) in infos" :key="'info-'+index" class="col-6 col-md-3 text-center">
            <button-list-info v-bind="item"></button-list-info>
          </div>
        </div>
      </div>
    </div>
    <education-section />
    <certification-section />
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg: "Hello!",
      isHover: false,
      infos: [
        {itemLabel: "Education", itemIcon: "graduation-cap"},
        {itemLabel: "Licenses and Certifications", itemIcon: "certificate"},
        {itemLabel: "Work Experience", itemIcon: "laptop-file"},
        {itemLabel: "Projects", itemIcon: "list-check"},
      ]
    }
  }
}
</script>

<style scoped>
.start-bg {
  background-color: rgb(238, 238, 238);
}
</style>
