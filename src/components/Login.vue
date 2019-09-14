<template>
    <div>
       <form class="modal-content animate" @submit="authLogin" >
            <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" v-model="username" name="uname" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" v-model="password" placeholder="Enter Password" name="psw" required>
                
            <button type="submit">Login</button>
           
            </div>

        </form>
    </div>
</template>


<script>
import { RepositoryFactory } from '../repository/RepositoryFactory'
const UserAuth = RepositoryFactory.get('userauth')

export default {
    data() {
        return{
            username:'dawood',
            password:'dawood'
        }
    },
    methods:{
        async authLogin(e) {
        e.preventDefault();
        console.log(this.username)
        console.log(this.password)
        const { data } = await UserAuth.login({username:this.username,password:this.password})
        console.log(data)
        if(data.error){
        alert(data.message)
        }
        else{
            localStorage.setItem("user",data.data[0])
            this.$router.push({path:'dashboard'})
        }

        }
    }
}
</script>

<style scoped>
/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.container {
  padding: 16px;
}



/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}


</style>


