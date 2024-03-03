<template>
  <div
    role="button"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
    class="pb-3"
  >
    <span class="button-icon"><font-awesome-icon :icon="itemIcon" :bounce="isHovered" style="--fa-animation-iteration-count: 1" /></span>
    <div>
      {{itemLabel}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isHovered: false,
    }
  },
  props: {
    itemIcon: {
      type: String,
      default() {
        return ''
      }
    },
    itemLabel: {
      type: String,
      default() {
        return ''
      }
    },
  },
  methods: {
    handleMouseOver() {
      this.isHovered = true;
    },
    handleMouseLeave() {
      this.isHovered = false;
    }
  }
}
</script>

<style scoped>
.button-icon {
  font-size: 3rem;
}
</style>
