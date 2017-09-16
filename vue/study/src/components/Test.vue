<template>

  <div class="test">
    <input type="text" v-model="title" />
    <h1>{{title}}</h1>
    <p v-if="show">{{user.firstName}}</p>
    <p v-else>Nawbaddy</p>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
    <button v-on:click="greet('Hello World')">Say Greeting</button>

    <hr/>

    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit"/>
    <label>First Name: </label><input type="text" v-model="user.firstName" />
    <br />
    <label>Last Name: </label><input type="text" v-model="user.lastName" />
    <h3>{{fullName}}</h3>
    <h2>{{msg}}</h2>
  </div>

</template>

<script>
  export default {
    name: 'test',
    props: {
      msg: {
        type: String,
        default: 'foo bar'
      }
    },
    data () {
      return {
        title: 'Hello World',
        user: {
          firstName: 'No Way',
          lastName: 'Jose'
        },
        show: false,
        items: [
          {title: 'Frappuccino'},
          {title: 'Cappuccino'},
          {title: 'Mocha Latte'}
        ]
      }
    },
    methods: {
      greet: (greeting) => {
        alert(greeting)
      },
      pressKey: (e) => {
        console.log(e.target.value)
        console.log(this.a)
      },
      enterHit: () => {
        console.log('You hit submit!')
      }
    },
    computed: {
      fullName: function () {
        return this.user.firstName + ' ' + this.user.lastName
      }
    }
  }
</script>

<style scoped>
  * {
    color: red;
  }
</style>
