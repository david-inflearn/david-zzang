<!-- =========================================================================================
File Name: RegisterJWT.vue
Description: Register Page for JWT
----------------------------------------------------------------------------------------
Item Name: Education Template
  Author: David
Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
========================================================================================== -->


<template>
  <vs-button class="mb-3 mt-4 ml-2" @click="registerAuth0" color="#eb5424">Auth0</vs-button>
</template>

<script>
export default {
  methods: {
    checkLogin () {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {

        // Close animation if passed as payload
        // this.$vs.loading.close()

        this.$vs.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })

        return false
      }
      return true
    },
    registerAuth0 () {
      if (!this.checkLogin()) return
      this.$auth.login({ target: this.$route.query.to })
    }
  }
}

</script>

