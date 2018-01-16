<template lang="pug">
  .authenticated
    h2 Authenticated
    span access_token: {{ getToken() }}
    button(@click='logout()') logOut
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'OauthExample',
  methods: {
    ...mapActions('oauth', [
      'logOut'
    ]),
    logout () {
      this.logOut().then(() => {
        this.$router.push('/oauth/logout')
      })
    }
  },
  computed: {
    ...mapGetters('oauth', [
      'getToken'
    ])
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus">
  span
    font-weight: normal
    font-size: 10pt
    display: block
    color: #AAAAAA
</style>
