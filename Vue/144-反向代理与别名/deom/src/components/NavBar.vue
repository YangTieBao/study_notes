<template>
    <div>
        <button v-show="myleft">left</button>
        navbar-{{ myname }}
        <button @click="handle1">right</button>
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: ['myname', 'myleft'],
  methods: {
    handle1 () {
      this.$emit('event')
    }
  }
}
</script>
