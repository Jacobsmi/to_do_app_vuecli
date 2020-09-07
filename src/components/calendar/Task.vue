<template>
<div id="task" v-if="task != null">
    <div id="taskData" v-show="!editing">
        Task Name: {{ task[1] }}<br>
        Due Date: {{ this.date }}
        <div id="completed" v-if="task[3] === 1">
            Completed
        </div>
        <div id="notCompleted" v-if="task[3] === 0">
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
            editing: false,
            date: null
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
            let dateParts = this.task[2].split('-')
            this.date = `${dateParts[1]}-${dateParts[2]}-${dateParts[0]}` 
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
            let data = {
                'id': this.task[0],
                'name':document.getElementById("taskName").value,
                'due': document.getElementById("dueDate").value,
                'completed': document.getElementById("completed").value
            }
            fetch('http://127.0.0.1:5000/updatetask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            this.editing = false
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