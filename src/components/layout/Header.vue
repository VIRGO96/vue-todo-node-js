<template>
    <header class="header">
        <h1>ToDoList</h1>
        <button class="btn-bg" @click="logout">Logout</button>
    </header>
     
</template>

<script>
export default {
    name:"Header",
    methods:{
        logout(){
            localStorage.removeItem("user")
            this.$router.push({path:'/'})
        }
    }
}
</script>


<style scoped>
 .header{
     background-color: black;
     padding: 10px;
     color: aliceblue;
     text-align: center;
 }

.btn-bg{
    /* float: right;     */
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
</style>


