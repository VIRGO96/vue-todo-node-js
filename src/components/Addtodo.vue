<template>
    <div>
        <form class="form-inline" @submit="saveitem">
            <input type="text"  v-model="title" placeholder="Add item" name="additem">
            <input type="submit" class="button"  value="Save" />
        </form>
    </div>


</template>

<script>
import uuid from 'uuid';
export default {
    props:['value'],
    name:"Addtodo",
    data(){
        return {
            title:''
        }
    },
    watch:{
        value(){
           this.title=this.value.todo
        }
    },
    methods:{
        saveitem:function(e)
        {//to stop the default loading of form submission 
            e.preventDefault();
            if(this.value!=null){
                const editodo ={
                    todo_id:this.value.id,
                    todo:this.title,                
                }
                this.$emit('editodo',editodo);
                this.title='';
            }
            else{
                const newtodo ={
                    id:uuid.v4(),
                    title:this.title,  
                                    completed: false
              
                }

                this.$emit('addtodo',newtodo);
                this.title='';

            }


        }

    }
}
</script>


<style scoped>

.form-inline { 
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-flow: row wrap;
  align-items: center;
}

input[type="text"]
{
    flex:10;
    padding: 10px 22px;
}
input[type="submit"]
{
    flex:2;

}
</style>


