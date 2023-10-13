<script>

import headerpart from "./components/header-part.vue"
import searchbar from "./components/partials/searchbar.vue"
import loader from "./components/partials/loader.vue"
import cardcontainer from "./components/cardcontainer.vue"

export default {
  components: {
    headerpart,
    searchbar,
    loader,
    cardcontainer
  }
}

</script>

<template>

  <headerpart/>
  <searchbar/>
  <loader/>
  <cardcontainer/>

</template>


<style lang="scss">

@use "./scss/main.scss" ;

</style>