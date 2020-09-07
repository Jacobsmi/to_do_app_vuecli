<template>
<div id="task" v-if="task != null">
    <div id="taskData" v-show="!editing">
        Task Name: {{ task[1] }}<br>
        Due Date: {{ task[2] }}
        <div id="completed" v-if="!completed">
            Completed
        </div>
        <div id="notCompleted" v-else>
            Not Completed
        </div>
    </div>
    <button id="editButton" v-show="!editing" v-on:click="editClick">Edit</button>
    <div id="editTask" v-show="editing">
        <label for="taskName">Task Name</label>
        <input type="text" id="taskName" name="taskName">
        <label for="dueDate">Due Date</label>
        <input type="date" id="dueDate" name="dueDate"><br>
        <label for="completed">Completed</label>
        <input type="checkbox" name="completed" id="completed"><br><br><br>

        <button id="cancel" v-on:click="cancelClick">Cancel</button>
        <button id="submit" v-on:click="submitClick">Submit</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'Task',
    props: {
        task:{
            required: true
        }
    },
    data: function () {
        return{
            completed: false,
            editing: false
        }
    },
    watch:{
        task: function (val){
            this.editing = false
            if (val[3] === 1){
                console.log("True")
                this.completed = true
            }else{
                this.completed = false
            }
        }
    },
    methods: {
        editClick: function (){
            document.getElementById("taskName").value = this.task[1]
            document.getElementById("dueDate").value = this.task[2]
            document.getElementById("completed").value = this.task[3]
            this.editing = true
        },
        cancelClick: function (){
            this.editing = false
        },
        submitClick: function (){
            
        }
    }
    
}
</script>

<style>
#task{
    margin: 20px;
    border-radius: 10px;
    background-color: #6883BA;
}
#taskData{
    padding-top: 2vh;
}
#editTask{
    padding-top: 2vh;   
}
</style>