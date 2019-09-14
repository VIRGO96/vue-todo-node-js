<template>
    <div class="todo-item" v-bind:class="{'is-complete':items.completed}">
        <p>
        <input type="checkbox" v-model="items.completed" v-on:change="togglepoint(items)"/>{{items.todo}}
        <button class="btn" v-on:click="$emit('del-todo',items.id)">X</button>
        <button class="btn-bg" v-on:click="$emit('edit-todo',items)">E</button>

        </p>
    </div>
</template>



<script>
import { RepositoryFactory } from '../repository/RepositoryFactory'
const ToDoManagement = RepositoryFactory.get('todomanagement')

export default {
    name:"Todoitem",
    props:["items"],
    methods:{
        async togglepoint (itemval)
        {
            if(itemval.completed==true){
            const { data } = await ToDoManagement.changestatus({completed:1,todo_id:itemval.id})
            console.log(data)
            }
            else if(itemval.completed==false){
            const { data } = await ToDoManagement.changestatus({completed:0,todo_id:itemval.id})
            console.log(data)
            }
            else{
                console.log(itemval)
            }
        }
    }
    
}   
</script>


<style scoped>
.todo-item{
    padding: 10px;
    color:white;
    background-color:#514a8a;
    border-bottom: 2px #ccc dotted

}
.is-complete{
    text-decoration: line-through;
    color:red;
}

.btn{
    float: right;
    background-color: rgb(218, 73, 80); /* Green */
    border: none;
    color: white;
    padding: 5px 12px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 2px;
    cursor: pointer;
}
.btn-bg{
    float: right;
    background-color: rgb(60, 151, 226); /* Green */
    border: none;
    color: white;
    padding: 5px 12px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 2px;
    cursor: pointer;
}
</style>