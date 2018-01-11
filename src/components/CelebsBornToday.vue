<template lang="pug">
  .celebs
    h3 5 Spanish Celebs Born Today
    input#send(type="submit" value="who?" @click="fetchCelebsBornToday()")
    template
      ul(v-if="celebsList().length > 0")
       li(v-for="celeb in celebsList()")
        a(:href="celeb.href") {{celeb.name}}
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CelebsBornToday',
  methods: {
    ...mapActions('moduleB', [
      'fetchCelebsBornToday'
    ])
  },
  computed: {
    ...mapGetters('moduleB', [
      'celebsList'
    ])
  },
  data () {
    return {
      msg: 'Vuex testing App'
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
</style>
