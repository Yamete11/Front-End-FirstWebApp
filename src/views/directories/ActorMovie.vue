<template>
  <form @submit.prevent="handleSubmit" class="main-form">
    <div class="form">

      <select name="name" v-model="MovieTitle">
        <option v-for="movie in movies">{{ movie.Title }}</option>
      </select>

<!--      <div v-if="titleError" class="error">{{ titleError }}</div>-->
    </div>

    <div class="form">

      <select name="name" v-model="ActorNickname">
        <option v-for="actor in actors">{{ actor.Nickname }}</option>
      </select>

<!--      <div v-if="genreError" class="error">{{ genreError }}</div>-->
    </div>

    <div class="form">
      <input type="text" min="1" max="10" v-model="CharacterName" autocomplete="off" required>
      <label for="name" class="label-name">
        <span class="content-name">Character Name</span>
      </label>
<!--      <div v-if="gradeError" class="error">{{ gradeError }}</div>-->
    </div>

    <button class="btn" @click="addMovie(MovieTitle, ActorNickname, CharacterName)">Confirm</button>
  </form>


  <div class="list">
    <ol>
      <div class="items" v-for="moAc in movieActors" v-bind:key="moAc.IdActorMovie" v-if="movieActors.length">
        <li>
          <span class="result">{{moAc.Title}}</span>
          <span class="result">{{moAc.Nickname}}</span>
          <span class="result">{{moAc.CharacterName}}</span>
          <button>Edit</button>
          <button class="removeBtn" @click="removeMovie(moAc.IdActorMovie)">Delete</button>
        </li>
      </div>
      <p v-else>No Actor-Movie.</p>
    </ol>
  </div>
</template>

<script>
export default {
  name: "ActorMovie",
  data(){
    return{
      IdActorMovie: null,
      Title: '',
      Nickname: '',
      MovieTitle: '',
      ActorNickname: '',
      CharacterName: '',
      movieActors:[],
      movies:[],
      actors:[],
      titleError: '',
      genreError: '',
      gradeError: ''
    }
  },
  mounted() {
    fetch('https://localhost:44370/api/ActorMovie')
        .then(response => response.json())
        .then(json =>{
          this.movieActors = json
        })
    fetch('https://localhost:44370/api/Movie')
        .then(response => response.json())
        .then(json =>{
          this.movies = json
        })
    fetch('https://localhost:44370/api/Actor')
        .then(response => response.json())
        .then(json =>{
          this.actors = json
        })
  },

  methods:{
    addMovie(movieTitle, actorNickname, characterName){
      let index = this.movieActors.length + 1
      this.movieActors.push({ IdActorMovie: index, Title: movieTitle, Nickname: actorNickname, CharacterName: characterName})
      const url = 'https://localhost:44370/api/ActorMovie';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Title: movieTitle,
          Nickname: actorNickname,
          CharacterName: characterName
        })
      };
      fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })

    },
    removeMovie(id){
      const index = this.movieActors.findIndex(e => e.IdActorMovie === id)
      this.movieActors.splice(index, 1)

      const url = 'https://localhost:44370/api/ActorMovie/' + id;
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
      this.titleError = this.Title.length > 0 ?
          '' : 'You have to enter a title'
      this.genreError = this.Genre.length > 0 ?
          '' : 'You have to enter a genre'
      this.gradeError = this.Grade.length > 0 ?
          '' : 'You have to give a grade'
      if(!this.titleError && !this.genreError && !this.gradeError){
        this.Title = ""
        this.Grade = ""
        this.Genre = ""
      }

    }
  }
}
</script>

<style scoped>

</style>