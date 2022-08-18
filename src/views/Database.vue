<template>
  <div class="body">
    <h1>This is your Movie Database</h1>

    <div class="nav">
      <router-link class="link database" :to="{ name: 'movie'}">Movie</router-link>
      <router-link class="link database" :to="{ name: 'actor'}">Actor</router-link>
      <router-link class="link database" :to="{ name: 'actor-movie'}">Actor-Movie</router-link>
    </div>
    <router-view/>


  </div>

</template>

<script>
export default {
  name: "Database",

}
</script>

<style>

.body{
  height: 60vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
}

.main-form{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}
.form{
  width: 50%;
  position: relative;
  height: 50px;
  overflow: hidden;
  margin: 15px;
}
.form input{
  width: 100%;
  height: 100%;
  padding-top: 10px;
  border: none;
  outline: none;
}

.form label{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 99%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid black;
}

.form label::after{
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  height: 100%;
  width: 100%;
  border-bottom: 2px solid black;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.content-name{
  position: absolute;
  bottom: 5px;
  left: 0;
  transition: all 0.3s ease;
}

.form input:focus + .label-name .content-name, .form input:valid + .label-name .content-name{
  transform: translateY(-150%);
  font-size: 14px;
  color: gray;
}

.form input:focus + .label-name::after, .form input:valid + .label-name:after{
  transform: translateX(0%);
}


.btn{
  text-decoration: none;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  font-family: sans-serif;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgray;
}

.btn:hover{
  transition: 0.3s;
  background-color: gray;
}

.removeBtn{
  text-decoration: none;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background-color: darkgray;
  margin: 5px;

}

.removeBtn:hover{
  transition: 0.3s ease;
  background-color: gray;
}

li{
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 2rem;
  width: 100%;


}
.list{
  margin: auto;
  text-align: center;
}

.result{
  margin: 50px;
}

.error{
  color: red;
}
</style>