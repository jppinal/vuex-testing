<template lang="pug">
  #private
    h1 Private Area
    a
      router-link(v-if="loggedIn" to="/private/logout") Log out
    router-view
</template>

<script>
import auth from '@/auth'

export default {
  name: 'Private',
  methods: {
  },
  data () {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
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
