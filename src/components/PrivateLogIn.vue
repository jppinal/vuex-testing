<template lang="pug">
  #login
    h2 OAuth
    form(@submit.prevent="logIn({ email, pwd })" autocomplete="off")
      input#user_email(type="email" v-model.lazy="email" placeholder="mail@example.com")
      input#user_pwd(type="password" v-model.lazy="pwd")
      input#login(type="submit" value="login")
    p.error(v-if="error") Bad login information
</template>

<script>
import { mapActions } from 'vuex'
/* TODO: vuex */

export default {
  name: 'LogIn',
  methods: {
    ...mapActions('auth', [
      'logIn'
    ])
    /* login () {
      thi.login(this.email, this.pwd, (err, loggedIn) => {
        if (!loggedIn || err) this.error = true
        else this.$router.replace(this.$route.query.redirect || '/')
      })
    } */
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
