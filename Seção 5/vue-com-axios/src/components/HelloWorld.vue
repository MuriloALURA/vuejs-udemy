<template>
  <div>
    <ul v-if="posts && posts.length">
      <li v-for="post in posts">
        <p>,<strong>Title: {{post.title}}</strong></p>
        <p>Message: {{post.body}}</p>
      </li>
    </ul>
    <ul v-if="errors && errors.length">
      <li v-for="error in erros">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      posts: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      this.posts = response.data
    })
    .catch (e => {
      this.erros.push(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
