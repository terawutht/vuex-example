<template>
  <div>
    <h1>{{msg}}</h1>
    <input type="text" placeholder="first name" v-model="firstName">
    <input type="text" placeholder="last name" v-model="lastName">
    <button @click="handleClick">save</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "setUser",
  props: {
    msg: String
  },
  data() {
    return {
      firstName: "",
      lastName: ""
    };
  },
  methods: {
    ...mapActions({
      setName: "user/setName"
    }),
    handleClick() {
      console.log("firstName is ", this.firstName);
      console.log("lastName is ", this.lastName);
       let newUser ={
           firstName : this.firstName,
           lastName : this.lastName
       }
       this.setName(newUser)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
