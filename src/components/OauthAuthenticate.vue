<template lang="pug">
  .login
    h2 Authenticate
    span domain: {{ API_DOMAIN }}
    span clientID: {{ API_CLIENTID }}
    span redirectUri: 'http://localhost:8080/oauth/callback',
    span audience: {{ API_AUDIENCE }}
    span responseType: 'token id_token'
    span scope: 'openid'
    button(@click='logIn()') LogIn
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'OauthAuthenticate',
  methods: {
    ...mapActions('oauth', [
      'logIn'
    ])
  },
  data () {
    return {
      API_DOMAIN: process.env.API_DOMAIN,
      API_CLIENTID: process.env.API_CLIENTID,
      API_AUDIENCE: process.env.API_AUDIENCE
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
