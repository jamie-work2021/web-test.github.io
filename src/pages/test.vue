<template>
<q-page class="flex flex-center">
    <div style="height: 2000px;">test</div>
</q-page>
 <!-- <div id="q-app">
    <q-layout>
    <q-page-container>
        <div style="height:2000px;">test</div>
        <router-view/>
    </q-page-container>

   
  </q-layout>
  </div> -->
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
       slide: 1,
       lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
 

}



</script>


