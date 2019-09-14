<template>
 <div>
    <div v-bind:key="items.id" v-for="items in todos">
       <Todoitem v-bind:items="items" v-on:edit-todo="$emit('edit-todo',items)" v-on:del-todo="$emit('del-todo',items.id)"/>
    </div>
 </div>
    
</template>

<script>
import Todoitem from './Todoitem.vue';
export default {
    name:"Todos",
    components:{
        Todoitem
    },
    props:["todos"]
}
</script>

<style scoped>

</style>
