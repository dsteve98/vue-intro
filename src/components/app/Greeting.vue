<template>
  <div class="greetings">
    <div class="page-content-height d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4"><h1 class="green">{{ msg }}</h1></div>
          <div class="col-12 col-md-8">
            <h3>
              My name is Steve Daniels. Currently I'm a front-end web developer. My main interests are web programming, artificial intelligence, and data science.
            </h3>
          </div>
        </div>
        <div class="row mt-5">
          <div v-for="(item,index) in infos" :key="'info-'+index" class="col-6 col-md-3 text-center">
            <button-list-info v-bind="item"></button-list-info>
          </div>
        </div>
      </div>
      
     
    </div>
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

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
