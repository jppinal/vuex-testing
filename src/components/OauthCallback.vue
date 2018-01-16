<template lang="pug">
  .callback
    h2 Callback
    span loading
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'OauthCallback',
  props: ['auth'],
  methods: {
    ...mapActions('oauth', [
      'callback'
    ])
  },
  mounted () {
    this.callback().then(() => {
      this.$router.replace('/oauth')
    })
  },
  data () {
    return {
    }
  }
}
</script>
