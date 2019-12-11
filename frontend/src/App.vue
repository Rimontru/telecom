<template>
  <section id="App">
    <div class="container-fluid mt-5">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      msg: 'Load App-Component'
    }
  },
  mounted () {
    console.log(this.msg)
  }
}

</script>
