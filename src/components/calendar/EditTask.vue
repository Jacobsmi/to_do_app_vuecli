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
    <button id="deleteButton" v-show="!editing" v-on:click="deleteClick(task[0])">Delete</button>
    <div id="editTask" v-show="editing">
        <label for="taskName">Task Name</label>
        <input type="text" id="taskName" name="taskName">
        <label for="dueDate">Due Date</label>
        <input type="date" id="dueDate" name="dueDate"><br>
        <label for="completed">Completed</label>
        <input type="checkbox" id="isComp"><br><br><br>

        <button id="cancel" v-on:click="cancelClick">Cancel</button>
        <button id="submit" v-on:click="submitClick">Submit</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'EditTask',
    props: {
        task:{
            required: true
        }
    },
    data: function () {
        return{
            editing: false,
            date: null
        }
    },
    watch:{
        task: function (){
            this.editing = false
            let dateParts = this.task[2].split('-')
            this.date = `${dateParts[1]}-${dateParts[2]}-${dateParts[0]}` 
        }
    },
    methods: {
        // SET UP THE EDIT COMPONENT
        editClick: function (){
            console.log(`Editting ${this.task[3]}`)
            document.getElementById("taskName").value = this.task[1]
            document.getElementById("dueDate").value = this.task[2]
            if (this.task[3] === 1){
                console.log("Should be checked")
                document.getElementById("isComp").checked = true
            }else{
                document.getElementById("isComp").checked = false
            }
            this.editing = true
        },
        cancelClick: function (){
            this.editing = false
        },
        submitClick: function (){
            
            let completed = 0
            if (document.getElementById("isComp").checked === true){
                console.log("Hit the if")
                completed = 1
            }
            console.log(completed)
            // Create a data dictionary that gets all the values for the task
            let data = {
                'id': this.task[0],
                'name':document.getElementById("taskName").value,
                'due': document.getElementById("dueDate").value,
                'completed': completed
            }
            // Send the new task data to the API so it can be stored in the DB using fetch
            fetch(process.env.VUE_APP_UPDATE_TASK, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })

            // Reset this.task values so they display without reloading the page
            this.task[1] = document.getElementById("taskName").value
            this.task[2] = document.getElementById("dueDate").value
            let dateParts = this.task[2].split('-')
            this.date = `${dateParts[1]}-${dateParts[2]}-${dateParts[0]}`
            this.task[3] = completed

            this.editing = false
        },
        deleteClick: function (id){
            this.$emit('delete', id)
            fetch(process.env.VUE_APP_DELETE_TASK,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'id': id
                })
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