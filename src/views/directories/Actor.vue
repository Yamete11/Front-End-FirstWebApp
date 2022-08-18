<template>
  <form @submit.prevent="handleSubmit" class="main-form">
    <div class="form">
      <input type="text" name="name" v-model="Name" autocomplete="off" required>
      <label for="name" class="label-name">
        <span class="content-name">Name</span>
      </label>
      <div v-if="titleError" class="error">{{ titleError }}</div>
    </div>

    <div class="form">
      <input type="text" name="name" v-model="Surname" autocomplete="off" required>
      <label for="name" class="label-name">
        <span class="content-name">Surname</span>
      </label>
      <div v-if="genreError" class="error">{{ genreError }}</div>
    </div>

    <div class="form">
      <input type="text" min="1" max="10" v-model="Nickname" autocomplete="off" required>
      <label for="name" class="label-name">
        <span class="content-name">Nickname</span>
      </label>
      <div v-if="gradeError" class="error">{{ gradeError }}</div>
    </div>

    <button class="btn" @click="addMovie(Name, Surname, Nickname)">Confirm</button>
  </form>


  <div class="list">
    <ol>
      <li class="items" v-for="actor in actors" v-bind:key="actor.IdMovie" v-if="actors.length">
        <span>{{actor.Name}}</span>
        <span>{{actor.Surname}}</span>
        <span>{{actor.Nickname}}</span>
        <div class="listButton">
          <button class="removeBtn" @click="showEdit">Edit</button>
          <button class="putButton" @click="putActor(actor.Name, actor.Surname, actor.Nickname)">Edit</button>
          <button class="removeBtn" @click="removeMovie(actor.IdActor)">Delete</button>
        </div>
      </li>
      <p v-else>No Actors.</p>
    </ol>
  </div>

  <div v-if="edit">
    <EditVue @close="showEdit" :Name="Name"/>
  </div>
</template>

<script>
import EditVue from "@/views/directories/EditVue";
export default {
  name: "Actor",
  components: {
    EditVue
  },
  data(){
    return{
      IdActor: null,
      Name: '',
      Surname: '',
      Nickname: '',
      actors:[],
      titleError: '',
      genreError: '',
      gradeError: '',
      edit: false
    }
  },
  mounted() {
    fetch('https://localhost:44370/api/Actor')
        .then(response => response.json())
        .then(json =>{
          this.actors = json
        })
  },
  methods:{
    showEdit(){
      this.edit = !this.edit
    },
    putActor(name, surname, nickname){
      const url = 'https://localhost:44370/api/Actor';
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Name: name,
          Surname: surname,
          Nickname: nickname
        })
      };
    },
    addMovie(name, surname, nickname){
      let index = this.actors.length + 1
      this.actors.push({ IdActor: index, Name: name, Surname: surname, Nickname: nickname})
      const url = 'https://localhost:44370/api/Actor';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Name: name,
          Surname: surname,
          Nickname: nickname
        })
      };
      fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })

    },
    removeMovie(id){
      const index = this.actors.findIndex(e => e.IdActor === id)
      this.actors.splice(index, 1)

      const url = 'https://localhost:44370/api/Actor/' + id;
      const options = {
        method: 'DELETE',
      };
      fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
    },
    handleSubmit(){
      this.titleError = this.Name.length > 0 ?
          '' : 'You have to enter a title'
      this.genreError = this.Surname.length > 0 ?
          '' : 'You have to enter a genre'
      this.gradeError = this.Nickname.length > 0 ?
          '' : 'You have to give a grade'
      if(!this.titleError && !this.genreError && !this.gradeError){
        this.Name = ""
        this.Surname = ""
        this.Nickname = ""
      }

    }
  }
}
</script>

<style scoped>

</style>