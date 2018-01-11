<template lang="pug">
  .hello
    h1 {{ msg }}
    h2 Essential Links
    ul
      li
        a#vuejs(href="https://vuejs.org" target="_blank") Vue
    h2 Ecosystem
    ul
      li
        a(href="http://router.vuejs.org/" target="_blank") vue-router
      li
        a(href="http://vuex.vuejs.org/" target="_blank") vuex
      li
        a(href="http://vue-loader.vuejs.org/" target="_blank") vue-loader
    h3 write a number
    input#numb(type="number" v-model.number="number")
    input#send(type="submit" value="send" @click="setNumber(number)")
    p#result(v-if="moreThanTen()") The number is greater than 10
    celebs-born-today
</template>

<script>
import CelebsBornToday from './CelebsBornToday'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  components: {
    CelebsBornToday
  },
  methods: {
    ...mapActions('moduleA', [
      'setNumber'
    ]),
    ...mapActions('moduleB', [
      'fetchCelebsBornToday'
    ])
  },
  computed: {
    ...mapGetters('moduleA', [
      'moreThanTen'
    ])
  },
  data () {
    return {
      msg: 'Vuex testing App',
      number: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h1, h2
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
