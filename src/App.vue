<template>
  <div class="nav">
    <router-link class="link link-home" :to="{ name: 'home'}">Home</router-link> |
    <router-link class="link link-base" :to="{ name: 'database'}">Database</router-link>
  </div>
  <router-view/>
</template>

<style>
.nav{
  text-align: center;
  margin-top: 30px;
}

.link{
  position: relative;
  border: none;
  margin: 15px;
  padding: 10px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-family: sans-serif;
}

.link::after{
  content: '';
  position: absolute;
  width: 100%;
  height: 0.175rem;
  left: 0;
  bottom: 0;
  background: black;
  cursor: pointer;
}
.link::after{
  transform: scale(0, 1);
  transition: 0.3s ease;
}

.link:hover::after{
  transform: scale(1, 1);
}

.database.router-link-exact-active::after{
  content: '';
  position: absolute;
  width: 100%;
  height: 0.175rem;
  left: 0;
  bottom: 0;
  background: black;
  transform: scale(1, 1);
}


</style>
