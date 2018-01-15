<template lang="pug">
  #login
    h2 Logged in
</template>

<script>

export default {
  name: 'EventBrite',
  methods: {
  },
  data () {
    return {
      email: '',
      pwd: '',
      error: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  font-weight: normal
ul
  list-style-type: none
  padding: 0
li
  display: inline-block
  margin: 0 10px
a
  color: #42b983
.error
  color: #FF0000
</style>
