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
  <header>
    <div class="wrapper">
      <div class="container py-4 px-3 mx-auto">
        <h1>HI</h1>
        <button class="btn btn-primary">Just Button</button>
      </div>
    </div>
  </header>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
