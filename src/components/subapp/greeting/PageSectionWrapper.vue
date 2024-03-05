<template>
  <div class="page-content-height content-padding">
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="col-12 text-center text-md-start"><h1 class="green">{{ sectionTitle }}</h1></div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  props: {
    sectionTitle: {
      type: String,
      default() {
        return ''
      }
    },
  },
  methods: {
  }
}
</script>

<style scoped>
.button-icon {
  font-size: 3rem;
}
</style>
