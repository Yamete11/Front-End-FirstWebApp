<template>
  <div id="con">
    <div class="top">
      <h1>This is your Home page</h1>
    </div>
    <div class="bot">
      <input type="button" class="social" onclick="location.href='https://www.facebook.com/gleb.ivanov.779/'" value="Facebook">
      <input type="button" class="social" onclick="location.href='https://github.com/Yamete11'" value="Github">
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped>


.social{
  border: none;
  padding: 15px;
  margin: 15px;
  border-radius: 4px;
  background-color: white;
  font-weight: bold;
  font-family: sans-serif;
  cursor: pointer;
}

.social:hover{
  background-color: lightgray;
  transition: 0.3s;

}


.top{
  text-align: center;
}
.bot{
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
