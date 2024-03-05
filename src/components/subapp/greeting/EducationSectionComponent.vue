<template>
  <page-section-wrapper sectionTitle="Education" class="edu-bg">
    <div class="section-content d-flex align-items-center pt-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-4 pb-3">
            <img src="Core/assets/img/its-logo.jpg" alt="its-logo" style="width: 100%;">
          </div>
          <div class="col-12 col-md-8 pb-3">
            <h4>Institut Teknologi Sepuluh Nopember</h4>
            <h4>Bachelor's degree in Informatics Engineering</h4>
            <h4>GPA: 3.63/4.00</h4>
          </div>
        </div>
      </div>
    </div>
  </page-section-wrapper>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  props: {
  },
  methods: {
  }
}
</script>

<style scoped>
.edu-bg {
  background-color: white;
}
.section-content {
  min-height: calc(100vh - 11rem);
}
</style>
