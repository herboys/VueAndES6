<template>
  <div class="home">
    adas
  </div>
</template>

<script>

import {Login} from "@/api/api";

export default {
  name: 'Home',
  mounted() {
    Login()
    console.log(Login())
  }

}
</script>
