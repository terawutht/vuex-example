<template>
   <div>
            <h1>{{msg}}</h1>
            <h2>First Name : {{firstName}}</h2>
            <h2>Last Name : {{lastName}}</h2>
            
   </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: 'setUser',
  props: {
    msg: String
  },computed:{
      ...mapState({
          firstName : store => store.user.firstName,
          lastName : store => store.user.lastName
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>