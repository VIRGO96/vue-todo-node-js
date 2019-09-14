<template>
    <div>
    <Header/>
    <Addtodo v-on:editodo="updatetodo" v-on:addtodo="addtodo" :value="edit_prop_value"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deletetodo" v-on:edit-todo="editodo"/>
    <p v-if="todos.length===0">No to do items addd yet</p>
    </div>
</template>


<script>
import { RepositoryFactory } from '../repository/RepositoryFactory'
const ToDoManagement = RepositoryFactory.get('todomanagement')

import Todos from './Todos'
import Addtodo from './Addtodo'
import Header from './layout/Header';
export default {
  name: 'app',
  components: {
    Todos,
    Header,
    Addtodo
    
  },
  methods : {
    async updatetodo(edit_item) {
      const { data } = await ToDoManagement.updatedtodos(edit_item)
      this.getTodos()
      this.edit_prop_value=null

    },
    editodo(item){
      this.edit_prop_value=item
    },
    async deletetodo(id)
    {
      const { data } = await ToDoManagement.deletetodos(id)
      this.getTodos()
    },
    async addtodo(newtodo)
    {
      const { data } = await ToDoManagement.addtodos(newtodo.title)
      this.getTodos()
    },
    async getTodos(){
      const { data } = await ToDoManagement.gettodos()
      this.todos=data.data
  },
  },
  data(){
    return{
      todos:[],
      edit_prop_value:null,
    }
  },
  created(){
    this.getTodos()
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 2px;
  cursor: pointer;
}

</style>
