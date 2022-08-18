<template>
  <div class="backdrop">
    <input type="text" name="name" v-model="Name" autocomplete="off" required>
    <input type="text" name="name" v-model="Surname" autocomplete="off" required>
    <input type="text" name="name" v-model="Nickname" autocomplete="off" required>
    <button>Confirm</button>
    <button @click="closeEdit">Cancel</button>
  </div>
</template>

<script>
export default {
  name: "EditVue",
  data(){
    return{
      Name: '',
      Surname: '',
      Nickname: ''
    }
  },
  methods:{
    closeEdit(){
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>