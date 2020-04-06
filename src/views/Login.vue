<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from '@/components/registry/LoginComponent'

export default {
  name: 'Login',
  components: {
    LoginComponent
  }
}
</script>