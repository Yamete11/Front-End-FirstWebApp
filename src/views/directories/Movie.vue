<template>
  <form @submit.prevent="handleSubmit" class="main-form">
    <div class="form">
      <input type="text" name="name" v-model="Title" autocomplete="off" required>
      <label for="name" class="label-name">
        <span class="content-name">Title</span>
      </label>
      <div v-if="titleError" class="error">{{ titleError }}</div>
    </div>

    <div class="form">
      <input type="text" name="name" v-model="Genre" autocomplete="off" required>
      <label for="name" class="label-name">
        <span class="content-name">Genre</span>
      </label>
      <div v-if="genreError" class="error">{{ genreError }}</div>
    </div>

    <div class="form">
      <input type="text" min="1" max="10" v-model="Grade" autocomplete="off" required>
      <label for="name" class="label-name">
        <span class="content-name">Grade</span>
      </label>
      <div v-if="gradeError" class="error">{{ gradeError }}</div>
    </div>

    <button class="btn" @click="addMovie(Title, Genre, Grade)">Confirm</button>
  </form>


  <div class="list">
    <ol>
        <li class="items" v-for="movie in movies" v-bind:key="movie.IdMovie" v-if="movies.length">
          <span>{{movie.Title}}</span>
          <span>{{movie.Genre}}</span>
          <span>{{movie.Grade}}</span>
          <div class="listButton">
            <button class="removeBtn">Edit</button>
            <button class="removeBtn" @click="removeMovie(movie.IdMovie)">Delete</button>
          </div>
        </li>
      <p v-else>No Movies.</p>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Movie",
  data(){
    return{
      IdMovie: null,
      Title: '',
      Genre: '',
      Grade: '',
      movies:[],
      titleError: '',
      genreError: '',
      gradeError: ''
    }
  },
  mounted() {
    fetch('https://localhost:44370/api/Movie')
        .then(response => response.json())
        .then(json =>{
          this.movies = json
        })
  },

  methods:{
    addMovie(title, genre, grade){
      let index = this.movies.length + 1
      this.movies.push({ IdMovie: index, Title: title, Genre: genre, Grade: grade})
      const url = 'https://localhost:44370/api/Movie';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Title: title,
          Genre: genre,
          Grade: grade
        })
      };
      fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })

    },
    removeMovie(id){
      const index = this.movies.findIndex(e => e.IdMovie === id)
      this.movies.splice(index, 1)

      const url = 'https://localhost:44370/api/Movie/' + id;
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