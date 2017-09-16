<template>

  <div class="users">
    <h1>Users</h1>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter Name"/><br />
      <input type="text" v-model="newUser.email" placeholder="Enter Mail"/><br />
      <input type="submit" value="add user" />
    </form>
    <ul>
      <li v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.contacted" />
        <span :class="{contacted: user.contacted}">
          {{user.name}}: {{user.email}} <button v-on:click="deleteUser(user)">x</button>
        </span>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'users',
    data () {
      return {
        newUser: {},
        users: []
      }
    },
    methods: {
      addUser: function (e) {
        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false
        })
        e.preventDefault
      },
      deleteUser: function (user) {
        this.users.splice(this.users.indexOf(user), 1)
      }
    },
    created: function () {
      console.log('available')
      this.$http.get('http://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          this.users = response.body
        })
    }
  }
</script>

<style scoped>
  .contacted {
    text-decoration: line-through;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
    margin-top: 60px;
  }
</style>
